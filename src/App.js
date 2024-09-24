import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Predict from './pages/Predict';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Header from './layouts/header';
import Footer from './layouts/footer';
import './index.css';

function App() {
 
  return (
    <Router>
      <div className="dark:bg-neutral-900">
      <Header/>

        {/* Define the routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
