import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
function App() {
return (
<Router>
<Header />
<Routes>
<Route path="/about" element={<AboutPage />} />
</Routes>
</Router>
);
}

export default App;