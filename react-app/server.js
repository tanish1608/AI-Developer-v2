const express = require('express');
const cors = require('cors'); // Import CORS
const fs = require('fs');
const path = require('path');

const app = express();
const folderPath = path.join(__dirname, './buildbot');

// Use CORS middleware
app.use(cors()); // Enables CORS for all routes

app.get('/files', (req, res) => {
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

  try {
    const folderStructure = getFileTree(folderPath);
    res.json(folderStructure);
  } catch (err) {
    res.status(500).send('Error reading folder structure');
  }
});



app.get('/:filename', (req, res) => {
    const filePath = path.join(folderPath, req.params.filename);
    res.sendFile(filePath);
  });




app.listen(5000, () => console.log('Server running on port 5000'));