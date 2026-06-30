"use client";

import { Box, Container, Stack, Typography, Grid, Button } from "@mui/material";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "./SiteFooter";

export default function JobsPage() {
  return (
    <>
      <SiteHeader />

      <Container maxWidth="md">
        {/* Hero Section */}
        <Stack spacing={4} pt={16} pb={8}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.75rem" },
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Build things that matter.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.6,
              fontSize: { xs: "1.15rem", md: "1.35rem" },
              maxWidth: "720px",
            }}
          >
            We don’t do corporate bureaucracy, rigid hours, or endless alignment
            meetings. We look for autonomous builders who love open-source
            software and deep engineering challenges.
          </Typography>
        </Stack>

        <hr
          style={{
            border: "0",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            margin: "2rem 0",
          }}
        />

        {/* Why Work With Us Section */}
        <Grid container spacing={{ xs: 4, md: 8 }} py={6}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ letterSpacing: "-0.01em", color: "text.secondary" }}
            >
              The Culture
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack spacing={5}>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                  100% Remote, genuinely async
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", lineHeight: 1.6 }}
                >
                  Work from wherever you are most creative. We communicate
                  through code, clear documentation, and pull requests—not
                  mandatory 9 AM standups. You own your time.
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                  Hacker culture over corporate rigidness
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", lineHeight: 1.6 }}
                >
                  We care about shipping functional, secure software that solves
                  real infrastructure problems. No arbitrary KPIs, no
                  micromanagement, no useless red tape.
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                  Open Source at the core
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", lineHeight: 1.6 }}
                >
                  Almost everything you build here will be public facing. Your
                  contributions will serve the broader developer ecosystem and
                  protect digital privacy across the continent.
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <hr
          style={{
            border: "0",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            margin: "2rem 0",
          }}
        />

        {/* Open Roles Section */}
        <Grid container spacing={{ xs: 4, md: 8 }} py={6}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ letterSpacing: "-0.01em", color: "text.secondary" }}
            >
              Open Roles
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            {/* ACTIVE LISTINGS */}
            {/* <Stack spacing={6}>
              
              <Box>
                <Typography variant="overline" sx={{ color: "text.secondary", fontWeight: 700, letterSpacing: "0.1em" }}>
                  Engineering
                </Typography>
                <Stack spacing={3} mt={2}>
                  <Box sx={{ display: "flex", justifyContent: "between", alignItems: "flex-start", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Senior Rust / Systems Engineer</Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>Remote (Africa / Europe Timezones) · Full-Time</Typography>
                    </Box>
                    <Button variant="outlined" size="small" sx={{ textTransform: "none", borderColor: "rgba(255,255,255,0.2)", color: "#fff" }}>Apply</Button>
                  </Box>
                  
                  <Box sx={{ display: "flex", justifyContent: "between", alignItems: "flex-start", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Full-Stack Engineer (Next.js & Go)</Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>Remote · Full-Time</Typography>
                    </Box>
                    <Button variant="outlined" size="small" sx={{ textTransform: "none", borderColor: "rgba(255,255,255,0.2)", color: "#fff" }}>Apply</Button>
                  </Box>
                </Stack>
              </Box>

              <Box>
                <Typography variant="overline" sx={{ color: "text.secondary", fontWeight: 700, letterSpacing: "0.1em" }}>
                  Security & Infrastructure
                </Typography>
                <Stack spacing={3} mt={2}>
                  <Box sx={{ display: "flex", justifyContent: "between", alignItems: "flex-start", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Privacy & Cryptography Researcher</Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>Remote · Part-Time / Contract</Typography>
                    </Box>
                    <Button variant="outlined" size="small" sx={{ textTransform: "none", borderColor: "rgba(255,255,255,0.2)", color: "#fff" }}>Apply</Button>
                  </Box>
                </Stack>
              </Box>

            </Stack> */}

            {/* COMMENTED OUT FALLBACK SECTION (Swap this in when no jobs are available) */}

            <Stack spacing={3}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                We are fully stacked at the moment.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                We aren’t actively hunting for specific roles right now, but we
                always make room for exceptional talent. If you're an
                open-source contributor, a security nerd, or a hacker who aligns
                with our mission, drop us a line with your GitHub at{" "}
                <Box
                  component="span"
                  sx={{ textDecoration: "underline", color: "primary.main" }}
                >
                  careers@afkanerd.com
                </Box>
                .
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <SiteFooter />
    </>
  );
}
