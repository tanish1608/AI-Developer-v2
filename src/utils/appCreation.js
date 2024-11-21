import { spawn } from 'child_process';
import ora from 'ora';

// Function to run the React.js app creation command with progress tracking
export function createReactAppWithProgress(appName) {
  return new Promise((resolve, reject) => {
    try {
      const command = 'npx';
      const args = [
        'create-react-app', // React.js app creator
        appName             // The name of the app
      ];

      const spinner = ora(`Creating React.js app '${appName}'...`).start(); // Start spinner
      const process = spawn(command, args);

      process.stdout.on('data', (data) => {
        spinner.text = data.toString(); // Update spinner text with real-time output
      });

      // Capture stderr data (for errors or warnings) and display it while the spinner runs
      process.stderr.on('data', (data) => {
        spinner.text = data.toString(); // Show errors or warnings in the spinner
      });

      // When the process is finished
      process.on('close', (code) => {
        if (code === 0) {
          spinner.succeed(`React.js app '${appName}' created successfully.`); // Success message
          resolve(); // Resolve the promise
        } else {
          spinner.fail(`Process exited with code ${code}`); // Fail message
          reject(new Error(`Process exited with code ${code}`)); // Reject the promise
        }
      });
    } catch (error) {
      spinner.fail('Failed to create the React.js app.'); // If an error occurs
      reject(error);
    }
  });
}