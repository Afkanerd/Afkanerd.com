"use client";

import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

const FADE_MS = 400;
// Fallback in case the video can't autoplay or fails to load.
const MAX_WAIT_MS = 4000;

export default function SiteLoader() {
  const videoRef = useRef(null);
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;

    const finish = () => setFading(true);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      finish();
      return;
    }

    const video = videoRef.current;
    video?.play().catch(finish);
    const timer = setTimeout(finish, MAX_WAIT_MS);

    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [done]);

  useEffect(() => {
    if (!fading) return;
    document.body.style.overflow = "";
    const timer = setTimeout(() => setDone(true), FADE_MS);
    return () => clearTimeout(timer);
  }, [fading]);

  if (done) return null;

  return (
    <Box
      role="status"
      aria-label="Loading"
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        opacity: fading ? 0 : 1,
        transition: `opacity ${FADE_MS}ms ease`,
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <Box
        component="video"
        ref={videoRef}
        src="/images/logo-animation.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => setFading(true)}
        onError={() => setFading(true)}
        sx={{
          width: { xs: "90vw", md: "60vw" },
          maxWidth: 900,
          height: "auto",
          mixBlendMode: "screen",
        }}
      />
    </Box>
  );
}
