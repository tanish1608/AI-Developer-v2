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
            content: `Please provide a detailed plan for creating a React.js application based on the following requirements: ${user_input}.
                      - Ensure the response is in JSON format and includes the following:
                        1. **Components**: Define the reusable building blocks for the app. Each component should have a name and description of its purpose or logic.
                        2. **Pages**: Outline the main pages of the application, including the routing setup in \`App.js\`. Each page should describe how it integrates components, fulfills its functionality, and how it will be linked to other pages using React Router.
                        3. **Folder Structure**: Provide a structured folder layout for the project, detailing where components, assets, styles, and utilities should be placed.
                        4. **APIs**: If applicable, mention the APIs the app will consume and their purpose.
                      - Important Guidelines:
                        1. **Do Not** provide any code at this stage; only outline the plan.
                        2. Components should be modular and designed to support separation of concerns.
                        3. Pages should integrate components, implement routing via React Router in \`App.js\`, and fulfill their intended functionality.
                        4. Adhere to React.js best practices for file naming, folder structuring, and modularity.
                      - Example Response:
                      
                      ##### PLAN example output:
                      \`\`\`json
                      {
                        "components": [
                          {
                            "name": "Header",
                            "description": "A reusable header component with navigation and branding. It will contain links for routing to different pages in \`App.js\`."
                          },
                          {
                            "name": "Card",
                            "description": "A generic card component to display information blocks in a grid layout on the Home page."
                          }
                        ],
                        "pages": [
                          {
                            "name": "HomePage",
                            "description": "The landing page that includes the Header component and a grid of Card components. It will be the default route in the app ('/')."
                          },
                          {
                            "name": "AboutPage",
                            "description": "A page providing details about the application. It will be linked from the Header as '/about'."
                          },
                          {
                            "name": "ContactPage",
                            "description": "A page where users can contact the app creators. It will be linked from the Header as '/contact'."
                          }
                        ],
                        "folderStructure": {
                          "src": {
                            "components": ["Header", "Card"],
                            "pages": ["HomePage", "AboutPage", "ContactPage"],
                            "styles": ["global.css", "HomePage.css", "AboutPage.css"],
                            "utils": []
                          }
                        },
                        "apis": [
                          {
                            "name": "getCards",
                            "description": "Fetches data for populating the Card components in the HomePage grid."
                          }
                        ],
                        "appRouting": {
                          "description": "In \`App.js\`, set up React Router to manage the routes between different pages.",
                          "routes": [
                            {
                              "path": "/",
                              "component": "HomePage",
                              "description": "Default route for the HomePage."
                            },
                            {
                              "path": "/about",
                              "component": "AboutPage",
                              "description": "Route for the AboutPage, linked via the Header."
                            },
                            {
                              "path": "/contact",
                              "component": "ContactPage",
                              "description": "Route for the ContactPage, linked via the Header."
                            }
                          ],
                          "example": "In \`App.js\`, use \`react-router-dom\` to create \`Routes\` for each page and \`Link\` for navigation."
                        }
                      }
                      \`\`\`
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
