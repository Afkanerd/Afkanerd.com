import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Jobs from './components/Jobs'

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Jobs />
              <Contact />
            </>
          } 
        />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
