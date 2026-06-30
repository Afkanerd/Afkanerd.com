"use client";

import { Box, Stack, Typography } from "@mui/material";

export default function TerminalWindow({ title, children }) {
  return (
    <Box
      sx={{
        bgcolor: "#181818",
        border: "1px solid #2c2c2c",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,.25)",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          px: 2,
          py: 1.2,
          bgcolor: "#202020",
          borderBottom: "1px solid #2c2c2c",
        }}
      >
        <Box
          sx={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            bgcolor: "#ff5f56",
          }}
        />

        <Box
          sx={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            bgcolor: "#ffbd2e",
          }}
        />

        <Box
          sx={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            bgcolor: "#27c93f",
          }}
        />

        <Typography
          sx={{
            ml: 2,
            color: "#8f8f8f",
            fontSize: 13,
            fontFamily: "var(--font-jetbrains), monospace",
          }}
        >
          {title}
        </Typography>
      </Stack>

      <Box p={3}>{children}</Box>
    </Box>
  );
}