#!/usr/bin/env node
import dotenv from 'dotenv';
import { askAppDetails, askQuestion } from './utils/interaction.js';
import inquirer from 'inquirer';
import { createReactAppWithProgress } from './utils/appCreation.js';
import { chat } from './utils/aiHandler.js';
import { executePlan } from './utils/planExecutor.js';
import { installModulesFromResponse } from './utils/moduleInstaller.js';
import chalk from 'chalk';

import { dependencyPrompt } from './prompt/index.js';

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
      - If the user input lacks clarity, ask for additional details before proceeding.
    `,
  },
];

function main(args) {
  let message = 'Dev AI: I am ready for next task  \nYou:';

  if (args === 'create app')
    message =
      "Dev AI: Hey there, developer! I'm Dev.AI, your AI coding assistant – ready to help you build, debug, and innovate. How can I assist you today? \nYou:";

  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'user_input',
        message: chalk.greenBright(message),
        prefix: '',
      },
    ])
    .then(async (answers) => {
      try {
        // Step 1: Get user input
        const user_input = answers.user_input.trim();
        if (user_input === 'bye') {
          console.log('Thank you. Goodbye.');
          process.exit(0);
        }

        if (user_input.toLowerCase().includes('create a')) {
          const appDetails = await askAppDetails();

          console.log('\nRequesting development plan from AI...\n');

          messages.push({
            role: 'user',
            content: `Please provide a detailed plan for creating a ${user_input}.
              Ensure the response is in JSON format and includes components, pages, and APIs that need to be created.
              - Important: Only provide a plan for now, no code for the next response.
              - This is a React JS project, so page components should not contain any state logic and should consume the appWrapper component.
              - The plan should include the necessary components, pages, and routing based on the user input, while the example structure must always be included as part of the response.
              - Ensure that the required pages like App, Login and Register are included, along with other pages or components based on the user input.
              - Here is the required plan structure:
          
              Example JSON plan:
              \`\`\`json
              {
                "components": [
                  {
                    "name": "Header",
                    "description": "A common header component used across all pages, including navigation links to the main routes."
                  }
                ],
                "pages": [
                  {
                    "name": "LoginPage",
                    "description": "Create a page for user login. This will include a form for username and password submission."
                  },
                  {
                    "name": "App",
                    "description": "n \`App.js\`, use \`react-router-dom\` to define the routes using \`<Routes>\` and \`<Route>\`. Use \`<Link>\` components in the Header for navigation"
                  },
                  {
                    "name": "RegisterPage",
                    "description": "Create a page for new user registration. This will include a form for user details like username, email, and password."
                  },
                  {
                    "name": "HomePage",
                    "description": "The default landing page of the application. It consumes the Header component and serves as an overview page."
                  },
                  {
                    "name": "AboutUsPage",
                    "description": "A page that provides details about the application or the organization. Consumes the Header component."
                  }
                ],
                "routing": {
                  "description": "Set up React Router in \`App.js\` to manage navigation between the pages. Render the Header on all pages where applicable.",
                  "routes": [
                    {
                      "path": "/",
                      "component": "HomePage",
                      "description": "Default route for the HomePage."
                    },
                    {
                      "path": "/login",
                      "component": "LoginPage",
                      "description": "Route for the LoginPage, allowing users to log in to the application."
                    },
                    {
                      "path": "/register",
                      "component": "RegisterPage",
                      "description": "Route for the RegisterPage, allowing users to create a new account."
                    },
                    {
                      "path": "/about",
                      "component": "AboutUsPage",
                      "description": "Route for the AboutUsPage, providing information about the app or organization."
                    }
                  ],
                  "example": "In \`App.js\`, use \`react-router-dom\` to define the routes using \`<Routes>\` and \`<Route>\`. Use \`<Link>\` components in the Header for navigation."
                },
                "folderStructure": {
                  "src": {
                    "components": {
                      "Header.js": "A reusable component for the header, including navigation links."
                    },
                    "pages": {
                      "AboutUsPage.js": "Page providing information about the app or organization.",
                      "HomePage.js": "Default landing page of the application.",
                      "LoginPage.js": "Login page with form for username and password.",
                      "RegisterPage.js": "Registration page with form for creating a new account."
                    },
                    "App.js": "Main entry file for the app, responsible for routing.",
                    "index.js": "Main entry point for React to render the app.",
                    "App.css": "General styles for the app, including the layout and appearance.",
                    "logo.svg": "Logo for the application."
                  }
                }
              }
              \`\`\`
          
              - Based on the above example, add other pages, components, or routes required based on the specific user input.
              - Ensure that all necessary pages and components are created and referenced appropriately in the plan.
              `
          });
          let plan;

          try {
            // Push user input to the messages array

            const aiPlanResponse = await chat(messages);

            console.log(aiPlanResponse, 'response');

            // Append the AI's plan response to the messages for context
            messages.push({
              role: 'assistant',
              content: aiPlanResponse.content,
            });

            // Parse the AI's JSON response
            plan = await extractJsonFromMarkdown(aiPlanResponse.content);
          } catch (error) {
            console.error('Error parsing AI response:', error);
            return;
          }

          console.log(
            '\nDevelopment Plan Received:\n',
            JSON.stringify(plan, null, 2),
          );

          // setep 2: create a folder
          await createReactAppWithProgress(appDetails.appName);

          // Step 3: Execute the plan based on the AI’s JSON response
          await executePlan(plan, appDetails.appName, messages);

          // Step 4: Install necessary modules based on AI response
          // module executer
          messages.push({
            role: 'user',
            content: `
            ${dependencyPrompt}`,
          });
          const aiResponse = await chat(messages);

          await installModulesFromResponse(aiResponse.content,`./${appDetails.appName}`);

          console.log('\nApp creation completed successfully!\n');
        }

        main(); // Rerun for next interaction
      } catch (error) {
        console.error(error);
      }
    });
}

main('create app');

async function extractJsonFromMarkdown(input) {
  // Step 1: Use a regular expression to extract the JSON content between the ```json block
  const jsonMatch = input.match(/```json([\s\S]*?)```/);

  // Step 2: Check if a match was found
  if (jsonMatch && jsonMatch[1]) {
    const jsonString = jsonMatch[1].trim(); // Clean up any extra spaces or newlines

    // Step 3: Parse the JSON content
    try {
      const parsedJson = JSON.parse(jsonString);
      return parsedJson;
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return null; // Return null if parsing fails
    }
  } else {
    console.error('No JSON block found.');
    return null; // Return null if no JSON block is found
  }
}
