import React from "react";
import { Box, Typography, Paper, IconButton } from "@mui/material";
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

function ProjectCard({ title, description, image, link }) {
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
        sx={{ width: 40, height: 40, mb: 2 }}
      />

      <Typography
        variant="h6"
        sx={{ fontWeight: 400, mb: 1, fontFamily: "Silkscreen" }}
      >
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

      {link && (
        <IconButton
          component="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title}`}
          sx={{
            position: "absolute",
            bottom: 16,
            right: 16,
            "& svg": {
              transition: "transform 0.2s ease",
            },
            "&:hover svg": {
              transform: "translate(2px, -2px)",
            },
          }}
        >
          <ArrowOutwardIcon sx={{ fontSize: 18, color: "white" }} />
        </IconButton>
      )}
    </Paper>
  );
}

export default function ProjectSection() {
  const { t } = useTranslation();

  return (
    <Box id="projects" sx={{ background: "#1E1E1E", overflowX: "hidden" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>
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
          {t("projects.sectionTitle")}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 5,
            mb: 8,
          }}
        >
          <ProjectCard
            title={t("projects.swb.title")}
            image="/SWOB.png"
            description={t("projects.swb.description")}
            link="https://smswithoutborders.com"
          />
        </Box>

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
          <Box sx={{ gridColumn: { xs: "span 1", md: "span 2" } }}>
            <ProjectCard
              title={t("projects.queuedroid.title")}
              image="/qdroid.png"
              description={t("projects.queuedroid.description")}
              link="https://queuedroid.com/"
            />
          </Box>

          <ProjectCard
            title={t("projects.shortmesh.title")}
            image="/shortmesh.png"
            description={t("projects.shortmesh.description")}
            link="https://shortmesh.com"
          />
        </Box>
      </Box>
    </Box>
  );
}
