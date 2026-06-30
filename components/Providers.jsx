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

      //       body: {
      //         margin: 0,
      //         minHeight: "100%",
      //         overflowX: "hidden",
      //         position: "relative",
      //         backgroundColor: "#141622",
      //         color: "#fffefc",

      //         // Background layers
      //         backgroundImage: `
      //   radial-gradient(circle at 15% 20%, rgba(137,255,150,.06), transparent 32%),
      //   radial-gradient(circle at 85% 80%, rgba(35,109,37,.08), transparent 38%)
      // `,
      //         backgroundAttachment: "fixed",
      //       },

            // Grid
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

            // Noise
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

            // a: {
            //   color: "#edf2f6",
            //   textDecoration: "none",
            //   transition: ".2s",
            // },

            // "a:hover": {
            //   color: "#89ff96",
            // },
          }}
        />
        <I18nProvider>{children}</I18nProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
