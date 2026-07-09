"use client";

import { Box, Typography } from "@mui/material";

export default function TerminalSection({ command, content }) {
  return (
    <Box>
      <Typography
        sx={{
          mb: 2,
          color: "#7DD3FC",
          fontFamily: "var(--font-jetbrains), monospace",
        }}
      >
        <Box
          component="span"
          sx={{
            color: "#7EE787",
            mr: 1,
          }}
        >
          $
        </Box>

        {command}
      </Typography>

      {content.map((line, index) => (
        <Typography
          key={index}
          sx={{
            color: "#d8d8d8",
            fontFamily: "var(--font-jetbrains), monospace",
            lineHeight: 1.8,
            whiteSpace: "pre-wrap",
          }}
        >
          {line || "\u00A0"}
        </Typography>
      ))}

      <Typography
        sx={{
          mt: 2,
          color: "#7EE787",
          fontFamily: "var(--font-jetbrains), monospace",
          animation: "blink 1s step-end infinite",

          "@keyframes blink": {
            "50%": {
              opacity: 0,
            },
          },
        }}
      >
        ▋
      </Typography>
    </Box>
  );
}
