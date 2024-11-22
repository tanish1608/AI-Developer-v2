import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import AuthProvider from './context/AuthContext';


function App() {
return (
<BrowserRouter>
<AuthProvider>
<nav className="nav-bar">
<h1 className="nav-title">Task Manager</h1>
<ul className="nav-links">
<li>
<Link to="/register" className="nav-link">
Register
</Link>
</li>
<li>
<Link to="/home" className="nav-link">
Home
</Link>
</li>
</ul>
</nav>
<Routes>
<Route path="/register" element={<Register />} />
<Route path="/home" element={<Home />} />
</Routes>
</AuthProvider>
</BrowserRouter>
);
}

export default App;