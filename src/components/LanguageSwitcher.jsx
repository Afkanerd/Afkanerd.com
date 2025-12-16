import React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleClose();
  };

  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "fa", label: "فارسی" },
    { code: "es", label: "Español" },
    // { code: "de", label: "Deutsch" },
    // { code: "ru", label: "Русский" },
    // { code: "it", label: "Italiano" },
  ];

  return (
    <>
      <IconButton
        sx={{ color: "white" }}
        onClick={handleClick}
        aria-label="Change language"
      >
        <LanguageIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {languages.map((lng) => (
          <MenuItem
            key={lng.code}
            selected={i18n.language === lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
