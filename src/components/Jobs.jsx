import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button, List, Divider } from '@mui/material';

const sampleJobs = [
  { id:1, role:'Frontend Engineer', loc:'Remote - Africa', desc:'React developer experienced with MUI' },
  { id:2, role:'Backend Engineer', loc:'Remote - Africa', desc:'Design and maintain APIs' },
];

export default function Jobs() {
  return (
    <Box id="jobs" py={8} bgcolor="#f8fafc">
      <Container>
        <Typography variant="h4" className="section-heading">Jobs</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <List>
              {sampleJobs.map(j => (
                <Box key={j.id} mb={2}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">{j.role}</Typography>
                      <Typography variant="subtitle2" color="text.secondary">{j.loc}</Typography>
                      <Typography variant="body2" paragraph>{j.desc}</Typography>
                      <Button variant="outlined">Apply</Button>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Why join Afkanerd?</Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2">We focus on impact-driven projects, remote-friendly workflow, and growth mentorship.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
