"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";
import I18nProvider from "@/components/i18n/I18nProvider";

const muiTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#151515",
      paper: "#151515",
    },
    text: {
      primary: "#fffefc",
      secondary: "#a1a1a1",
    },
    primary: {
      main: "#89ff96",
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: "var(--font-jetbrains), monospace",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          margin: 0,
          padding: 0,
          minHeight: "100%",
          backgroundColor: "#121212",
          color: "#ffffff",
        },
        a: {
          color: "#edf2f6",
          textDecoration: "none",
        },
        "a:hover": {
          color: "#89ff96",
        },
      },
    },
  },
});

export default function Providers({ children }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            "*": {
              boxSizing: "border-box",
            },

            html: {
              scrollBehavior: "smooth",
            },

            "body::before": {
              content: '""',
              position: "fixed",
              inset: 0,
              pointerEvents: "none",
              zIndex: -2,

              backgroundImage: `
        linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px)
      `,
              backgroundSize: "82px 82px",
            },

            "body::after": {
              content: '""',
              position: "fixed",
              inset: 0,
              pointerEvents: "none",
              zIndex: -1,
              opacity: 0.025,

              backgroundImage: `
        radial-gradient(#ffffff 0.6px, transparent 0.6px)
      `,
              backgroundSize: "6px 6px",
            },
          }}
        />
        <I18nProvider>{children}</I18nProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
