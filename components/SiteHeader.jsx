"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link as MuiLink,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Divider,
  Typography,
} from "@mui/material";
import LanguageDropdown from "@/components/LanguageDropdown";
import { useI18n } from "@/components/i18n/I18nProvider";
import Logo from "../images/6.svg";

function navItems(t) {
  return [
    {
      href: `/projects`,
      label: t("navbar.projects", "Projects"),
    },
    {
      label: t("navbar.labs", "Labs"),
      children: [
        {
          href: "/careers",
          label: t("navbar.careers", "Careers"),
        },
        {
          href: `/contact`,
          label: t("navbar.contact", "Get in Touch"),
        },
      ],
    },
    {
      href: "https://github.com/Afkanerd/Afkanerd.com",
      label: t("navbar.github", "GitHub"),
      external: true,
    },
  ];
}

const navLinkSx = {
  position: "relative",
  px: 2,
  py: 1,
  display: "inline-flex",
  alignItems: "center",
  textTransform: "uppercase",
  gap: 0.5,
  color: "text.secondary",
  textDecoration: "none",
  borderRadius: "0px",
  transition: "all .2s ease",

  "&::before, &::after": {
    content: '""',
    position: "absolute",
    width: 10,
    height: 10,
    opacity: 0,
    transition: "all .2s ease",
  },

  "&::before": {
    top: 0,
    left: 0,
    borderTop: "1px solid rgba(255,255,255,.45)",
    borderLeft: "1px solid rgba(255,255,255,.45)",
  },

  "&::after": {
    bottom: 0,
    right: 0,
    borderBottom: "1px solid rgba(255,255,255,.45)",
    borderRight: "1px solid rgba(255,255,255,.45)",
  },

  "&:hover": {
    color: "#fff",
    background: "rgba(255,255,255,.04)",

    "&::before, &::after": {
      opacity: 1,
    },
  },
};

