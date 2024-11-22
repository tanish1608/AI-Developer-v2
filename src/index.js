#!/usr/bin/env node
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import { askAppDetails, askQuestion } from './utils/interaction.js';
import { createReactAppWithProgress } from './utils/appCreation.js';
import { chat } from './utils/aiHandler.js';
import { executePlan } from './utils/planExecutor.js';
import { installModulesFromResponse } from './utils/moduleInstaller.js';
import chalk from 'chalk';
import { dependencyPrompt } from './prompt/index.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 9002;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Function to extract JSON from markdown (helper function)
async function extractJsonFromMarkdown(input) {
  const jsonMatch = input.match(/```json([\s\S]*?)```/);
  if (jsonMatch && jsonMatch[1]) {
    const jsonString = jsonMatch[1].trim();
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return null;
    }
  } else {
    console.error('No JSON block found.');
    return null;
  }
}

// POST endpoint to process user input
app.post('/generate-app', async (req, res) => {
  const { user_input } = req.body;

  if (!user_input) {
    return res.status(400).json({ error: 'User input is required.' });
  }

  const messages = [
    {
      role: 'system',
      content: `You are a highly skilled developer agent specializing in generating code for React.js frontend projects based on user requests.
        - Your task is to generate a complete implementation of React.js applications, components, or features as requested by the user.
        - Follow these rules strictly:
          1. High priority: Provide the **entire implementation**. Do not leave any sections incomplete or placeholders like "TODO".
          2. All file outputs must use the format "FILE: [file name]". Ensure correct and logical file structuring.
          3. Encapsulate all code blocks using \`\`\` (triple backticks) for easy extraction.
          4. Do not use any additional formatting such as **bold** or markdown styles outside of \`\`\`.
          5. If additional setup, commands, or dependencies are required (e.g., \`npm install\` or \`vite\`), provide clear instructions alongside the code.
          6. Adhere to modern React.js best practices and include all necessary imports, exports, and configurations.
        - Aim for clarity and efficiency. Provide clean and modular code following React.js conventions.
        - If the user input lacks clarity, ask for additional details before proceeding.`,
    },
  ];

  try {
    // Add user input to the conversation
    messages.push({
      role: 'user',
      content: `Please provide a detailed plan for creating a ${user_input}.
        Ensure the response is in JSON format and includes components, pages, and APIs that need to be created.`,
    });

    console.log(chalk.blue('Requesting plan from AI...'));

    // Request a development plan from the AI
    const aiPlanResponse = await chat(messages);

    // Extract JSON plan from the AI's response
    const plan = await extractJsonFromMarkdown(aiPlanResponse.content);
    if (!plan) {
      return res
        .status(500)
        .json({ error: 'Failed to extract a valid plan from AI response.' });
    }

    console.log(chalk.green('Plan received from AI:'), JSON.stringify(plan, null, 2));

    // Create a React app
    const appDetails = { appName: "proj2" };
    await createReactAppWithProgress(appDetails.appName);

    console.log(chalk.blue('Executing plan...'));

    // Execute the plan to generate files and components
    await executePlan(plan, appDetails.appName, messages);

    console.log(chalk.blue('Installing dependencies...'));

    // Install required dependencies
    messages.push({
      role: 'user',
      content: dependencyPrompt,
    });
    const dependenciesResponse = await chat(messages);
    await installModulesFromResponse(dependenciesResponse.content, `./${appDetails.appName}`);

    console.log(chalk.green('Application successfully created!'));

    // Send success response
    res.status(200).json({
      message: 'Application successfully created!',
      appDetails,
      plan,
    });
  } catch (error) {
    console.error(chalk.red('Error during app creation process:', error));
    res.status(500).json({ error: 'An error occurred during app creation.', details: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(chalk.green(`Server is running on http://localhost:${PORT}`));
});