import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function loadJobs() {
    const sheetId = "1XVzbedERoqGacuFR9UhwqywKN3Px8WRwspEqECkpwzo";
    const sheetName = "AfknerdJobs";
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");

      const text = await response.text();
      const json = JSON.parse(text.substring(47).slice(0, -2));
      const allRows = json.table.rows || [];

      const isHeader = allRows[0]?.c?.some((cell) => {
        const val = cell?.v?.toString().toLowerCase() || "";
        return ["title", "job title", "position"].includes(val);
      });

      const rows = isHeader ? allRows.slice(1) : allRows;

      const jobsData = rows
        .map((row) => ({
          title: row.c[1]?.v?.trim() || "",
          location: row.c[2]?.v || "",
          description: row.c[3]?.v || "",
          link: row.c[4]?.v || "",
          requirements: row.c[5]?.v || "",
          responsibilities: row.c[6]?.v || "",
          experienceLevel: row.c[9]?.v || "",
          skills: row.c[10]?.v || "",
        }))
        .filter((job) => job.title.length > 0);

      setJobs(jobsData);
    } catch (err) {
      console.error(err);
      setError("Could not load job listings. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <Box id="jobs" sx={{ bgcolor: "#1E1E1E", color: "white", py: 5 }}>
      <Container>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Silkscreen, monospace",
            fontWeight: 200,
            color: "#1F6E1F",
            mb: 4,
          }}
        >
          afkanerd@afkanerd: ~$ ./Jobs/ Current Job Openings
        </Typography>


        {loading && (
          <Box sx={{ textAlign: "center", my: 4 }}>
            <CircularProgress color="info" />
            <Typography
              variant="body2"
              sx={{ mt: 1, fontFamily: "'Share Tech'" }}
            >
              Loading jobs...
            </Typography>
          </Box>
        )}

        {/* Error state */}
        {error && (
          <Typography
            color="error"
            sx={{ textAlign: "center", fontFamily: "'Share Tech'" }}
          >
            {error}
          </Typography>
        )}

        {/* Empty state */}
        {!loading && jobs.length === 0 && !error && (
          <Box
            sx={{
              textAlign: "center",
              my: 5,
              p: 3,
              borderRadius: 1,
              background: "#2f2f30",
            }}
          >
            <Typography>No job openings at the moment. Please check back soon.</Typography>
          </Box>
        )}

        {/* Job listings */}
        <Box sx={{ display: "grid", gap: 3 }}>
          {jobs.map((job, idx) => (
            <Box
              key={idx}
              sx={{
                p: 3,
                background: "#2f2f30",
                borderRadius: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2,
                  mx: 2,
                  fontFamily: "'Share Tech'",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#f1f9fcff",
                      mb: 1,
                      fontFamily: "'Share Tech'",
                    }}
                  >
                    {job.title}
                  </Typography>
                  {job.location && (
                    <Typography variant="body2" color="white">
                      {job.location}
                    </Typography>
                  )}
                </Box>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  mb: 2,
                  mx: 2,
                  fontFamily: "'Share Tech'",
                }}
              >
                {job.description}
              </Typography>

              {/* Requirements */}
              {job.requirements &&
                job.requirements.split(",").map((req, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{ mb: 1, mx: 2, fontFamily: "'Share Tech'" }}
                  >
                    • {req.trim()}
                  </Typography>
                ))}

              {/* Apply button */}
              {job.link && (
                <Box sx={{ textAlign: "right", mx: 2 }}>
                  <Button
                    href={job.link}
                    target="_blank"
                    variant="text"
                    sx={{
                      color: "white",
                      textTransform: "none",
                      fontSize: "1rem",
                      p: 0,
                      gap: 1,
                      "&:hover": {
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Apply Now
                    <ArrowOutwardIcon sx={{ fontSize: 22 }} />
                  </Button>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}