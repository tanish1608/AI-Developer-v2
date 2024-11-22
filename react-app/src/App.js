import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import AboutUsPage from './pages/AboutUsPage.js';

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