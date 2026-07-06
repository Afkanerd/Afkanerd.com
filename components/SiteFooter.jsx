"use client";

import {
  Box,
  Container,
  Divider,
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
