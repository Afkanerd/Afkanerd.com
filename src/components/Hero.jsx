import React from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardContent } from '@mui/material';

export default function Hero() {
  return (
    <Box className="hero bg-light">
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h3" component="h1" gutterBottom>
              Build. Ship. Empower Africa.
            </Typography>
            <Typography variant="h6" paragraph>
              Afkanerd is pioneering developer-first solutions — showcasing projects, offering jobs, and connecting talent across the continent.
            </Typography>
            <Box className="d-flex gap-2">
              <Button variant="contained" color="primary" href="#projects">See Projects</Button>
              <Button variant="outlined" color="inherit" href="#jobs">Work with us</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card elevation={3} className="p-3">
              <CardContent>
                <Typography variant="subtitle1">Newsletter</Typography>
                <Typography variant="body2" paragraph>
                  Get updates about new projects and openings.
                </Typography>
                <Box component="form" className="d-flex">
                  <input className="form-control me-2" placeholder="you@domain.com" />
                  <Button variant="contained">Subscribe</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
