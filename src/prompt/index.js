const componentPrompt = `
You are a developer agent tasked with creating a highly interactive, reusable, and visually appealing React component for a React.js app. The component should include the following:

### 1. **Component File (.js)**:
   - Use **React Functional Component** with **props** and **state** management.
   - Use **inline CSS** for styling, ensuring styles are scoped to the component.
   - Use **React Hooks** like \`useState\`, \`useEffect\`, and \`useRef\` for managing state, side effects, and component references.
   - Ensure the component is **reusable** with **customizable props**.

### 2. **Component Features**:
   - The component should be interactive and have state management.
   - Implement **dynamic styling** based on component state (e.g., change button color on click, hover effects).
   - **Error Handling**: Ensure proper handling of any user inputs or interactions.
   - Ensure **accessibility** by adding ARIA roles or attributes where needed.
   - Provide **feedback** or animations during user interactions (e.g., loading states or button clicks).
   - Include **default props**.

### 3. **Example Component**:

FILE: src/components/ButtonWithCounter.js
\`\`\`javascript
import React, { useState, useEffect } from 'react';

function ButtonWithCounter({ initialCount = 0, buttonText = "Click Me" }) {
  const [count, setCount] = useState(initialCount);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('Component mounted or updated!');
  }, [count]);

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setCount(count + 1);
      setLoading(false);
    }, 500);
  };

  // Inline CSS styles
  const containerStyle = {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  };

  const countTextStyle = {
    fontSize: "18px",
    margin: "20px 0",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  const buttonDisabledStyle = {
    backgroundColor: "#cccccc",
    cursor: "not-allowed",
  };

  const loadingStyle = {
    backgroundColor: "#ffcc00",
  };

  return (
    <div style={containerStyle}>
      <p style={countTextStyle}>Button clicked {count} times</p>
      <button
        style={{
          ...buttonStyle,
          ...(loading ? loadingStyle : {}),
          ":hover": buttonHoverStyle
        }}
        onClick={handleButtonClick}
        disabled={loading}
        aria-live="polite"
      >
        {loading ? 'Processing...' : buttonText}
      </button>
    </div>
  );
}

export default ButtonWithCounter;
\`\`\`

### 4. **Component Behavior Enhancements**:
   - **State Management**: The component has a state for counting button clicks and another for managing the loading state (to simulate an async action).
   - **Effect Hook**: The \`useEffect\` hook logs updates when the count changes.
   - **Inline CSS**: All styles are defined directly inside the component using JavaScript objects.
   - **Loading State**: The component shows a loading text when the button is clicked, simulating an API call or process.
   - **Custom Props**: The component allows customization of the initial count and button text via props, with default values provided.
   - **Accessibility**: The \`aria-live="polite"\` attribute ensures that screen readers announce changes to the button text when it's updated.

### 5. **Best Practices**:
   - **Error Handling**: The button is disabled while the action is processing to avoid multiple clicks.
   - **Accessibility**: The component includes accessibility considerations with ARIA attributes.
   - **Dynamic Inline Styling**: The styles for the button change dynamically based on the loading state.

This updated version of the component now uses **inline CSS** for all styles, which can be helpful for smaller components or cases where styling doesn't need to be reused elsewhere. The functionality remains the same, but the styles are applied directly within the JavaScript file, improving the ease of use and simplicity for small applications.
`;

const pagePrompt = `
You are a developer agent tasked with creating a highly interactive and styled React.js page using inline CSS. Follow these requirements:

### 1. **Page Creation**:
   - Create a React component for the page, using **functional components**.
   - Include meaningful content, such as a heading, description, buttons, or any other elements that make the page informative and interactive.
   - Use **inline CSS** for all styles within the page component.
   - Do not include state management or hooks (focus on static content only).
   - The page should include **attractive and responsive styles** that make it look polished and professional.

### 2. **Routing Integration**:
   - Ensure the page is linked in the \`App.js\` file.
   - Add a route in \`App.js\` using \`react-router-dom\` to navigate to the created page.
   - Update the **Header component** to include a link to the new page.

### 3. **Improved Example Page**:

**FILE:** src/pages/About.js
\`\`\`javascript
import React from "react";

const About = () => {
  const containerStyle = {
    maxWidth: "900px",
    margin: "50px auto",
    padding: "30px",
    backgroundColor: "#fafafa",
    borderRadius: "12px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    fontSize: "36px",
    color: "#333",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.8",
    marginBottom: "20px",
  };

  const buttonStyle = {
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  const buttonDisabledStyle = {
    backgroundColor: "#cccccc",
    cursor: "not-allowed",
  };

  const handleClick = () => {
    alert("More about us coming soon!");
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <p style={paragraphStyle}>
        Welcome to the About Us page! Here, we provide detailed information
        about our mission, values, and goals. Learn about our team and our
        commitment to providing the best user experience. Our app is designed
        to make your tasks easier, more efficient, and enjoyable.
      </p>
      <button
        style={buttonStyle}
        onClick={handleClick}
        onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
      >
        Learn More
      </button>
    </div>
  );
};

export default About;
\`\`\`

### 4. **Key Features**:
   - **Responsive Styling**: The page container has maximum width, margin, and padding for better alignment on different screen sizes.
   - **Heading and Paragraphs**: The content is structured with a heading and a detailed description to introduce the company, product, or service.
   - **Call-to-Action Button**: Added a "Learn More" button with hover effect and event handling to make the page interactive.
   - **Inline CSS**: All styles are defined within the component using JavaScript objects. The button styles are dynamic, with hover effects included.
   - **Responsive Layout**: The layout is optimized for different screen sizes, ensuring the page is visually appealing across devices.

### 5. **Routing and Integration**:
   - In \`App.js\`, create a route that links to the new page:

   FILE: src/App.js
   \`\`\`javascript
   import React from "react";
   import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
   import About from './pages/About';
   import Home from './pages/Home';
   import Login from './pages/Login';
   import Register from './pages/Register';
   import Header from './components/Header';

   function App() {
     return (
       <Router>
         <Header />
         <div>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register />} />
           </Routes>
         </div>
       </Router>
     );
   }

   export default App;
   \`\`\`

   - **Update Header component** to include a link to the About page:

   FILE: src/components/Header.js
   \`\`\`javascript
   import React from 'react';
   import { Link } from 'react-router-dom';

   function Header() {
     const headerStyle = {
       backgroundColor: '#282c34',
       padding: '10px',
       textAlign: 'center',
     };

     const linkStyle = {
       color: 'white',
       margin: '0 10px',
       textDecoration: 'none',
     };

     return (
       <nav style={headerStyle}>
         <Link to="/" style={linkStyle}>
           Home
         </Link>
         <Link to="/about" style={linkStyle}>
           About Us
         </Link>
         <Link to="/login" style={linkStyle}>
           Login
         </Link>
         <Link to="/register" style={linkStyle}>
           Register
         </Link>
       </nav>
     );
   }

   export default Header;
   \`\`\`

### 6. **Additional Features**:
   - **Hover Effects**: The button changes its color on hover, providing users with visual feedback.
   - **Alert on Button Click**: Clicking the button triggers a simple alert, providing a placeholder for future interaction.

This page structure is simple, interactive, and integrates well with the routing system in a React app. The page content can be extended and customized easily.`


