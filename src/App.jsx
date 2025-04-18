import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from './components/about/about';
import Footer from './components/Footer/Footer';
import Project from './components/Project/project';
import Hero from './components/Hero/hero';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/home' element={<Hero />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/about-me' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
