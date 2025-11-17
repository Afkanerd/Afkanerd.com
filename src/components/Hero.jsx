import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
    id="home"
      sx={{
        bgcolor: "#1E1E1E",
        color: "white",
        py: { xs: 6, md: 12 },
         minHeight: {
          xs: "40vh",  
          sm: "50vh",  
          md: "60vh", 
          lg: "70vh", 
          xl: "100vh"  
        },
        display: "flex",
        alignItems: "center",
        fontFamily: "ShareTech, monospace",
        gap: 3 
      }}
    >
      <Container
        sx={{
          width: "100%",
          maxWidth: "80vw"
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
              
              <Typography
        variant="h1"
        sx={{
          fontFamily: "Silkscreen, monospace",
          fontWeight: 400,
          mb: 3,
          fontSize: {
            xs: "2.5rem",
            sm: "3.5rem",  
            md: "4.5rem",  
            lg: "5.5rem",   
            xl: "6rem",    
          },
          lineHeight: 1.1,   
        }}
      >
        AFKANERD
      </Typography>

            <Typography
              variant="h5"
              spacing={4}
              sx={{
                fontFamily: "ShareTech, monospace",
                fontWeight: 200,
                 mb: 3 
              }}
            >
              WE CODE FOR THE PEOPLE
            </Typography>

        
         <Box
  sx={{
    maxWidth: {
      xs: "100vw",  
      sm: "100vw",  
      md: "55vw", 
      lg: "50vw",  
      xl: "55vw",   
    }
  }}
>
  <Typography
    variant="body1"
    paragraph
    sx={{
      opacity: 0.85,
      mb: 2,
      fontSize: {
        xs: "0.9rem", 
        sm: "1rem",    
        md: "1.05rem",
        lg: "1.1rem", 
        xl: "1.15rem", 
      },
      lineHeight: 1.6,
    }}
  >
    We build open source in the open. We build technology for 
    digital rights, security and privacy. Our tools are openly available 
    for advocacy, healthcare and educational purposes.
  </Typography>

  <Typography
    variant="body1"
    paragraph
    sx={{
      opacity: 0.85,
      mb: 3,
      fontSize: {
        xs: "0.9rem",
        sm: "1rem",
        md: "1.05rem",
        lg: "1.1rem",
        xl: "1.15rem",
      },
      lineHeight: 1.6,
    }}
  >
    We also consult with open source projects and individuals. 
    We will happily consult on your project if it serves the 
    open source community — feel free to reach out.
  </Typography>
</Box>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
