import React from "react";
import { Box, Typography, Card, CardContent, Container } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ProjectSection() {
  return (
    <Box
      id="projects"
      component="main"
      sx={{ py: 8, bgcolor: "#1E1E1E", color: "white" }}
    >
      <Container>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Silkscreen, monospace",
            fontWeight: 200,
             color: "#1F6E1F",
            mb: 6
          }}
        >
          afkanerd@afkanerd: ~$ ./PROJECTS
        </Typography>
  {/*section , Card 1 */}
        <Box sx={{ width: "100%", maxWidth: 1200, mx: 'auto', mb: 10, position: 'relative' }}>
          <Card sx={{ display: 'flex', flexDirection: 'column', boxShadow: 1, color: "white", background: "#2f2f30", overflow: 'hidden', position: 'relative' }}>
            <Box sx={{ display: 'flex', gap: 1, position: 'absolute', top: 8, right: 8 }}>
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'red' }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'yellow' }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'green' }} />
            </Box>

             <Box component="img" src="/SWOB.png" alt="Card Layers" sx={{ width: '10%', objectFit: 'cover', mx: 10, mt: 2 }} />

            <CardContent sx={{ p: 4, position: 'relative' }}>
             
              <Typography
          variant="h4"
          sx={{
            fontFamily: "Silkscreen, monospace",
            mb: 6
          }}
           gutterBottom
        >
        SMSWITHOUTBORDERS
        </Typography>
           
              <Typography variant="body1"  sx={{ mb: 2 }}>
            SMSWithoutBorders is dedicated to researching, developing and promoting secure and 
             accessible communication tools that function even without an internet  connection. 
            
              </Typography>
              <Typography variant="body1" >
              The development includes mobile apps for various platforms  such as Android, iOS and Linux systems.
              Some of the work also includes  white papers on topics such as cryptography, 
            communications and internet freedom.
              </Typography>
              <ArrowForwardIcon sx={{ position: 'absolute', bottom: 16, right: 16, color: 'white', cursor: 'pointer' }} />
            </CardContent>
          </Card>
        </Box>


        <Box sx={{ width: "100%", maxWidth: 1200, mx: 'auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 4, mb: 8 }}>

         {/*section 2, Card 1 */}
          <Card sx={{ display: 'flex', flexDirection: 'column', color: "white", boxShadow: 1, background: "#2f2f30", overflow: 'hidden', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-8px)' }, position: 'relative' }}>
            <Box sx={{ display: 'flex', gap: 1, position: 'absolute', top: 8, right: 8 }}>
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'red' }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'yellow' }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'green' }} />
            </Box>

            <Box component="img" src="/deku.png" alt="Dekus Project" sx={{ width: '25%', objectFit: 'cover', mx: 10, mt: 2 }} />

            <CardContent sx={{ p: 4, position: 'relative' }}>
                 <Typography
          variant="h5"
          sx={{
            fontFamily: "Silkscreen, monospace",
            mb: 6
          }}
           gutterBottom
        >
      QUEUEDROID
        </Typography>
             <Typography
  variant="body1"
  sx={{
    mb: 2,
    fontFamily: "ShareTech",
  }}
>
  QueueDroid is a powerful, self-hostable SMS API platform built for affordability, flexibility,
  and local optimization.
</Typography>

              <Typography variant="body1"   sx={{
    mb: 2,
    fontFamily: "ShareTech",
  }}>
              Its core purpose is to enable organizations and developers to queue, 
               schedule, and deliver bulk SMS messages with intelligent routing and cost-effective delivery.
              </Typography>

              <ArrowForwardIcon sx={{ position: 'absolute', bottom: 16, right: 16, color: 'white', cursor: 'pointer' }} />
            </CardContent>
          </Card>

          {/*section 2, Card 2 */}
          <Card sx={{ display: 'flex', flexDirection: 'column', boxShadow: 1, color: "white", background: "#2f2f30", overflow: 'hidden', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-8px)' }, position: 'relative' }}>
            <Box sx={{ display: 'flex', gap: 1, position: 'absolute', top: 8, right: 8 }}>
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'red' }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'yellow' }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'green' }} />
            </Box>

            <Box component="img" src="/shortmesh.png" alt="Relay Project" sx={{ width: '25%', objectFit: 'cover', mx: 5, mt: 2 }} />

            <CardContent sx={{ p: 4, position: 'relative' }}>
                <Typography
          variant="h5"
          sx={{
            fontFamily: "Silkscreen, monospace",
           
            mb: 6
          }}
           gutterBottom
        >
   SHORTMESH
        </Typography>
              <Typography variant="body1"  sx={{ mb: 2 }}>
ShortMesh is a Messaging bridge API that lets you send and receive messages across different platforms.
              </Typography>
              <ArrowForwardIcon sx={{ position: 'absolute', bottom: 16, right: 16, color: 'white', cursor: 'pointer' }} />
            </CardContent>
          </Card>

        </Box>

      </Container>
    </Box>
  );
}
