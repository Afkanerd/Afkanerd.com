import React from "react";
import { Box, Typography, Card, CardContent, Container, ImageListItem, ImageList } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


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
          <Card sx={{ display: 'flex', flexDirection: 'column', boxShadow: 1, color: "white", background: "#2F2F30", overflow: 'hidden', position: 'relative' }}>
            <Box sx={{ display: 'flex', gap: 1, position: 'absolute', top: 8, right: 8 }}>
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'red' }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'yellow' }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'green' }} />
            </Box>

<Box
  component="img"
  src="/SWOB.png"
  alt="Card Layers"
  sx={{
    width: { xs: '30%', sm: '20%', md: '14%' },  
    height: { xs: 60, sm: 80, md: 100 },       
    mx: { xs: 2, sm: 3, md: 4 },                 
    mt: { xs: 1, sm: 2, md: 2 },               
    objectFit: "contain",                      
  }}
/>



            <CardContent sx={{ p: 4, position: 'relative' }}>
              <Typography
          variant="h4"
          sx={{
            fontFamily: "Silkscreen, monospace",
            mb: 4
          }}
           gutterBottom
        >
        SMSWITHOUTBORDERS
        </Typography>
           
              <Typography variant="body1"  sx={{ mb: 4,  maxWidth: 1000}}>
            SMSWithoutBorders is dedicated to researching, developing and promoting secure and 
             accessible communication tools that function even without an internet  connection. 
            
              </Typography>
              <Typography variant="body1" sx={{ mb: 4,  maxWidth: 1000 }} >
              The development includes mobile apps for various platforms  such as Android, iOS and Linux systems.
              Some of the work also includes  white papers on topics such as cryptography, 
            communications and internet freedom.
              </Typography>
      <Box
  component="a"
  href="https://example.com"   
  target="_blank"             
  rel="noopener noreferrer"
  sx={{
    position: 'absolute',
    bottom: 16,
    right: 16,
    color: 'white',
    cursor: 'pointer',
  }}
>
  <ArrowOutwardIcon />
</Box>
            </CardContent>
          </Card>
        </Box>


        <Box sx={{ width: "100%", maxWidth: 1200, mx: 'auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 4, mb: 8 }}>

    
          <Card sx={{ display: 'flex', flexDirection: 'column', color: "white", boxShadow: 1, background: "#2f2f30", overflow: 'hidden', position: 'relative' }}>
            <Box sx={{ display: 'flex', gap: 1, position: 'absolute', top: 8, right: 8 }}>
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'red' }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'yellow' }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'green' }} />
            </Box>

<Box
  component="img"
  src="/qdroid.png"
  alt="Card Layers"
  sx={{
    width: { xs: '30%', sm: '20%', md: '14%' },  
    height: { xs: 60, sm: 80, md: 100 },       
    mx: { xs: 2, sm: 3, md: 4 },                 
    mt: { xs: 1, sm: 2, md: 2 },               
    objectFit: "contain",                      
  }}
/>


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
     maxWidth: 1000,
    mb: 2
  }}
>
  QueueDroid is a powerful, self-hostable SMS API platform built for affordability, flexibility,
  and local optimization.
</Typography>

              <Typography variant="body1"   sx={{
    mb: 2,
     maxWidth: 1000
  }}>
              Its core purpose is to enable organizations and developers to queue, 
               schedule, and deliver bulk SMS messages with intelligent routing and cost-effective delivery.
              </Typography>

                 <Box
  component="a"
  href="https://example.com"   
  target="_blank"             
  rel="noopener noreferrer"
  sx={{
    position: 'absolute',
    bottom: 16,
    right: 16,
    color: 'white',
    cursor: 'pointer',
  }}
>
  <ArrowOutwardIcon />
</Box>


            </CardContent>
          </Card>
    

    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: 1,
        color: "white",
        background: "#2f2f30",
        overflow: "hidden",
        position: "relative",
        width: "100%",
        maxWidth: 600,
        mx: "auto",
        transition: "transform 0.3s",
        "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
      }}
    >
     
      <Box
        sx={{
          display: "flex",
          gap: 1,
          position: "absolute",
          top: 8,
          right: 8,
        }}
      >
        <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "red" }} />
        <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "yellow" }} />
        <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "green" }} />
      </Box>
<Box
  component="img"
src="/shortmesh.png"
  alt="Card Layers"
  sx={{
    width: { xs: '30%', sm: '20%', md: '14%' },  
    height: { xs: 60, sm: 80, md: 100 },       
    mx: { xs: 2, sm: 3, md: 4 },                 
    mt: { xs: 1, sm: 2, md: 2 },               
    objectFit: "contain",                      
  }}
/>

  
      <CardContent sx={{ p: 4, position: "relative" }}>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Silkscreen, monospace", mb: 2 }}
          gutterBottom
        >
          SHORTMESH
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          ShortMesh is a Messaging bridge API that lets you send and receive messages across different platforms.
        </Typography>

      
        <Box
          component="a"
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: "absolute",
            bottom: 16,
            right: 16,
            color: "white",
            cursor: "pointer",
          }}
        >
          <ArrowOutwardIcon />
        </Box>
      </CardContent>
    </Card>



       

        </Box>

      </Container>
    </Box>
  );
}
