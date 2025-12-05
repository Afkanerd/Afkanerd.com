import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  CircularProgress,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";




function JobCard({ title, description, location, link, requirements }) {
  return (
    <Paper
      sx={{
        p: 4,
        bgcolor: "#2E2E30",
        color: "white",
        position: "relative",
        borderRadius: 2,
      }}
    >
      <CardDots />

      <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
        {title}
      </Typography>

      {location && (
        <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
          {location}
        </Typography>
      )}

      <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
        {description}
      </Typography>

      {requirements &&
        requirements.split(",").map((req, i) => (
          <Typography key={i} variant="body2" sx={{ mb: 1 }}>
            • {req.trim()}
          </Typography>
        ))}

      {link && (
        <Box sx={{ textAlign: "right" }}>
          <Button
            href={link}
            target="_blank"
            sx={{
              color: "white",
              textTransform: "none",
              "&:hover": {
                textDecoration: "underline",
                background: "transparent",
              },
            }}
          >
            Apply Now <ArrowOutwardIcon sx={{ ml: 1 }} />
          </Button>
        </Box>
      )}
    </Paper>
  );
}

export default function ProjectSection() {
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
    <Box sx={{ py: 12, background: "#1E1E1E", overflowX: "hidden", fontFamily: "'Share Tech'" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>

    
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Silkscreen",
            fontWeight: 200,
            color: "#1F6E1F",
            mb: 6,
          }}
        >
          ~/Jobs
        </Typography>


        <Box sx={{ mb: 2 }}>
          {loading && (
            <Box sx={{ textAlign: "center", my: 4 }}>
              <CircularProgress color="info" />
              <Typography sx={{ mt: 1, color: "white" }}>Loading jobs...</Typography>
            </Box>
          )}

          {error && (
            <Typography color="error" sx={{ textAlign: "center" }}>
              {error}
            </Typography>
          )}

          {!loading && jobs.length === 0 && !error && (
            <Box
              sx={{
                textAlign: "center",
                p: 3,
                background: "#2F2F30",
                borderRadius: 2,
              }}
            >
              <Typography>No job openings right now.</Typography>
            </Box>
          )}

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
                    fontFamily: "Silkscreen" 
                    }}
                  >
                    {job.title}
                  </Typography>
                  {job.location && (
                    <Typography variant="body2" color="white" sx={{fontFamily: "'Share Tech'"}}>
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

              {job.requirements &&
                job.requirements.split(",").map((req, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{ mb: 1, mx: 2, fontFamily: "'Share Tech'", color: "white" }}
                  >
                    • {req.trim()}
                  </Typography>
                ))}

            
              {job.link && (
                <Box sx={{ textAlign: "right", mx: 2 }}>
                  <Button
                    href={job.link}
                    target="_blank"
                    variant="text"
                    sx={{
                      fontFamily: "'Share Tech'",
                      color: "white",
                      textTransform: "none",
                      fontSize: 16,
                      p: 0,
                      gap: 1,
                      "&:hover": {
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Apply Now
                    <ArrowOutwardIcon sx={{ fontSize: 16 }} />
                  </Button>
                </Box>
              )}
            </Box>
          ))}
        </Box>
       
        </Box>
      </Box>
    </Box>
  );
}
