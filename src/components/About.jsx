import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: "#1E1E1E", 
        color: "white",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        overflowX: "hidden",
        py: 8, 
      }}
    >
      <Container maxWidth="lg">
     
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Silkscreen",
            fontWeight: 200,
            color: "#1F6E1F",
            mb: 6,
          }}
        >
          afkanerd@afkanerd: ~$ ./PROJECTS
        </Typography>

    
        <Stack 
          direction={{ xs: "column", md: "row" }} 
          spacing={6} 
          alignItems="center" 
        >
           <Box sx={{ position: "relative", borderRadius: 2, overflow: "visible" }}>
           
<Box
  sx={{
    position: "absolute",
    bottom: -30,
    right: -30,
    width: 350,
    height: 350,
    backgroundImage: `
      radial-gradient(#2F2F30 1px, transparent 1px),
      radial-gradient(#2F2F30 1px, transparent 1px)
    `,
    backgroundPosition: "0 0, 10px 10px",
    backgroundSize: "18px 18px",
    zIndex: 0,
    pointerEvents: "none"
  }}
/>
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
                }}
              />
            </Box>

    
        <Box sx={{ maxWidth: 500 }}>
                   <Typography
                     variant="body1"
                     sx={{
                       color: "#fcfcfcff",
                       fontFamily: "'Share Tech'",
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
           <Box sx={{ py: 6, textAlign: "start",    bgcolor: "#1E1E1E", 
              color: "white", }}>
                <Typography
                     variant="body1"
                  sx={{
                    fontStyle: "italic",
                    fontWeight: 300,
                     fontFamily: "'Share Tech'",
                  }}
                >
                  With years of experience in web development and marketing automation,{" "}
                  <b>Danki Code</b> brings solutions that help your team sell more in
                  both B2C and B2B segments.
                </Typography>
            </Box>
      </Container>
    </Box>
  );
}