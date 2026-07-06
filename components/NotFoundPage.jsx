"use client";

import NextLink from "next/link";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useI18n } from "@/components/i18n/I18nProvider";

export default function NotFoundPage() {
  const { t } = useI18n();

  return (
    <>
      <SiteHeader />
      <Container
        component="main"
        maxWidth="md"
        sx={{ py: { xs: 12, md: 16 }, height: "75vh" }}
      >
        <Stack spacing={3} alignItems="flex-start">
          <Typography variant="overline" sx={{ color: "text.secondary" }}>
            404
          </Typography>
          <Typography variant="h2" component="h1" sx={{ lineHeight: 1.1 }}>
            {t("notFound.title", "Page not found")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: "50ch" }}
          >
            {t(
              "notFound.description",
              "The page you are looking for does not exist or has been moved.",
            )}
          </Typography>
          <Box>
            <Link
              component={NextLink}
              href="/"
              underline="none"
              sx={{
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
              }}
            >
              {t("notFound.backHome", "Back to homepage")}
            </Link>
          </Box>
        </Stack>
      </Container>
      <SiteFooter />
    </>
  );
}
