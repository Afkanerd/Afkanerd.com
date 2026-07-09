"use client";

import { Box, Container, Stack, Typography, Grid, Button } from "@mui/material";
import SiteHeader from "@/components/SiteHeader";

// Note: In a real app, you'd likely fetch this data via a slug parameter, 
// but here is the hardcoded component structure ready for copy-pasting.

export default function JobDetailsPage() {
  return (
    <>
      <SiteHeader />

      <Container maxWidth="md">
        {/* Back navigation & Header */}
        <Stack spacing={3} pt={16} pb={6}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: "text.secondary", 
              cursor: "pointer", 
              fontFamily: "monospace",
              "&:hover": { color: "#fff" } 
            }}
            onClick={() => window.history.back()}
          >
            &lt;-- Back to open roles
          </Typography>

          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: "2.5rem", md: "3.5rem" }, 
              fontWeight: 800, 
              letterSpacing: "-0.03em", 
              lineHeight: 1.1 
            }}
          >
            Senior Rust / Systems Engineer
          </Typography>
        </Stack>

        <hr style={{ border: "0", borderTop: "1px solid rgba(255,255,255,0.1)", margin: "1rem 0" }} />

        {/* Dynamic Split Layout */}
        <Grid container spacing={{ xs: 6, md: 8 }} py={4}>
          
          {/* Left Sidebar: Role Metadata */}
          <Grid item xs={12} md={4}>
            <Stack spacing={4} sx={{ position: { md: "sticky" }, top: "120px" }}>
              <Box>
                <Typography variant="overline" sx={{ color: "text.secondary", fontWeight: 700 }}>Department</Typography>
                <Typography variant="body1" sx={{ mt: 0.5, fontWeight: 500 }}>Engineering</Typography>
              </Box>

              <Box>
                <Typography variant="overline" sx={{ color: "text.secondary", fontWeight: 700 }}>Location</Typography>
                <Typography variant="body1" sx={{ mt: 0.5, fontWeight: 500 }}>100% Remote (Africa / Europe)</Typography>
              </Box>

              <Box>
                <Typography variant="overline" sx={{ color: "text.secondary", fontWeight: 700 }}>Type</Typography>
                <Typography variant="body1" sx={{ mt: 0.5, fontWeight: 500 }}>Full-Time / Async</Typography>
              </Box>

              <Box>
                <Typography variant="overline" sx={{ color: "text.secondary", fontWeight: 700 }}>Our Stack</Typography>
                <Typography variant="body2" sx={{ mt: 0.5, color: "text.secondary", fontFamily: "monospace", lineHeight: 1.6 }}>
                  Rust, Go, TypeScript, WebRTC, Linux, Docker, Matrix/P2P protocols
                </Typography>
              </Box>

              <Button 
                variant="contained" 
                href="mailto:career@afkanerd.com?subject=Application: Senior Rust / Systems Engineer"
                sx={{ 
                  textTransform: "none", 
                  backgroundColor: "#fff", 
                  color: "#000",
                  fontWeight: 600,
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" }
                }}
              >
                Apply via Email
              </Button>
            </Stack>
          </Grid>

          {/* Right Core Content: Role Description & Breakdown */}
          <Grid item xs={12} md={8}>
            <Stack spacing={5}>
              
              {/* Context */}
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, letterSpacing: "-0.01em" }}>
                  The Opportunity
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.7, mb: 2 }}>
                  We are looking for a systems engineer to take over foundational infrastructure design for our core offline-first and decentralized communication projects (like RelaySMS). 
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  You will work directly on lower-level abstractions, protocol handling, and memory-efficient services designed to keep networks running smoothly even under heavily restricted connectivity or severe external censorship constraints.
                </Typography>
              </Box>

              {/* Responsibilities */}
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, letterSpacing: "-0.01em" }}>
                  What you will do
                </Typography>
                <Stack component="ul" spacing={1.5} sx={{ pl: 2, color: "text.secondary", lineHeight: 1.6 }}>
                  <li>Design, build, and audit high-performance network primitives and daemon services in Rust.</li>
                  <li>Optimize low-bandwidth routing protocols to handle decentralized data delivery across fragmented local networks.</li>
                  <li>Collaborate openly on GitHub—maintaining production-grade, clean, and highly readable code architectures.</li>
                  <li>Work closely with security researchers to protect digital anonymity and cryptographic structures.</li>
                </Stack>
              </Box>

              {/* Requirements */}
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, letterSpacing: "-0.01em" }}>
                  What we look for
                </Typography>
                <Stack component="ul" spacing={1.5} sx={{ pl: 2, color: "text.secondary", lineHeight: 1.6 }}>
                  <li>Deep knowledge of system-level paradigms, low-level networking concepts (TCP/UDP/Sockets), and concurrency frameworks.</li>
                  <li>Strong open-source history or a demonstrable passion for showing, breaking, or explaining built architectures.</li>
                  <li>Extreme personal autonomy. Because we operate without traditional product managers or strict timelines, you must be comfortable diagnosing errors and delivering fixes independently.</li>
                </Stack>
              </Box>

              <hr style={{ border: "0", borderTop: "1px solid rgba(255,255,255,0.1)", margin: "1rem 0" }} />

              {/* Application Instructions */}
              <Box sx={{ p: 4, borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, letterSpacing: "-0.01em" }}>
                  How to Apply
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.7, mb: 3 }}>
                  We don’t care about perfectly structured corporate resume templates. We care about what you’ve built, what you understand, and how you think.
                </Typography>
                
                <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.7, mb: 3 }}>
                  Send an email to <Box component="span" sx={{ fontWeight: 600, color: "#fff", fontFamily: "monospace" }}>career@afkanerd.com</Box> with the subject line format: <Box component="span" sx={{ color: "primary.main", fontFamily: "monospace" }}>"Application: Senior Rust / Systems Engineer"</Box>. 
                </Typography>

                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: "#fff" }}>
                  Please include:
                </Typography>
                <Stack component="ul" spacing={1} sx={{ pl: 2, color: "text.secondary", mb: 4 }}>
                  <li>Links to your GitHub profile, portfolio, or individual public-facing source files you are proud of.</li>
                  <li>A brief description of a hard engineering problem you solved recently and why you approached it the way you did.</li>
                  <li>Your general timezone and preferred work cadence.</li>
                </Stack>

                <Button 
                  variant="outlined" 
                  href="mailto:career@afkanerd.com?subject=Application: Senior Rust / Systems Engineer"
                  sx={{ 
                    textTransform: "none", 
                    borderColor: "rgba(255,255,255,0.2)", 
                    color: "#fff",
                    "&:hover": { borderColor: "#fff" }
                  }}
                >
                  Launch Mail Client
                </Button>
              </Box>

            </Stack>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}