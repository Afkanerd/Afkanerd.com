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
import GitHubIcon from "@mui/icons-material/GitHub"; 
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();

  const navLinks = [
    { key: "home", label: t("nav.home") },
    { key: "about", label: t("nav.about") },
    { key: "projects", label: t("nav.projects") },
    { key: "jobs", label: t("nav.jobs") },
    { key: "contact", label: t("nav.contact") },
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [elevate, setElevate] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setDrawerOpen(false);
  };

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
        fontFamily: "'Share Tech'"
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: { xs: 2, sm: 5, md: 10 }
}}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={() => scrollToSection("home")}
        >
          <Box component="img" src="/logo.png" alt="Logo" sx={{ height: 40 }} />
        </Typography>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => (
            <Typography
              key={link.key}
              onClick={() => scrollToSection(link.key)}
              sx={{
                cursor: "pointer",
                "&:hover": { color: "#f5f5f5" },
                fontFamily: "'Share Tech'",
              }}
            >
              {link.label}
            </Typography>
          ))}

          <IconButton
            component="a"
            href="https://github.com/Afkanerd"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <GitHubIcon />
          </IconButton>

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
        PaperProps={{
          sx: { bgcolor: "#1e1e1e", color: "white", width: "250px" },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navLinks.map((link) => (
            <ListItem key={link.key} disablePadding>
              <ListItemButton onClick={() => scrollToSection(link.key)}>
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{ fontFamily: "'Share Tech'" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ p: 2, display: "flex", gap: 2, alignItems: "center" }}>
          <IconButton
            component="a"
            href="https://github.com/Afkanerd"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <GitHubIcon />
          </IconButton>

          <LanguageSwitcher />
        </Box>
      </Drawer>
    </AppBar>
  );
}
