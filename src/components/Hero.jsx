import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LandingPage() {
  const { t } = useTranslation();

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
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        
        {/* MAIN TITLE */}
        <Typography
          sx={{
            fontFamily: "Silkscreen",
            fontSize: "clamp(28px, 15vw, 100px)",
            fontWeight: 500,
            mb: 2,
            mx: { xs: 2, sm: 0 }
          }}
        >
          {t("landing.title")}
        </Typography>

        {/* SUBTITLE */}
        <Typography
          sx={{
            fontFamily: "'Share Tech'",
            fontSize: "clamp(16px, 7vw, 50px)",
            fontWeight: 400,
            mb: 2,
            mx: { xs: 2, sm: 0 }
          }}
        >
          {t("landing.subtitle")}
        </Typography>

        {/* PARAGRAPH 1 */}
        <Typography
          sx={{
            maxWidth: 780,
            mb: 3,
            fontSize: 18,
            fontFamily: "'Share Tech'",
            mx: { xs: 2, sm: 0 }
          }}
        >
          {t("landing.p1")}
        </Typography>

        {/* PARAGRAPH 2 */}
        <Typography
          sx={{
            maxWidth: 780,
            mb: 3,
            fontSize: 18,
            fontFamily: "'Share Tech'",
            mx: { xs: 2, sm: 0 }
          }}
        >
          {t("landing.p2")}
        </Typography>

      </Container>
    </Box>
  );
}
