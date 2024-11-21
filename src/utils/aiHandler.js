import chalk from 'chalk';
import axios from 'axios';
import dotenv from 'dotenv';
import fs from 'fs';  // Import fs module to handle file writing

dotenv.config();

const API_URL = process.env.LOCAL_LLAMA_URL;
const MODAL = 'llama3.1';

const docFilePath = 'chat_log.txt'; // File where we'll store the logs

// Initialize the document file with a header if it doesn't exist
if (!fs.existsSync(docFilePath)) {
  fs.writeFileSync(docFilePath, 'Chat Log - Request/Response Documentation\n\n');
}

async function chat(messages) {
  const body = {
    model: MODAL,
    messages: messages,
  };

  // Log the incoming request (messages)
  const requestLog = `REQUEST:\n${JSON.stringify(body, null, 2)}\n\n`;
  fs.appendFileSync(docFilePath, requestLog);

  try {
    const response = await axios({
      method: 'post',
      url: API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      responseType: 'stream', // Set response type to stream
    });

    const decoder = new TextDecoder();
    let content = '';

    // Handle the streaming response by reading chunks of data
    return new Promise((resolve, reject) => {
      response.data.on('data', (chunk) => {
        const rawjson = decoder.decode(chunk, { stream: true }); // Decode chunk as text
        let json;

        try {
          const jsonObjects = rawjson.trim().split('\n');
          jsonObjects.forEach((jsonStr) => {
            try {
              json = JSON.parse(jsonStr);
              if (json.done === false) {
                process.stdout.write(chalk.green(json.message.content));
                content += json.message.content;
              }
            } catch (error) {
              console.error('Error parsing JSON:', error);
            }
          });
        } catch (e) {
          console.error('Error parsing chunk:', e);
        }
      });

      response.data.on('end', () => {
        // Log the response when finished
        const responseLog = `RESPONSE:\n${content}\n\n`;
        fs.appendFileSync(docFilePath, responseLog);

        resolve({ role: 'assistant', content });
      });

      response.data.on('error', (error) => {
        console.error('Error in stream:', error);
        reject(error);
      });
    });
  } catch (error) {
    console.error('Error from llama', error);

    // Log error response
    const errorLog = `ERROR:\n${error.message}\n\n`;
    fs.appendFileSync(docFilePath, errorLog);

    throw error; // Pass the error up the chain
  }
}

export { chat };