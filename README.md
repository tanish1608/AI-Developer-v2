
# BuildBot AI
agent based project scaffolding and building framework.
Not like a typical coding agent where you get help on existing project.
Here you can scaffold a project and build on top of it using AI of your choice.
LLAMA 3.1, Open AI, Claude Sonnet etc

## Instructions to install the dependencies 

### rename .env.example with .env
### provide your api keys if you want to use open-ai
```
- node .src/index.js
- npm install 
- npm link
    - then run "dev-ai" cli from anywhere of the terminal 

```

### Setup llama3.1 on ollama locally to use this project
- install ollama from the website https://ollama.com/download
- Open terminal type `ollama pull llama3.1`
- After Installation type `ollama serve`
- To verify the installation `ollama list`
- Run the model `ollama run llama3.1`
- Keep it running, now go the git repo run the as the above intructions.



### Setup to run the entire project
- run the folder server  - `node server.cjs`
- run the backend server - `node src/index.js`
- run the electron JS front end app using the `npm run dev`
- finally run the generated react app using `npm start`


### Future Work
- Send the server Response to the backend. and display in front end 
- Dynamically update the folder structure in the app
- restructure the chat section inside the app
- improve the prompt and the model parameters. model etc hence better output
- increase the compatability to more tech stacks 





## Demo video 
link : https://drive.google.com/file/d/1vHCobBLiFTpfnp9BrNf3HYGlb74tRUn0/view?usp=sharing 

## Example promt for demo
1. Create a to-do app using Next.js, and Tailwind CSS with a single page named 'Dashboard' consume To-doWrapper component with CRUD (Create, Read, Update, Delete) operations on to-do items with api created; include an input field and button for adding items, display items in a list format with options to edit, delete, and mark as completed using a checkbox; ensure real-time updates for adding, editing, and deleting items, and organize the code using functional components with comments for clarity. develop end to end app and wrapper component with entire app fully function

2. Create a social media app using Next.js and Tailwind CSS, designed for personal use on a single page named 'Dashboard.' Implement a PostWrapper component with CRUD (Create, Read, Update, Delete) operations for posts. Include an input field for adding a text message and a file upload button for adding an image to each post. Display posts in a feed format, showing text and images with options to edit, delete, and like posts. Implement real-time updates for adding, editing, and deleting posts. Organize the code using functional components with comments for clarity and build the app end-to-end, including the PostWrapper component, to ensure a fully functional personal social media dashboard.

Create a simple Todo app using React. The app should allow users to add, edit, and delete tasks. Each task will have a name, a deadline, and a completion status. The Todo app should feature a form to input new tasks, a list displaying all tasks, and the ability to toggle the completion status of tasks. The app should also allow users to filter tasks based on their completion status (e.g., show all, show completed, show active). Style the app using CSS for basic layout and design. Ensure that the components are modular, and follow React best practices for state management, component structure, and file organization. Implement routing to allow for navigation between different views (such as a main list of tasks and a page to view task details).




