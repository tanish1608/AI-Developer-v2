import { chat } from "./aiHandler.js";
import { processResponse } from "./fileManager.js";
import { componentPrompt, pagePrompt, apiPrompt, dependencyPrompt, routingPrompt } from '../prompt/index.js';

export async function executePlan(plan, appName, messages) {

  // Process APIs
  if (plan.apis && plan.apis.length > 0) {
    for (let api of plan.apis) {
      console.log(`\nCreating API: ${api.name} - ${api.description}\n`);

      messages.push({
        role: "user",
        content: `
        ${apiPrompt}
        Please generate the code for the API: ${api.name}. ${api.description}`,
      });

      const aiResponse = await chat(messages);

      // Append AI response to the messages for context
      messages.push({
        role: "assistant",
        content: aiResponse.content,
      });

      // Process the AI response and create the API files
      await processResponse(aiResponse.content, appName);
    }
  }

  // Process components
  if (plan.components && plan.components.length > 0) {
    for (let component of plan.components) {
      console.log(`\nCreating Component: ${component.name} - ${component.description}\n`);

      messages.push({
        role: "user",
        content: `${componentPrompt}

        Please generate the code for the component: ${component.name}. ${component.description}
        `,
      });

      const aiResponse = await chat(messages);

      // Append AI response to the messages for context
      messages.push({
        role: "assistant",
        content: aiResponse.content,
      });

      // Process the AI response and create the component files
      await processResponse(aiResponse.content, appName);
    }
  }

  // Process pages
  if (plan.pages && plan.pages.length > 0) {
    for (let page of plan.pages) {
      console.log(`\nCreating Page: ${page.name} - ${page.description}\n`);

      messages.push({
        role: "user",
        content: `${pagePrompt}
        
        generate the code for the page: ${page.name}. ${page.description}`,
      });

      const aiResponse = await chat(messages);

      // Append AI response to the messages for context
      messages.push({
        role: "assistant",
        content: aiResponse.content,
      });

      // Process the AI response and create the page files
      await processResponse(aiResponse.content, appName);
    }
  }

  // Process routing setup
  if (plan.routing && plan.routing.length > 0) {
    console.log(`\nSetting up Routing and Navigation`);

    // Add the routing setup to the app.js
    messages.push({
      role: "user",
      content: `${routingPrompt}
      
      Generate the routing code for React.js using simple JavaScript and CSS. Ensure routing functionality is set up correctly in the App.js file with basic links for navigation.`,
    });

    const aiResponse = await chat(messages);

    // Append AI response to the messages for context
    messages.push({
      role: "assistant",
      content: aiResponse.content,
    });

    // Process the AI response and create the routing setup
    await processResponse(aiResponse.content, appName);
  }
}