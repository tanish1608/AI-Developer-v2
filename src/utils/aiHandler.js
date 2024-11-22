// import chalk from 'chalk';
// import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

// const API_URL = process.env.LOCAL_LLAMA_URL;
// const MODAL = 'llama3.1';


// async function chat(messages) {
//   const body = {
//     model: MODAL,
//     messages: messages,
//   };

//   // Log the incoming request (messages)
//   const requestLog = `REQUEST:\n${JSON.stringify(body, null, 2)}\n\n`;

//   try {
//     const response = await axios({
//       method: 'post',
//       url: API_URL,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       data: body,
//       responseType: 'stream', // Set response type to stream
//     });

//     const decoder = new TextDecoder();
//     let content = '';

//     // Handle the streaming response by reading chunks of data
//     return new Promise((resolve, reject) => {
//       response.data.on('data', (chunk) => {

//         const rawjson = decoder.decode(chunk, { stream: true }); // Decode chunk as text

//         let json;

//         try {
//           const jsonObjects = rawjson.trim().split('\n');
//           jsonObjects.forEach((jsonStr) => {
//             try {
//               json = JSON.parse(jsonStr);
//               if (json.done === false) {
//                 process.stdout.write(chalk.green(json.message.content));
//                 content += json.message.content;
//               }
//             } catch (error) {
//               console.error('Error parsing JSON:', error);
//             }
//           });
//         } catch (e) {
//           console.error('Error parsing chunk:', e);
//         }
//       });

//       response.data.on('end', () => {
//         // Log the response when finished
//         const responseLog = `RESPONSE:\n${content}\n\n`;
//         resolve({ role: 'assistant', content });
//       });

//       response.data.on('error', (error) => {
//         console.error('Error in stream:', error);
//         reject(error);
//       });
//     });
//   } catch (error) {
//     console.error('Error from llama', error);

//     // Log error response
//     const errorLog = `ERROR:\n${error.message}\n\n`;

//     throw error; // Pass the error up the chain
//   }
// }

// export { chat };

// import chalk from 'chalk';
// import dotenv from 'dotenv';
// import { Groq } from 'groq-sdk'; // Import Groq SDK

// dotenv.config();

// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY, // Add your Groq API key in the .env file
// });

// // const MODEL = 'llama-3.1-8b-instant';
// // const MODEL = "llama-3.1-70b-versatile"
// const MODEL = "llama3-8b-8192"

// async function chat(messages) {
//   console.log(chalk.blue('Sending request to Groq API...'));

//   try {
//     // Send a chat completion request to Groq
//     const chatCompletion = await groq.chat.completions.create({
//       model: MODEL,
//       messages: messages,
//       temperature: 1,
//       max_tokens: 1024,
//       top_p: 1,
//       stream: true, // Enable streaming response
//     });

//     let content = '';

//     // Process streaming response
//     for await (const chunk of chatCompletion) {
//       const deltaContent = chunk.choices[0]?.delta?.content || '';
//       process.stdout.write(chalk.green(deltaContent)); // Print chunk to console
//       content += deltaContent;
//     }

//     console.log(chalk.blue('\nStreaming complete.'));
//     return { role: 'assistant', content }; // Return the full response
//   } catch (error) {
//     console.error(chalk.red('Error from Groq API:'), error.message);
//     throw error;
//   }
// }

// export { chat };


import chalk from 'chalk';
import dotenv from 'dotenv';
import Together from 'together-ai'; // Import Together SDK

dotenv.config();

const together = new Together({
  apiKey: process.env.TOGETHER_API_KEY, // Add your Together API key in the .env file
});

// const MODEL = 'meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo';
const MODEL = 'meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo';
async function chat(messages) {
  console.log(chalk.blue('Sending request to Together AI API...'));

  try {
    // Send a chat completion request to Together AI
    const response = await together.chat.completions.create({
      messages: messages,
      model: MODEL,
      max_tokens: null, // Use null if no limit, or set a specific number
      temperature: 0.7, // Adjust creativity
      top_p: 0.7,       // Control cumulative probability
      top_k: 50,        // Number of most likely tokens considered
      repetition_penalty: 1, // Penalize repetitive phrases
      stop: ['<|eot_id|>', '<|eom_id|>'], // Define stop sequences
      stream: true, // Enable streaming response
    });

    let content = '';

    // Process streaming response
    for await (const token of response) {
      const deltaContent = token.choices[0]?.delta?.content || '';
      process.stdout.write(chalk.green(deltaContent)); // Print chunk to console
      content += deltaContent;
    }

    console.log(chalk.blue('\nStreaming complete.'));
    return { role: 'assistant', content }; // Return the full response
  } catch (error) {
    console.error(chalk.red('Error from Together AI API:'), error.message);
    throw error;
  }
}

export { chat };