import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";

export default function AboutSection() {
  return (
    <Box
     id="contact"
       component="main"
      sx={{ py: 8, bgcolor: "#1E1E1E", color: "white" }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ pt: 6, pr: { xs: 0, md: 12 } }}>
              <Box sx={{ mb: 3 }}>
      
               <Typography
                         variant="h4"
                         sx={{
                           fontFamily: "Silkscreen, monospace",
                           fontWeight: 200,
                           color: "#1F6E1F",
                           mb: 6
                         }}
                       >
                         afkanerd@afkanerd: ~$ ./Contact
                       </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ color: "#777777", lineHeight: 2, mb: 4 }}
              >
               developers@afkanerd.com
              </Typography>
            </Box>
          </Grid>

     
        </Grid>
      </Container>
    </Box>
  );
}