const apiPrompt = `
You are a developer agent tasked with creating a node API route using javaScript. The API route should meet the following requirements:

1. **API Route Structure**:
   - Place the API route in the src/pages/api  directory.
   - Handle multiple HTTP methods (e.g., GET, POST, DELETE) using \`req.method\` to distinguish between them.
   - Respond with appropriate status codes:
     - 200 for successful GET requests
     - 201 for successful POST requests
     - 204 for successful DELETE requests
     - 400 for bad requests (e.g., missing required fields)
     - 500 for server errors

2. **Request Validation**:
   - Validate the request body for POST, PUT, or PATCH methods.
   - Respond with a 400 status and an error message if validation fails.
   - Use try-catch blocks for error handling.

3. **TypeScript Integration**:
   - Use TypeScript to type request and response objects.
   - Define and import types or data structures in a \`types.ts\` file.

4. **Example API Route**:

**FILE:** \`src/pages/api/todos.ts\`
\`\`\`typescript
import { NextApiRequest, NextApiResponse } from "next";
import { Todo } from "./types";

let todos: Todo[] = [];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case "GET":
        return res.status(200).json(todos);

      case "POST":
        const { title } = req.body;
        if (!title) {
          return res.status(400).json({ error: "Title is required" });
        }
        const newTodo: Todo = { id: Date.now().toString(), title, completed: false };
        todos.push(newTodo);
        return res.status(201).json(newTodo);

      case "DELETE":
        const { id } = req.body;
        todos = todos.filter((todo) => todo.id !== id);
        return res.status(204).end();

      default:
        res.setHeader("Allow", ["GET", "POST", "DELETE"]);
        return res.status(405).json({ error: \`Method {req.method} Not Allowed\` });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
\`\`\`

`;
const dependencyPrompt = `
YYou are a developer agent tasked with generating the list of required modules for a Next.js project. Follow these requirements:

1. **Dependency List**:
   - Identify npm modules required to run the project.
   - List all modules in JSON format for easy installation with \`npm install\`.

2. **Module Versioning**:
   - Provide the latest stable version for each module.

3. **Output Format**:

\`\`\`json
{
  "modules": [
    { "name": "react-router-dom", "version": "latest" },
    { "name": "axios", "version": "latest" },
    { "name": "typescript", "version": "latest" }
  ]
}
\`\`\`

`;

const routingPrompt = `
You are a developer agent tasked with modifying the \`App.js\` file of a React.js project to include routing and navigation using \`react-router-dom\`. Follow these requirements:

1. Add \`BrowserRouter\` to enable routing in the application.
2. Create routes for three pages:
   - **Home**: The main landing page.
   - **About**: A page displaying information about the app.
   - **Contact**: A page with contact details.
3. Include a navigation bar at the top of the application with links to the Home, About, and Contact pages.
4. Replace the placeholder content in the original \`App.js\` file with the updated routing logic.
5. Use plain CSS for styling the navigation bar and the content of each page.

### Example Output

FILE: src/App.js
\`\`\`javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center' }}>
        <Header />
        <div style={{ margin: '20px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
\`\`\`

 

Instructions:
- Implement the above structure in \`App.js\`.
- Ensure navigation links work correctly to route between pages.
- Add basic styles to the navigation bar and content sections using plain CSS.
- No placeholder or unused content should remain in the output.
`;

export { componentPrompt, pagePrompt, apiPrompt, dependencyPrompt , routingPrompt};
