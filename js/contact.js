"use client";

import { Box, Container, Stack, Typography, Grid, Link } from "@mui/material";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <Container maxWidth="md">
        {/* Hero Header */}
        <Stack spacing={4} pt={16} pb={8}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.75rem" },
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Get in touch.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.6,
              fontSize: { xs: "1.15rem", md: "1.35rem" },
              maxWidth: "600px",
            }}
          >
            Have a question about our projects, want to collaborate, or need to
            report a security vulnerability? Drop us a line.
          </Typography>
        </Stack>

        <hr
          style={{
            border: "0",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            margin: "2rem 0",
          }}
        />

        {/* Contact Matrix */}
        <Stack spacing={{ xs: 6, md: 8 }} py={4}>
          {/* Left Side: General Inquiries */}
          <Stack spacing={3} direction="row">
            <Box sx={{ width: "40%" }}>
              <Typography
                variant="h6"
                sx={{ letterSpacing: "-0.01em", color: "text.secondary" }}
              >
                General & Press
              </Typography>
            </Box>
            <Box sx={{ width: "60%" }}>
              <Link
                href="mailto:hello@afkanerd.com"
                underline="none"
                sx={{
                  //   fontSize: "1.5rem",
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
                info@afkanerd.com
              </Link>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.6, mt: 3 }}
              >
                For general questions, open-source partnership ideas, or just to
                say hi. We usually respond within 24 hours.
              </Typography>
            </Box>
          </Stack>

          <Box>
            <hr
              style={{
                border: "0",
                borderTop: "1px solid rgba(255,255,255,0.05)",
              }}
            />
          </Box>

          {/* Security / Encrypted Communications */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "text.secondary",
                mb: 2,
              }}
            >
              Security & Privacy
            </Typography>
          </Box>
          <Box>
            <Stack spacing={2}>
              <Box>
                <Link
                  href="mailto:security@afkanerd.com"
                  underline="none"
                  sx={{
                    //   fontSize: "1.5rem",
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
                  security@afkanerd.com
                </Link>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mt: 3, lineHeight: 1.6 }}
                >
                  If you’ve discovered a vulnerability in our protocols,
                  infrastructure, or decentralized components, please let us
                  know immediately.
                </Typography>
              </Box>

              {/* PGP Key Callout */}
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: "0px",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, color: "#fff", mb: 0.5 }}
                >
                  Encrypted Communications
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1.5 }}
                >
                  For sensitive disclosures, encrypt your message using our
                  public PGP key.
                </Typography>
                <Link
                  href="/security.asc"
                  download
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "0.85rem",
                    color: "primary.main",
                    textDecoration: "underline",
                  }}
                >
                  Fingerprint: 4A7E 9B2C 1F83 D6E5 ... [Download Key]
                </Link>
              </Box>
            </Stack>
          </Box>

          <Box>
            <hr
              style={{
                border: "0",
                borderTop: "1px solid rgba(255,255,255,0.05)",
              }}
            />
          </Box>

          {/* Careers */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "text.secondary",
                mb: 2,
              }}
            >
              Join the Collective
            </Typography>
          </Box>
          <Box>
            <Stack direction={{ md: "row", xs: "column" }} spacing={{ xs: 6, md: 8 }}>
              <Box sx={{ width: { md: "40%", xs: "100%" } }}>
                <Link
                  href="mailto:career@afkanerd.com"
                  underline="none"
                  sx={{
                    //   fontSize: "1.5rem",
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
                  career@afkanerd.com
                </Link>
              </Box>

              <Box sx={{ width: { md: "60%", xs: "100%" } }}>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", lineHeight: 1.6 }}
                >
                  Looking to build with us? Skip the form entirely and email
                  your details, project links, or pull requests directly to our
                  engineering desk.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
      <SiteFooter />
    </>
  );
}
