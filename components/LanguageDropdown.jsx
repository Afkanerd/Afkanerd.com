"use client";

import { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import { Button, Menu, MenuItem } from "@mui/material";
import { useI18n } from "@/components/i18n/I18nProvider";

export default function LanguageDropdown() {
  const { lang, setLang, t } = useI18n();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const items = [
    { key: "en", label: t("navbar.language.en", "English") },
    { key: "fr", label: t("navbar.language.fr", "French") },
    { key: "fa", label: t("navbar.language.fa", "Farsi") },
  ];

  return (
    <>
      <Button
        startIcon={<LanguageIcon sx={{ fontSize: 16, color: "#d4d4d4" }} />}
        onClick={(event) => setAnchorEl(event.currentTarget)}
        sx={{
          position: "relative",
          px: 2,
          py: 1,
          minWidth: 0,

          color: "#fff",
          textTransform: "none",
          fontFamily: "var(--font-jetbrains), monospace",
          backgroundColor: "rgba(255,255,255,.03)",
          borderRadius: "0px",
          transition: "all .2s ease",

          "&::before, &::after": {
            content: '""',
            position: "absolute",
            width: 12,
            height: 12,
            pointerEvents: "none",
          },

          // top-left
          "&::before": {
            top: 0,
            left: 0,
            borderTop: "1px solid rgba(255,255,255,.3)",
            borderLeft: "1px solid rgba(255,255,255,.3)",
          },

          // bottom-right
          "&::after": {
            bottom: 0,
            right: 0,
            borderBottom: "1px solid rgba(255,255,255,.3)",
            borderRight: "1px solid rgba(255,255,255,.3)",
          },

          "&:hover": {
            backgroundColor: "rgba(255,255,255,.05)",
          },
        }}
      >
        {lang.toUpperCase()}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              bgcolor: "#1b1b1b",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: "0px",
              backgroundImage: "none",

              "& .MuiMenuItem-root": {
                fontFamily: "var(--font-jetbrains), monospace",
                color: "#d4d4d4",
                borderRadius: "0px",
                mx: 0.5,
                my: 0.25,

                "&.Mui-selected": {
                  bgcolor: "rgba(255,255,255,.05)",
                  color: "#fff",
                },

                "&.Mui-selected:hover": {
                  bgcolor: "rgba(255,255,255,.07)",
                },

                "&:hover": {
                  bgcolor: "rgba(255,255,255,.04)",
                },
              },
            },
          },
        }}
      >
        {items.map((item) => (
          <MenuItem
            key={item.key}
            selected={item.key === lang}
            onClick={() => {
              setLang(item.key);
              setAnchorEl(null);
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
