import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1E1E1E",
        color: "white",
        py: 3,
        mt: 'auto',
      }}
    >
      <Box
        component="img"
        src="/dots.svg"
        alt="Modern Interior"
        sx={{
          width: "90%",
          display: "block",
          mx: "auto",
          mb: 2,
        }}
      />

      <Container>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Grid item sx={{ mb: { xs: 1, md: 0 } }}> 
            <Typography variant="h6" sx={{fontFamily: "'Share Tech'"}}>Afkanerd InfoTech</Typography>
          </Grid>

          <Grid item>
            <Typography variant="body2" sx={{fontFamily: "'Share Tech'" }}>© Afkanerd.</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
