import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useTranslation } from "react-i18next";

function CardDots() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 16,
        right: 16,
        display: "flex",
        gap: 1,
        zIndex: 2,
      }}
    >
      <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#EF4444" }} />
      <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#F59E0B" }} />
      <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#22C55E" }} />
    </Box>
  );
}

function ProjectCard({ title, description, image }) {
  return (
    <Paper
      sx={{
        fontFamily: "'Share Tech'",
        p: 4,
        bgcolor: "#2E2E30",
        height: 260,
        color: "white",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <CardDots />

      <Box
        component="img"
        src={image}
        alt={title}
        sx={{ width: 60, height: 60, borderRadius: 2, mb: 2, objectFit: "cover" }}
      />

      <Typography variant="h6" sx={{ fontWeight: 400, mb: 1, fontFamily: "Silkscreen" }}>
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: 14,
          opacity: 0.8,
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          flexGrow: 1,
          fontFamily: "'Share Tech'",
        }}
      >
        {description}
      </Typography>

      <ArrowOutwardIcon
        sx={{ position: "absolute", bottom: 16, right: 16, cursor: "pointer" }}
      />
    </Paper>
  );
}

export default function ProjectSection() {
  const { t } = useTranslation();

  return (
    <Box sx={{ background: "#1E1E1E", overflowX: "hidden" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>

        {/* SECTION TITLE */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Silkscreen",
            fontWeight: 200,
            color: "#1F6E1F",
            mb: 6,
          }}
        >
          {t("projects.sectionTitle")}
        </Typography>

        {/* MAIN LARGE CARD */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 5,
            mb: 8,
          }}
        >
          <Box sx={{ gridColumn: "1 / -1", fontFamily: "'Share Tech'" }}>
            <ProjectCard
              title={t("projects.swb.title")}
              image="/SWOB.png"
              description={t("projects.swb.description")}
            />
          </Box>
        </Box>

        {/* GRID OF TWO */}
        <Box
          sx={{
            display: "grid",
            gap: 5,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(auto-fill, minmax(300px, 1fr))",
              md: "repeat(3, 1fr)",
            },
          }}
        >

          <Box sx={{ gridColumn: { xs: "span 1", md: "span 2" }, fontFamily: "'Share Tech'" }}>
            <ProjectCard
              title={t("projects.queuedroid.title")}
              image="/qdroid.png"
              description={t("projects.queuedroid.description")}
            />
          </Box>

          <ProjectCard
            title={t("projects.shortmesh.title")}
            image="/shortmesh.png"
            description={t("projects.shortmesh.description")}
          />
        </Box>
      </Box>
    </Box>
  );
}
