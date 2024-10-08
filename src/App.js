import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Predict from './pages/Predict';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';
import Blog4 from './pages/Blog4';
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
          <Route path="/blog-1" element={<Blog1 />} />
          <Route path="/blog-2" element={<Blog2 />} />
          <Route path="/blog-3" element={<Blog3 />} />
          <Route path="/blog-4" element={<Blog4 />} />
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
