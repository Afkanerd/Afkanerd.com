import React from 'react';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1E1E1E",
        color: "white",
        py: 3,
        mt: 'auto',
      }}
    >
      <Divider
        sx={{
          borderColor: "#b3b3b4ff",
          opacity: 0.4,
          my: 3
        }}
      />

      <Container>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
            gap: { xs: 1, md: 0 }
          }}
        >
          <Grid item xs={12} md="auto">
            <Typography variant="h6" sx={{ fontFamily: "'Share Tech'" }}>
              {t('footer.company')}
            </Typography>
          </Grid>

          <Grid item xs={12} md="auto">
            <Typography variant="body2" sx={{ fontFamily: "'Share Tech'" }}>
              {t('footer.rights')}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
