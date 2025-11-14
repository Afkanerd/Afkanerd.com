import React from "react";
import { Box, Button, IconButton, AppBar, Toolbar } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Scroll to section if on homepage
  const handleScroll = (id) => {
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#1E1E1E", color: "white" }} elevation={2}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src="/logo.png" alt="Afkanerd" style={{ width: 50, height: 30, borderRadius: 8 }} />
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button onClick={() => handleScroll("home")} sx={{ color: "white", textTransform: "none" }}>Home</Button>
          <Button onClick={() => handleScroll("about")} sx={{ color: "white", textTransform: "none" }}>About</Button>
          <Button onClick={() => handleScroll("projects")} sx={{ color: "white", textTransform: "none" }}>Projects</Button>
          <Button component={RouterLink} to="/jobs" sx={{ color: "white", textTransform: "none" }}>Jobs</Button>
          <Button onClick={() => handleScroll("contact")} sx={{ color: "white", textTransform: "none" }}>Contact</Button>
          <IconButton sx={{ color: "white" }}>
            <LanguageIcon />
          </IconButton>
          <IconButton sx={{ color: "white", display: { md: "none" } }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
