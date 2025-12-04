import React from "react";
import { Box, Typography, Container, Stack, TextField, Button } from "@mui/material";

export default function LandingSections() {
  return (
    <>

      <Box sx={{ py: 10 ,    bgcolor: "#1E1E1E", 
        color: "white",}}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
            alignItems="center"
          >

<Box sx={{ position: "relative", width: "100%", maxWidth: 400, overflow: "visible" }}>
  {/* Dot Grid */}
  <Box
    sx={{
      position: "absolute",
      bottom: -25,
      right: -19,
      width: "85%",
      height: "85%",
      backgroundImage: `
        radial-gradient(#2F2F30 1px, transparent 1px),
        radial-gradient(#2F2F30 1px, transparent 1px)
      `,
      backgroundPosition: "0 0, 10px 10px",
      backgroundSize: "18px 18px",
      zIndex: 0,
      pointerEvents: "none",
      borderRadius: 2,
    }}
  />

  {/* Image */}
  <Box
    component="img"
    src="/woman.jpg"
    alt="Modern Interior"
    sx={{
      width: "100%",
      borderRadius: 2,
      position: "relative",
      zIndex: 1,
      display: "block",
      boxShadow: 4,
    }}
  />
</Box>



       
            <Box sx={{ maxWidth: 500 }}>
              <Typography
                variant="h5"
                sx={{ color: "#31475e", mb: 3, textAlign: { xs: "center", md: "left" } }}
              >
                We are a digital agency. We work on positioning, content, and
                aesthetics — always focused on conversion.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#6a7c92",
                  lineHeight: 1.8,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                At our digital agency, we’re more than pixel pushers—we’re
                strategists, storytellers, and conversion professionals. We
                dissect your brand, audience, and market. Then, armed with
                insights, we position you for digital victory.
              </Typography>
            </Box>

          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: 6, textAlign: "start",    bgcolor: "#1E1E1E", 
        color: "white", }}>
        <Container maxWidth="md">
          <Typography
            variant="h6"
            sx={{
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: 22,
            }}
          >
            With years of experience in web development and marketing automation,{" "}
            <b>Danki Code</b> brings solutions that help your team sell more in
            both B2C and B2B segments.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