function LabsDropdown({ label, items }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <MuiLink
        component="button"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          ...navLinkSx,
          background: "none",
          border: "none",
          cursor: "pointer",
          font: "inherit",
          textTransform: "uppercase",
        }}
      >
        {label}
        <KeyboardArrowDownIcon fontSize="small" />
      </MuiLink>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              textTransform: "uppercase",
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
        {items.map((child) => (
          <MenuItem
            key={child.href}
            component={Link}
            href={child.href}
            onClick={() => setAnchorEl(null)}
          >
            {child.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default function SiteHeader() {
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const isMobileOpen = Boolean(mobileAnchorEl);
  const { t } = useI18n();
  const links = navItems(t);

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        mt: "10px",
        textTransform: "uppercase",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: "76px",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={4}>
            <MuiLink
              component={Link}
              key="Afkanerd"
              href="/"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Image
                src={Logo}
                alt="Afkanerd"
                width={22}
                height={22}
                priority
              />
              <Typography
                variant="body1"
                component="span"
                sx={{
                  ml: 1,
                  fontFamily: "var(--font-silkscreen), cursive",
                  textDecoration: "none",
                  color: "text.primary",
                }}
              >
                Afkanerd
              </Typography>
            </MuiLink>

            <Stack
              direction="row"
              spacing={4}
              alignItems="center"
              sx={{ display: { xs: "none", md: "flex" }, textTransform: "uppercase" }}
            >
              {links.map((item) => {
                if (item.children) {
                  return (
                    <LabsDropdown
                      key={item.label}
                      label={item.label}
                      items={item.children}
                    />
                  );
                }

                return (
                  <MuiLink
                    key={item.href}
                    component={item.external ? "a" : Link}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    sx={{ ...navLinkSx, textTransform: "uppercase" }}
                  >
                    {item.label}
                  </MuiLink>
                );
              })}
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <LanguageDropdown />
            </Box>

            <IconButton
              onClick={(e) => setMobileAnchorEl(e.currentTarget)}
              aria-label={t("header.openNavigation", "Open navigation")}
              sx={{
                ...navLinkSx,
                backgroundColor: "#1b1b1b",
                textTransform: "uppercase",
                color: "#fffefc",
                borderRadius: "0px",
                backgroundImage: "none",
                boxShadow: "0px 12px 32px rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: { xs: "inline-flex", md: "none" },

                "&::before, &::after": {
                  content: '""',
                  position: "absolute",
                  width: 12,
                  height: 12,
                  opacity: 1,
                },
                "&::before": {
                  top: 0,
                  left: 0,
                  borderTop: "1px solid rgba(255,255,255,.3)",
                  borderLeft: "1px solid rgba(255,255,255,.3)",
                },
                "&::after": {
                  bottom: 0,
                  right: 0,
                  borderBottom: "1px solid rgba(255,255,255,.3)",
                  borderRight: "1px solid rgba(255,255,255,.3)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      <Menu
        anchorEl={mobileAnchorEl}
        open={isMobileOpen}
        onClose={() => setMobileAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        transitionDuration={320}
        slotProps={{
          backdrop: {
            sx: { backgroundColor: "rgba(0, 0, 0, 0.4)", textTransform: "uppercase" },
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: "#1b1b1b",
            color: "#fffefc",
            mt: "12px",
            width: "calc(100vw - 32px)",
            maxWidth: "340px",
            borderRadius: "0px",
            backgroundImage: "none",
            boxShadow: "0px 16px 40px rgba(0, 0, 0, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            overflow: "visible",
            transitionTimingFunction:
              "cubic-bezier(0.16, 1, 0.3, 1) !important",

            "&::before, &::after": {
              content: '""',
              position: "absolute",
              width: 12,
              height: 12,
            },
            "&::before": {
              top: 0,
              left: 0,
              borderTop: "1px solid rgba(255,255,255,.3)",
              borderLeft: "1px solid rgba(255,255,255,.3)",
            },
            "&::after": {
              bottom: 0,
              right: 0,
              borderBottom: "1px solid rgba(255,255,255,.3)",
              borderRight: "1px solid rgba(255,255,255,.3)",
            },
          },
        }}
      >
        <Box sx={{ p: 2.5, position: "relative" }}>
          <Typography
            variant="overline"
            sx={{
              display: "block",
              mb: 2,
              color: "text.secondary",
              fontFamily: "monospace",
              letterSpacing: "0.1em",
            }}
          >
            {t("header.navigation", "Navigation")}
          </Typography>

          <Stack spacing={1}>
            {links.map((item) => {
              if (item.children) {
                return (
                  <Box key={item.label} sx={{ py: 0.5 }}>
                    <Typography
                      variant="overline"
                      sx={{
                        color: "text.secondary",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        mb: 0.5,
                        pl: 1,
                      }}
                    >
                      {item.label}
                    </Typography>

                    <Stack spacing={0.5} sx={{ pl: 1 }}>
                      {item.children.map((child) => (
                        <MuiLink
                          key={child.href}
                          component={Link}
                          href={child.href}
                          onClick={() => setMobileAnchorEl(null)}
                          sx={{
                            ...navLinkSx,
                            display: "flex",
                            py: 0.8,
                            fontSize: "0.875rem",
                            color: "#edf2f6",
                            "&::before, &::after": { display: "none" },
                          }}
                        >
                          {child.label}
                        </MuiLink>
                      ))}
                    </Stack>
                    <Divider
                      sx={{
                        mt: 1,
                        mb: 1,
                        borderColor: "rgba(255,255,255,0.08)",
                      }}
                      orientation="horizontal"
                    />
                  </Box>
                );
              }

              return (
                <MuiLink
                  key={item.href}
                  component={item.external ? "a" : Link}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileAnchorEl(null)}
                  sx={{
                    ...navLinkSx,
                    display: "flex",
                    fontSize: "0.875rem",
                    py: 1,
                    color: "#edf2f6",
                    "&::before, &::after": { display: "none" },
                  }}
                >
                  {item.label}
                </MuiLink>
              );
            })}

            <Divider
              sx={{
                mt: 1.5,
                mb: 1,
                borderColor: "rgba(255,255,255,0.08)",
              }}
            />

            <Box
              sx={{
                pt: 0.5,
                pl: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  textTransform: "uppercase",
                }}
              >
                {t("header.selectLanguage", "Select language")}
              </Typography>
              <LanguageDropdown />
            </Box>
          </Stack>
        </Box>
      </Menu>
    </AppBar>
  );
}
