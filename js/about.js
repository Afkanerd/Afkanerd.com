"use client";

import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import SiteHeader from "@/components/SiteHeader";
import { useI18n } from "@/components/i18n/I18nProvider";
import SiteFooter from "@/components/SiteFooter";

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      <SiteHeader />

      <Container maxWidth="md">
        <Stack spacing={4} pt={16} pb={8}>
          <Typography
            variant="overline"
            sx={{
              color: "text.secondary",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {t("aboutPage.overline", "Origin & Ethos")}
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.75rem" },
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            {t(
              "aboutPage.heroTitle",
              "Building open technology for digital rights, security, and privacy in Africa.",
            )}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "text.secondary",
              fontWeight: 400,
              lineHeight: 1.6,
              fontSize: "1.35rem",
            }}
          >
            {t(
              "aboutPage.heroBody",
              "Afkanerd grew out of a simple idea: the African Nerd. For too long, the narrative around African tech has been boxed into corporate rigidity, bureaucracy, and repetitive fintech clones. We built a space for something different.",
            )}
          </Typography>
        </Stack>

        <hr
          style={{
            border: 0,
            borderTop: "1px solid rgba(0,0,0,0.1)",
            margin: "2rem 0",
          }}
        />

        <Stack spacing={4} py={4}>
          <Typography variant="h4" sx={{ letterSpacing: "-0.01em" }}>
            {t("aboutPage.sectionTitle", "Hackers, not institutions.")}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "1.1rem",
              lineHeight: 1.75,
            }}
          >
            {t(
              "aboutPage.sectionBody",
              "We are an open-source collective of builders, hackers, and optimists. We believe that fluid collaboration and raw, working code are the ultimate leverage for defending privacy, decentralizing access, and solving critical infrastructure challenges across the world.",
            )}
          </Typography>
        </Stack>

        <Box py={8}>
          <Typography variant="h5" sx={{ mb: 6, letterSpacing: "-0.01em" }}>
            {t("aboutPage.principlesTitle", "Operating Principles")}
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
                {t("aboutPage.principle1.title", "Open by default")}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                {t(
                  "aboutPage.principle1.body",
                  "If code impacts human rights, digital security, or personal privacy, it belongs to the world. We build transparently so our tools can be audited, adapted, and trusted without compromises.",
                )}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
                {t(
                  "aboutPage.principle2.title",
                  "Fluid execution over rigidity",
                )}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                {t(
                  "aboutPage.principle2.body",
                  "Structure should serve the product, not the other way around. We maintain a flat, high-autonomy culture where the best technical argument wins, not the loudest title.",
                )}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
                {t("aboutPage.principle3.title", "Resilient infrastructure")}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                {t(
                  "aboutPage.principle3.body",
                  "We design for the real world. Simple, offline-first, and lightweight systems will always outlive over-engineered, brittle architectures.",
                )}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
                {t("aboutPage.principle4.title", "Privacy as a foundation")}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                {t(
                  "aboutPage.principle4.body",
                  "We do not build backdoors or harvest telemetry. Digital privacy is not a premium add-on feature. It is a baseline human right that we bake into the first commit.",
                )}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <SiteFooter />
    </>
  );
}
