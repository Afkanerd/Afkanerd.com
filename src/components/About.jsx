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
      <Container maxWidth="lg" sx={{  mb: 2}}>
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
                    We are inspired by many great  individuals who take action. We know we can only 
                    inspire change and  drive development by leading the way.
                    We build in the open and encourage you to join us on our mission
                    to make the world more open and more  accessible to all.
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
                <b> Source/Los Alamos:</b>Source/Los Alamos: ENIAC, the world's first digital computer, 
                 unveiled  70 years ago Sunday at the University of Pennsylvania, had six primary  
                 programmers:<b>  Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Wescoff,  Fran Bilas and Ruth 
                 Lichterman</b>. They were initially called "operators." - phillyvoice.com
                </Typography>
            </Box>
      </Container>
    </Box>
  );
}