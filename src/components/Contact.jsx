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
                    mb: { xs: 4, sm: 5, md: 6 },  
                    fontSize: {
                      xs: "1.2rem",  
                      sm: "1.5rem", 
                      md: "1.75rem",  
                      lg: "2rem",     
                      xl: "2.25rem",  
                    },
                    lineHeight: 1.3, 
                  }}
                >
                         afkanerd@afkanerd: ~$ ./Contact
                       </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ color: "#f4f0f0ff", lineHeight: 2, mb: 4 }}
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
