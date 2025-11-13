import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    <AppBar position="sticky" color="inherit" elevation={2}>
      <Toolbar className="container d-flex justify-content-between">
        <Box className="d-flex align-items-center">
          <img src="https://via.placeholder.com/40" alt="Afkanerd" style={{ borderRadius: 8, marginRight: 12 }} />
          <Typography variant="h6" component="div">Afkanerd</Typography>
        </Box>

        <Box className="d-none d-md-flex align-items-center">
          <Button href="#about">About</Button>
          <Button href="#projects">Projects</Button>
          <Button href="#jobs">Jobs</Button>
          <Button variant="contained" color="primary" href="#contact" sx={{ ml: 2 }}>Contact</Button>
        </Box>

        <IconButton edge="end" className="d-md-none" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
