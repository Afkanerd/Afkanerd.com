"use client";

import { Box, Container, Stack, Typography, Link } from "@mui/material";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import { useI18n } from "@/components/i18n/I18nProvider";
import SWOBLogo from "../images/SWOB.png";
import SiteFooter from "@/components/SiteFooter";

const fadedLineVertical = {
  width: "1px",
  background:
    "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0) 100%)",
  alignSelf: "stretch",
};

const fadedLineHorizontal = {
  height: "1px",
  width: "100%",
  background:
    "linear-gradient(to right, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 70%, rgba(255,255,255,0) 100%)",
  my: 2,
};

const subCardSx = {
  p: 2.5,
  backgroundColor: "rgba(255,255,255, 0.015)",
  border: "1px solid rgba(255,255,255, 0.04)",
  borderRadius: "0px",
  transition: "all .3s ease",
  "&:hover": {
    backgroundColor: "rgba(255,255,255, 0.03)",
    borderColor: "rgba(255,255,255, 0.1)",
  },
};

const linkSx = {
  position: "relative",
  px: 2,
  py: 1,
  minWidth: 0,
  textDecoration: "none",
  color: "#fff",
  textTransform: "none",
  fontFamily: "var(--font-jetbrains), monospace",
  backgroundColor: "rgba(255,255,255,.03)",
  borderRadius: "0px",
  transition: "all .2s ease",

  "&::before, &::after": {
    content: '""',
    position: "absolute",
    width: 12,
    height: 12,
    pointerEvents: "none",
  },

  "&::before": {
    top: 0,
    left: 0,
    borderTop: "1px solid rgba(255,255,255,.3)",
    borderLeft: "1px solid rgba(255,255,255,.3)",
  },

  "&::after": {
    bottom: 0,
    right: 0,
    borderBottom: "1px solid rgba(255,255,255,.3)",
    borderRight: "1px solid rgba(255,255,255,.3)",
  },

  "&:hover": {
    backgroundColor: "rgba(255,255,255,.05)",
  },
};

export default function Projects() {
  const { t } = useI18n();

  return (
    <>
      <SiteHeader />
      <Container maxWidth="lg">
        <Stack spacing={5} py={8} mt={12}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontSize: { xs: "2.5rem", md: "3.75rem" },
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#fff",
            }}
          >
            {t("projectsPage.heroTitle", "Our open-source projects")}
          </Typography>
        </Stack>

        <Stack py={2} mt={12}>
          <Typography
            component="h2"
            sx={{
              mb: 8,
              fontSize: "1.3rem",
              fontFamily: "var(--font-jetbrains), monospace",
            }}
          >
            <Box component="span" sx={{ color: "#236d25" }}>
              afkanerd@afkanerd:
            </Box>{" "}
            ~$ {t("projects.title", "./Projects")}
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }}
          sx={{ mb: 19, width: "100%" }}
        >
          <Box sx={{ width: { xs: "100%", md: "240px" }, flexShrink: 0 }}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box
                sx={{
                  width: 26,
                  height: 26,
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={SWOBLogo}
                  alt="SMSWithoutBorders"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#edf2f6",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                SMSWithoutBorders
              </Typography>
            </Stack>
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Box sx={fadedLineVertical} />
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                maxWidth: "700px",
              }}
            >
              {t(
                "projectsPage.sms.description",
                "An environment built to enable communication platforms to run SMS backends as alternative communication protocols for keeping users online when internet access is limited or completely blocked.",
              )}
            </Typography>

            <Box sx={fadedLineHorizontal} />

            <Link
              href="https://smswithoutborders.com"
              target="_blank"
              rel="noopener"
              sx={linkSx}
            >
              {t("projectsPage.sms.visit", "Visit website")}{" "}
              {"->"}
            </Link>

            <Box sx={{ mt: 8 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  fontWeight: 700,
                  display: "block",
                  mb: 2.5,
                }}
              >
                {t(
                  "projectsPage.sms.subProjectsTitle",
                  "Sub projects under SMSWithoutBorders",
                )}
              </Typography>

              <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
                <Box
                  component={Link}
                  href="https://relay.smswithoutborders.com"
                  target="_blank"
                  rel="noopener"
                  sx={{ ...subCardSx, flex: 1, textDecoration: "none" }}
                >
                  <Typography sx={{ color: "#edf2f6", fontWeight: 600, mb: 2 }}>
                    RelaySMS
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.875rem",
                      lineHeight: 1.5,
                      mb: 1.5,
                    }}
                  >
                    {t(
                      "projectsPage.sms.relayDescription",
                      "RelaySMS uses SMS messaging to route offline messages back online. Anyone experiencing poor connectivity can use it to circumvent shutdowns.",
                    )}
                  </Typography>
                </Box>

                <Box
                  component={Link}
                  href="https://deku.smswithoutborders.com"
                  target="_blank"
                  rel="noopener"
                  sx={{ ...subCardSx, flex: 1, textDecoration: "none" }}
                >
                  <Typography sx={{ color: "#edf2f6", fontWeight: 600, mb: 2 }}>
                    DekuSMS
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.875rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {t(
                      "projectsPage.sms.dekuDescription",
                      "DekuSMS is an open-source SMS app with end-to-end encrypted SMS messaging between DekuSMS users.",
                    )}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Stack>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }}
          sx={{ mb: 12, width: "100%" }}
        >
          <Box sx={{ width: { xs: "100%", md: "240px" }, flexShrink: 0 }}>
            <Typography
              variant="h6"
              sx={{
                color: "#edf2f6",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              ShortMesh
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Box sx={fadedLineVertical} />
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                maxWidth: "700px",
              }}
            >
              {t(
                "projectsPage.shortmesh.description",
                "ShortMesh builds on Matrix bridges to provide developers with a unified REST API. It supports Signal, Telegram, and WhatsApp bridges and can be self-hosted.",
              )}
            </Typography>

            <Box sx={fadedLineHorizontal} />

            <Link href="https://github.com/Afkanerd" target="_blank" rel="noopener" sx={linkSx}>
              {t("projectsPage.shortmesh.explore", "Explore ShortMesh protocol")}{" "}
              {"->"}
            </Link>

            <Box sx={{ mt: 8 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  fontWeight: 700,
                  display: "block",
                  mb: 2.5,
                }}
              >
                {t(
                  "projectsPage.shortmesh.subProjectsTitle",
                  "Sub projects under ShortMesh",
                )}
              </Typography>

              <Stack direction={{ xs: "column", md: "row" }} spacing={2.5}>
                <Box
                  component={Link}
                  href="https://authy.shortmesh.com/demo/"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    ...subCardSx,
                    flex: 1,
                    maxWidth: { md: "50%" },
                    textDecoration: "none",
                  }}
                >
                  <Typography sx={{ color: "#edf2f6", fontWeight: 600, mb: 1 }}>
                    Authy
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.875rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {t(
                      "projectsPage.shortmesh.authyDescription",
                      "Authy is an open-source one-time password service that generates, delivers, and verifies one-time passwords.",
                    )}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Container>
      <SiteFooter />
    </>
  );
}
