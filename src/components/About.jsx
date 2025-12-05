import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        bgcolor: "#1E1E1E",
        color: "white",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        overflowX: "hidden",
        py: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ mb: 2 }}>
        
        {/* Terminal Title */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Silkscreen",
            fontWeight: 200,
            color: "#1F6E1F",
            mb: 6,
          }}
        >
          {t("hero.terminal")}
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
        >
          {/* IMAGE + BACKGROUND GRID */}
          <Box sx={{ position: "relative", borderRadius: 2, overflow: "visible" }}>
            <Box
              sx={{
                position: "absolute",
                bottom: -30,
                right: -30,
                width: 350,
                height: 350,
                backgroundImage: `
                  radial-gradient(#2F2F30 1px, transparent 1px),
                  radial-gradient(#2F2F30 1px, transparent 1px)
                `,
                backgroundPosition: "0 0, 10px 10px",
                backgroundSize: "18px 18px",
                zIndex: 0,
                pointerEvents: "none"
              }}
            />

            <Box
              component="img"
              src="/woman.jpg"
              alt={t("hero.imageAlt")}
              sx={{
                width: "100%",
                borderRadius: 2,
                position: "relative",
                zIndex: 1,
                display: "block",
              }}
            />
          </Box>

          {/* RIGHT TEXT BLOCK */}
          <Box sx={{ maxWidth: 500 }}>
            <Typography
              variant="body1"
              sx={{
                color: "#fcfcfcff",
                fontFamily: "'Share Tech'",
                lineHeight: 1.8,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {t("hero.description")}
            </Typography>
          </Box>
        </Stack>

        {/* FOOTNOTE QUOTE */}
        <Box
          sx={{
            py: 6,
            textAlign: "start",
            bgcolor: "#1E1E1E",
            color: "white",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontStyle: "italic",
              fontWeight: 300,
              fontFamily: "'Share Tech'",
            }}
          >
            <b>{t("hero.sourceLabel")}</b> {t("hero.sourceText")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
