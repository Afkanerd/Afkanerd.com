import React from 'react';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';

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
      <Divider
        sx={{
          borderColor: "#b3b3b4ff",
          opacity: 0.4,
          my: 3
        }}
      />

      <Container>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
            gap: { xs: 1, md: 0 }
          }}
        >

          <Grid item xs={12} md="auto">
            <Typography variant="h6" sx={{ fontFamily: "'Share Tech'" }}>
              Afkanerd InfoTech
            </Typography>
          </Grid>

          <Grid item xs={12} md="auto">
            <Typography variant="body2" sx={{ fontFamily: "'Share Tech'" }}>
              © Afkanerd.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
