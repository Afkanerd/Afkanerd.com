import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LandingPage() {
  const { t } = useTranslation();

  return (
    <Box
       id="contact"
      sx={{
        fontFamily: "'Share Tech'",
        color: "white",
        bgcolor: "#1E1E1E",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 1 } }}>
        
    <Typography
  variant="h4"
  sx={{
    fontFamily: "Silkscreen",
    fontWeight: 200,
    color: "#1F6E1F",
    mb: 6,
    fontSize: {
      xs: "1.4rem",
      sm: "1.6rem",
      md: "1.9rem",
      lg: "2.1rem",
    },
  }}
>
          {t("contact.sectionTitle")}
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "#777777", lineHeight: 2, mb: 4, fontFamily: "'Share Tech'" }}
        >
          {t("contact.email")}
        </Typography>

      </Container>
    </Box>
  );
}
