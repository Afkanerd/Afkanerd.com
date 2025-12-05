import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function LandingPage() {
  return (
 <Box
  sx={{
    fontFamily: "'Share Tech'",
    color: "white",
    bgcolor: "#1E1E1E",
    minHeight: {
      xs: "50vh",   
      sm: "60vh",   
      md: "60vh",   
      lg: "50vh",   
    },

    display: "flex",
    alignItems: "center",
  }}
>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }}}>
        <Typography
          sx={{
            fontFamily: "Silkscreen",
            fontSize: "clamp(28px, 15vw, 100px)",
            fontWeight: 500,
            mb: 2,
          mx: { xs: 2, sm: 0 }
          }}
        >
          AFKANERD
        </Typography>

        <Typography
          sx={{
             fontFamily: "'Share Tech'",
            fontSize: "clamp(16px, 7vw, 50px)",
            fontWeight: 400,
            mb: 2,
                  mx: { xs: 2, sm: 0 }
          }}
        >
          WE CODE FOR THE PEOPLE
        </Typography>

        <Typography sx={{ maxWidth: 780, mb: 3, fontSize: 18, fontFamily: "'Share Tech'", mx: { xs: 2, sm: 0 } }}>
          We build open source in the open. We build technology for digital
          rights, security and privacy. Our tools are openly available for
          advocacy, healthcare and educational purposes.
        </Typography>

        <Typography sx={{ maxWidth: 780, mb: 3, fontSize: 18, fontFamily: "'Share Tech'", mx: { xs: 2, sm: 0 } }}>
          We also consult with open source projects and individuals. We will
          happily consult on your project if it serves the open source
          community — feel free to reach out.
        </Typography>
      </Container>
    </Box>
  );
}


