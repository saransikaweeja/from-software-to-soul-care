import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Predict from './pages/Predict';
import Home from './pages/Home';
import Header from './layouts/header';
import './index.css';

function App() {
 // Initialize dark mode state based on localStorage or system preference
 const [isDarkMode, setIsDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem('hs_theme');
  if (savedTheme) {
    return savedTheme === 'dark';
  } else {
    // Return true if the system prefers dark mode, false otherwise
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
});

useEffect(() => {
  const html = document.documentElement;

  if (isDarkMode) {
    html.classList.add('dark');
    localStorage.setItem('hs_theme', 'dark');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('hs_theme', 'light');
  }
}, [isDarkMode]);

const toggleDarkMode = () => {
  setIsDarkMode((prevMode) => !prevMode);
};

  return (
    <Router>
      <div className={`${isDarkMode ? 'dark' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>

        {/* Define the routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict" element={<Predict />} />
        </Routes>

        {/* <footer>
        </footer> */}
      </div>
    </Router>
  );
}

export default App;
