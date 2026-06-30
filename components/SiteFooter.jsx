"use client";

import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import {
  Box,
  Container,
  Divider,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import LanguageDropdown from "@/components/LanguageDropdown";
import { useI18n } from "@/components/i18n/I18nProvider";

export default function SiteFooter() {
  const { t } = useI18n();

  return (
    <Box component="footer" id="contact" sx={{ mt: 5, py: 3.5 }}>
      <Container maxWidth="lg">
        {/* <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
        >
          <Typography fontWeight={700}>
            {t("footer.title", "AFKANERD INFOTECH")}
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <MuiLink
              component={Link}
              href="/#project"
              sx={{ color: "#edf2f6", textDecoration: "none" }}
            >
              {t("footer.Project", "Projects")}
            </MuiLink>
            <MuiLink
              component={Link}
              href="/jobs"
              sx={{ color: "#edf2f6", textDecoration: "none" }}
            >
              {t("navbar.jobs", "Jobs")}
            </MuiLink>
            <MuiLink
              component={Link}
              href="/#blog"
              sx={{ color: "#edf2f6", textDecoration: "none" }}
            >
              {t("footer.blog", "Blog")}
            </MuiLink>
            <MuiLink href="#" sx={{ color: "#edf2f6", textDecoration: "none" }}>
              {t("footer.Policy", "Privacy Policy")}
            </MuiLink>
          </Stack>
        </Stack> */}

        <Divider sx={{ my: 2.2, borderColor: "#2c2c2c" }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
        >
          <Typography variant="body2" fontWeight={600}>
            {t("footer.copyright", "copyright © 2024 AFKANERD INFOTECH.")}
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <LanguageDropdown />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
