import React from 'react';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Jobs from './components/Jobs';
import Footer from './components/Footer';
import { Box } from '@mui/material';

export default function App() {
  return (
    <Box>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Jobs />
      </main>
      <Footer />
    </Box>
  );
}
