
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import LanguageSwitcher from "./LanguageSwitcher";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const menuItems = ["Home", "About", "Services", "Contact"];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#1E1E1E",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
          color: "#fff",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">        <img
              src="/logo.png"
              alt="Logo"
              style={{ height: 40, marginRight: 12 }}
            />
       </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {menuItems.map((item) => (
              <Button key={item} color="inherit">
                {item}
              </Button>
            ))}
            <LanguageSwitcher />
          </Box>

          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Toolbar />

 
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "40vw",
            height: "60vh",
            marginTop: "10px",
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            overflow: "hidden",
            position: "absolute",
            backgroundColor: "#1E1E1E",
            color: "#fff",
          },
        }}
      >
  
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton sx={{ color: "#fff" }} onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {menuItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}

          <LanguageSwitcher />
        </List>
      </Drawer>
    </>
  );
}

     