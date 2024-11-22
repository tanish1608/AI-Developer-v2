const express = require('express');
const cors = require('cors'); // Import CORS
const fs = require('fs');
const path = require('path');

const app = express();
const folderPath = path.join(__dirname, '/todo');

// Use CORS middleware
app.use(cors()); // Enables CORS for all routes

// Function to get the folder structure
const getFileTree = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries
    .filter((entry) => entry.name !== 'node_modules') // Exclude node_modules
    .map((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return {
          name: entry.name,
          type: 'folder',
          children: getFileTree(fullPath),
        };
      } else {
        return { name: entry.name, type: 'file' };
      }
    });
};

// Endpoint to get the initial folder structure
app.get('/files', (req, res) => {
  try {
    const folderStructure = getFileTree(folderPath);
    res.json(folderStructure);
  } catch (err) {
    console.error('Error reading folder structure:', err);
    res.status(500).send('Error reading folder structure');
  }
});

// Endpoint to notify about folder updates
app.get('/updates', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const sendUpdate = () => {
    const folderStructure = getFileTree(folderPath);
    res.write(`data: ${JSON.stringify(folderStructure)}\n\n`);
  };

  const watcher = fs.watch(folderPath, { recursive: true }, () => {
    sendUpdate();
  });

  // Send initial data
  sendUpdate();

  req.on('close', () => {
    watcher.close();
  });
});

// Endpoint to get a specific file's content from any directory
app.get('/*', (req, res) => {
  // Decode the requested file path
  const requestedPath = decodeURIComponent(req.params[0]);
  const filePath = path.join(folderPath, requestedPath);

  console.log(`Serving file: ${filePath}`);

  // Validate if the file exists and is within the allowed folder path
  if (!filePath.startsWith(folderPath)) {
    console.error('Attempt to access file outside allowed folder path.');
    return res.status(403).send('Access denied');
  }

  // Check if the file exists and is a valid file
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      console.error(`File not found: ${filePath}`);
      return res.status(404).send('File not found');
    }

    // Send the file
    res.sendFile(filePath, (err) => {
      if (err) {
        console.error(`Error sending file: ${filePath}`, err);
        res.status(500).send('Error sending file');
      }
    });
  });
});

app.listen(9000, () => console.log('Server running on port 9000'));
