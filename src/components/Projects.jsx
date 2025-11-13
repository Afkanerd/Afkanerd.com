import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardActions, Button } from '@mui/material';

const sampleProjects = [
  { id: 1, title: 'Project Nebula', desc: 'Open-source platform for African creators', tags: ['React','MUI'] },
  { id: 2, title: 'KoraPay', desc: 'Payments SDK tailored for pan-Africa', tags: ['Node','API'] },
  { id: 3, title: 'AgriSense', desc: 'IoT for smallholder farms', tags: ['IoT','ML'] },
  { id: 4, title: 'EduConnect', desc: 'Remote learning with localized content', tags: ['Next','SaaS'] },
];

export default function Projects() {
  return (
    <Box id="projects" py={8}>
      <Container>
        <Typography variant="h4" className="section-heading">Projects</Typography>
        <Grid container spacing={3}>
          {sampleProjects.map(p => (
            <Grid item xs={12} sm={6} md={3} key={p.id}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6">{p.title}</Typography>
                  <Typography variant="body2" paragraph>{p.desc}</Typography>
                  <Box>
                    {p.tags.map(t => (
                      <Box key={t} component="span" sx={{ mr:1, px:1.2, py:.3, border:'1px solid #e6e6e6', borderRadius:1, fontSize:12 }}>
                        {t}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Repo</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
