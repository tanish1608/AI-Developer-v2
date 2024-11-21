import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-nav">
          <Link to="/">Home</Link>
        </nav>
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
