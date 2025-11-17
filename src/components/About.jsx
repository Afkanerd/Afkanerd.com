import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function ArticlesSection() {
  return (
    <Box
      id="about"
      component="main"
      sx={{ py: 2, bgcolor: "#1E1E1E", color: "white" }}
    >
      <Container>
               <Typography variant="h4" sx={{ fontFamily: "Silkscreen, monospace",
                      fontWeight: 200,
                       color: "#1F6E1F",
                      mb: 8  }}>
         afkanerd@afkanerd: ~$ ./AFKANERD
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            alignItems: "center",
            gap: 10,
            pb: 4,
            mb: 4,
          }}
        >
 
<Grid item xs={12} md={6}>
  <Box sx={{ position: "relative", borderRadius: 2, overflow: "visible" }}>

    {/* More + denser dots */}
    <Box
      sx={{
        position: "absolute",
        bottom: -30,
        right: -30,
        width: 380,    
        height: 380,
        backgroundImage: `
          radial-gradient(#2F2F30 3px, transparent 3px),
          radial-gradient(#2F2F30 3px, transparent 3px)
        `,
        backgroundPosition: "0 0, 10px 10px",
        backgroundSize: "20px 20px", 
        zIndex: 0,
        pointerEvents: "none",
      }}
    />

    {/* Image */}
    <Box
      component="img"
      src="/lovelace.jpg"
      alt="Modern Interior"
      sx={{
        width: "100%",
        borderRadius: 2,
        position: "relative",
        zIndex: 1,
      }}
    />
  </Box>
</Grid>




          <Grid item xs={12} md={6}>
            <Typography variant="body1">
            We are inspired by many great  individuals who take action. We know we can only inspire change and  drive development by leading the way.
            We build in the open and encourage you to join us on our mission to make the world more open and more  accessible to all.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body1" gutterBottom>
         Source/Los Alamos: ENIAC, the world's first digital computer, unveiled  
         70 years ago Sunday at the University of Pennsylvania, had six primary 
          programmers: Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Wescoff, 
          Fran Bilas and Ruth Lichterman. They were initially called "operators." - phillyvoice.com
        </Typography>
      </Container>
    </Box>
  );
}
