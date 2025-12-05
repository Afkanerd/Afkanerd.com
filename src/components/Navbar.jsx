import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = ["Home", "About", "Projects", "Jobs", "Contact"];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [elevate, setElevate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setElevate(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#1e1e1e",
        color: "white",
        transition: "0.3s",
        boxShadow: elevate ? "0px 2px 10px rgba(0,0,0,0.5)" : "none",
        fontFamily: "'Share Tech'",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          <Box component="img" src="/logo.png" alt="Logo" sx={{ height: 40, cursor: "pointer" }} />
        </Typography>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
            alignItems: "center",
          }}
        >
          {navLinks.map((item) => (
            <Typography
              key={item}
              sx={{ cursor: "pointer", "&:hover": { color: "#f5f5f5" }, fontFamily: "'Share Tech'" }}
            >
              {item}
            </Typography>
          ))}

          <LanguageSwitcher />
        </Box>

        <IconButton
          onClick={() => setDrawerOpen(true)}
          sx={{ display: { xs: "block", md: "none" }, color: "white" }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { bgcolor: "#1e1e1e", color: "white", width: "250px", fontFamily: "'Share Tech'" } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ fontFamily: "'Share Tech'" }}>
          {navLinks.map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{ fontFamily: "'Share Tech'" }}>
                <ListItemText primary={text} primaryTypographyProps={{ fontFamily: "'Share Tech'" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ p: 2 }}>
          <LanguageSwitcher />
        </Box>
      </Drawer>
    </AppBar>
  );
}
