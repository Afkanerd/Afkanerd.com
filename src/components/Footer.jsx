import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ py: 2, bgcolor: "#1E1E1E", color: "white" }}
    >
      <Container>
        <Box
          component="img"
          src="/footer.svg"
          alt="Footer Background"
          sx={{
            width: "100%",
            position: "relative",
            zIndex: 9999,
            height: { xs: "auto", sm: "auto", md: "100%" },
            objectFit: "cover",
            pb: 4,
          }}
        />

        <Grid
          container
          spacing={4}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            alignItems: "center",
            gap: 10,
            position: "relative",
            zIndex: 2,
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="body1">AFKANERD INFOTECH</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "flex-end" },
              alignItems: "center",
            }}
          >
            <Typography variant="body1">@AFKANERD</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
