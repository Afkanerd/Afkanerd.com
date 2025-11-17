import React from "react";
import { AppBar, Toolbar, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Jobs", path: "/jobs" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleScroll = (id) => {
    if (location.pathname === "/" && id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#1E1E1E",
        color: "white",
        boxShadow: "none",
        borderBottom: "none",
        px: { xs: 2, md: 4 },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: 1200,
          width: "100%",
          mx: "auto",
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/logo.png"
            alt="Afkanerd"
            style={{ width: 50, height: 30, borderRadius: 8 }}
          />
        </Box>

        {/* Desktop Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {navItems.map((item) =>
            item.path ? (
              <Button
                key={item.label}
                component={RouterLink}
                to={item.path}
                sx={{ color: "white", textTransform: "none" }}
              >
                {item.label}
              </Button>
            ) : (
              <Button
                key={item.label}
                onClick={() => handleScroll(item.id)}
                sx={{ color: "white", textTransform: "none" }}
              >
                {item.label}
              </Button>
            )
          )}
          <IconButton sx={{ color: "white" }}>
            <LanguageIcon />
          </IconButton>
        </Box>

        {/* Mobile Hamburger */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton color="inherit" onClick={handleOpenMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            {navItems.map((item) =>
              item.path ? (
                <MenuItem key={item.label} onClick={handleCloseMenu} component={RouterLink} to={item.path}>
                  {item.label}
                </MenuItem>
              ) : (
                <MenuItem key={item.label} onClick={() => { handleScroll(item.id); handleCloseMenu(); }}>
                  {item.label}
                </MenuItem>
              )
            )}
            <MenuItem onClick={handleCloseMenu}>
              <LanguageIcon /> &nbsp; Language
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
