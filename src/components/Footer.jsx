import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" className="footer">
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Afkanerd</Typography>
            <Typography variant="body2">© {new Date().getFullYear()} Afkanerd — Building in public.</Typography>
          </Grid>
          <Grid item xs={12} md={6} className="d-flex justify-content-end align-items-center">
            <Button href="#" sx={{ color: '#cbd5e1' }}>Twitter</Button>
            <Button href="#" sx={{ color: '#cbd5e1' }}>GitHub</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
