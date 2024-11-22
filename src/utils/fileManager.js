import fs from 'fs';
import path from 'path';

export async function processResponse(response, projectDir) {
  try {
    console.log("\nCreating files...");
    const lines = response.split("\n");

    let currentFile = "";
    let fileContent = [];
    let insideCodeBlock = false;
    const folderStructure = {};

    for (const line of lines) {
      let trimmedLine = line.replace(/\*/g, '').trim();

      if (trimmedLine.startsWith("FILE:")) {
        // Write the previous file if there's any content
        if (currentFile && fileContent.length > 0) {
          await writeFileAndTrackStructure(
            `${projectDir}/${currentFile}`,
            fileContent.join("\n"),
            folderStructure
          );
        }

        // Start tracking the new file
        currentFile = trimmedLine.split("FILE: ")[1].trim();
        fileContent = [];
        continue;
      }

      if (trimmedLine.startsWith("```")) {
        insideCodeBlock = !insideCodeBlock;
        continue;
      }

      // Collect lines inside the code block
      if (insideCodeBlock && currentFile) {
        fileContent.push(trimmedLine);
      }
    }

    // Write the last file if there's any content
    if (currentFile && fileContent.length > 0) {
      await writeFileAndTrackStructure(
        `${projectDir}/${currentFile}`,
        fileContent.join("\n"),
        folderStructure
      );
    }

    console.log('All files created successfully.');

    // Save folder structure to a file
    const structureFilePath = path.join(projectDir, "folder_structure.txt");
    await fs.promises.writeFile(structureFilePath, renderFolderStructure(folderStructure));

    console.log(`Folder structure written to ${structureFilePath}`);
  } catch (error) {
    console.error("Error creating files:", error);
    throw error;
  }
}

async function writeFileAndTrackStructure(filePath, content, folderStructure) {
  try {
    const dir = path.dirname(filePath);
    const relativeDir = path.relative(process.cwd(), dir);

    // Create the directory if it doesn't exist (recursively)
    await fs.promises.mkdir(dir, { recursive: true });

    // Write the file content
    await fs.promises.writeFile(filePath, content);

    console.log(`File '${filePath}' created successfully.`);

    // Track the file in the folder structure
    const parts = relativeDir.split(path.sep);
    let current = folderStructure;
    for (const part of parts) {
      if (!current[part]) {
        current[part] = {};
      }
      current = current[part];
    }
    current[path.basename(filePath)] = null; // Leaf node (file)
  } catch (err) {
    console.error(`Error writing to file ${filePath}:`, err);
    throw err; // Re-throw error to allow handling by the caller
  }
}

function renderFolderStructure(structure, depth = 0) {
  let output = "";
  const indent = "  ".repeat(depth);
  for (const key in structure) {
    if (structure[key] === null) {
      output += `${indent}- ${key}\n`; // File
    } else {
      output += `${indent}${key}/\n`; // Directory
      output += renderFolderStructure(structure[key], depth + 1); // Recurse into subdirectories
    }
  }
  return output;
}