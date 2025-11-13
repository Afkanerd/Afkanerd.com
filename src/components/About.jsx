import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';

export default function About() {
  return (
    <Box id="about" py={8}>
      <Container>
        <Typography variant="h4" className="section-heading">About Afkanerd</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              Afkanerd is a developer collective focused on building open, localized technology for African users. Our mission is to ship quality products and cultivate talent.
            </Typography>
            <ul>
              <li>Open-source-first</li>
              <li>Remote-friendly and inclusive</li>
              <li>Data-driven product design</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1">Contact</Typography>
                <Typography variant="body2">hello@afkanerd.example</Typography>
                <Box mt={2}>
                  <Button variant="contained" href="#contact">Get in touch</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
