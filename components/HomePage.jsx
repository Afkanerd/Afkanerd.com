"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import {
  Box,
  Container,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useI18n } from "@/components/i18n/I18nProvider";

const projects = [
  {
    key: "sms",
    prompt: "afkanerd@afkanerd:~/projects$ cat smswithoutborders.md",
    descriptionKey: "project1.description",
    website: "https://smswithoutborders.com",
    github: "https://github.com/smswithoutborders",
    x: "https://x.com/RelaySMS",
  },
  {
    key: "shortmesh",
    prompt: "afkanerd@afkanerd:~/projects$ cat shortmesh.md",
    description:
      "{ ShortMesh Client is a Matrix protocol client that provides messaging capabilities across multiple Matrix bridges. The project is built to work with any Matrix homeserver and any number of Matrix bridges can be configured to work on it. }",
    website: "https://github.com/Afkanerd",
    github: "https://github.com/Afkanerd",
  },
];

export default function HomePage() {
  const { t } = useI18n();
  const titleText = t("hero.title", "AFKANERD");

  return (
    <>
      <SiteHeader />
      <Box component="main">
        {/* Injecting CSS Keyframes dynamically into the page head */}
        <style>{`
          @keyframes glitch-anim-1 {
            0% { clip-path: inset(40% 0 61% 0); transform: skew(0.3deg); }
            20% { clip-path: inset(92% 0 1% 0); transform: skew(-0.5deg); }
            40% { clip-path: inset(15% 0 80% 0); transform: skew(0.5deg); }
            60% { clip-path: inset(80% 0 5% 0); transform: skew(-0.3deg); }
            80% { clip-path: inset(3% 0 92% 0); transform: skew(0.8deg); }
            100% { clip-path: inset(40% 0 61% 0); transform: skew(0deg); }
          }
          @keyframes glitch-anim-2 {
            0% { clip-path: inset(25% 0 58% 0); transform: skew(-0.2deg); }
            20% { clip-path: inset(70% 0 25% 0); transform: skew(0.4deg); }
            40% { clip-path: inset(5% 0 85% 0); transform: skew(-0.8deg); }
            60% { clip-path: inset(11% 0 42% 0); transform: skew(0.3deg); }
            80% { clip-path: inset(82% 0 2% 0); transform: skew(-0.5deg); }
            100% { clip-path: inset(25% 0 58% 0); transform: skew(0deg); }
          }
        `}</style>

        <Container maxWidth="lg">
          <Box
            id="hero"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // alignItems: "center",
              height: "90vh",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Typography
              component="h1"
              data-text={titleText}
              sx={{
                mb: 4,
                fontFamily: "var(--font-silkscreen)",
                fontSize: { xs: "3rem", md: "6rem" },
                fontWeight: 700,
                position: "relative",
                zIndex: 1,
                color: "#fff",
                textTransform: "uppercase",
                cursor: "default",

                // Base style for glitch pseudo-layers (hidden by default)
                "&::before, &::after": {
                  content: "attr(data-text)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "#121212",
                  opacity: 0, // Keeps it hidden normally
                },

                // Only activate animations and show layers on hover
                "&:hover": {
                  "&::before, &::after": {
                    opacity: 1,
                  },
                  "&::before": {
                    left: "2px",
                    textShadow: "-2px 0 #ff003c",
                    animation:
                      "glitch-anim-1 1s infinite linear alternate-reverse",
                  },
                  "&::after": {
                    left: "-2px",
                    textShadow: "2px 0 #00e6ff, 0 1px #00e6ff",
                    animation:
                      "glitch-anim-2 1.5s infinite linear alternate-reverse",
                  },
                },
              }}
            >
              {titleText}

              <Box
                component="span"
                sx={{
                  display: { xs: "block", md: "inline" },
                  mt: { xs: 1, md: 0 },
                  fontSize: { xs: "1rem", md: "2rem" },
                  color: "#d4d4d4",
                  fontFamily: "var(--font-jetbrains), monospace",
                  position: "relative",
                  zIndex: 2,
                  fontWeight: 300,
                  letterSpacing: "normal",
                  // Erase parent text glitch influence for slogan label
                  textShadow: "none !important",
                  "&::before, &::after": { display: "none !important" },
                }}
              >
                {" - We code for the people"}
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                lineHeight: 1.8,
                mb: 2.4,
                fontSize: "1.1rem",
                position: "relative",
                zIndex: 1,
              }}
            >
              {t("hero.subtitle1")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                lineHeight: 1.8,
                fontSize: "1.1rem",
                position: "relative",
                zIndex: 1,
              }}
            >
              {t("hero.subtitle2")}
            </Typography>
          </Box>

          <Box id="about" sx={{ py: 8, mb: 20 }}>
            <Typography component="h2" sx={{ mb: 3.5, fontSize: "1.3rem" }}>
              <Box component="span" sx={{ color: "#236d25" }}>
                afkanerd@afkanerd:
              </Box>{" "}
              ~$ {t("about.title", "./About")}
            </Typography>

            <Box
              sx={{
                display: "grid",
                gap: 3,
                gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
              }}
            >
              {/* Image column - end/right */}
              <Box sx={{ order: { xs: -1, lg: 0 } }}>
                <Box
                  component="img"
                  src="/images/lovelace.jpg"
                  alt="Ada Lovelace"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    opacity: 0.8,
                    border: "1px solid #2c2c2c",
                  }}
                />
              </Box>

              {/* Text column - content pushed to bottom */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  height: "100%",
                }}
              >
                <Typography sx={{ lineHeight: 1.7 }}>
                  {t("about.description")}
                  <MuiLink
                    href="/about"
                    underline="hover"
                    sx={{
                      color: "inherit",
                      ml: 2,
                      fontFamily: "inherit",
                      fontSize: "inherit",
                      fontWeight: 500,
                      "&:hover": {
                        color: "#236d25",
                      },
                    }}
                  >
                    Read More
                  </MuiLink>
                </Typography>
                {/* <MuiLink
                  href="/about"
                  underline="none"
                  sx={{
                    position: "relative",
                    px: 2,
                    py: 1,
                    mt: 2,
                    minWidth: 0,
                    alignSelf: "flex-start",
                    color: "#fff",
                    textTransform: "none",
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "0.8rem",
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
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,.05)",
                    },
                  }}
                >
                  Read More
                </MuiLink> */}
              </Box>

              {/* Quote spans full row, underneath both columns */}
              <Box
                component="blockquote"
                sx={{
                  gridColumn: { xs: "1", lg: "1 / -1" },
                  borderLeft: "1.5px solid #236d25",
                  m: "20px 0 0",
                  pl: "14px",
                  color: "text.secondary",
                  mb: 3,
                  fontSize: "0.8rem",
                  fontStyle: "italic",
                }}
              >
                {t("about.quote")}
              </Box>
            </Box>
          </Box>

          {/*  */}
          <Box id="project" sx={{ py: 8, mb: 20 }}>
            <Stack direction="row" spacing={5}>
              <Typography component="h2" sx={{ mb: 3.5, fontSize: "1.3rem" }}>
                <Box component="span" sx={{ color: "#236d25" }}>
                  afkanerd@afkanerd:
                </Box>{" "}
                ~$ {t("project.title", "./Projects")}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>Projects</Typography>
            </Stack>
            <Box
              sx={{
                display: "grid",
                gap: 3,
                mt: 8,
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              }}
            >
              {projects.map((project, index) => (
                <Box
                  key={project.key}
                  sx={{
                    // position: "relative",
                    // pl: { xs: 0, md: index > 0 ? 3 : 0 },
                    // borderLeft: {
                    //   xs: "none",
                    //   md: index > 0 ? "1px solid #2c2c2c" : "none",
                    // },
                    p: 2.5,
                    backgroundColor: "rgba(255,255,255, 0.015)",
                    border: "1px solid rgba(255,255,255, 0.04)",
                    borderRadius: "0px",
                    transition: "all .3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255, 0.03)",
                      borderColor: "rgba(255,255,255, 0.1)",
                    },
                  }}
                >
                  <Typography sx={{ color: "#edf2f6", mb: 2 }}>
                    {project.prompt}
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    {project.description || t(project.descriptionKey, "")}
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ mt: 2.5 }}
                  >
                    <MuiLink
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      sx={{
                        color: "#edf2f6",
                        fontSize: "0.8rem",
                        textDecoration: "none",
                      }}
                    >
                      {[t("project1.readMore", "Website"), "->"].join(" ")}
                    </MuiLink>
                  </Stack>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
      <SiteFooter />
    </>
  );
}
