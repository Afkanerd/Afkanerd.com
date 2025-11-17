import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Chip, Button, CircularProgress } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function loadJobs() {
    const sheetId = '1XVzbedERoqGacuFR9UhwqywKN3Px8WRwspEqECkpwzo';
    const sheetName = 'AfknerdJobs';
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');

      const text = await response.text();
      const json = JSON.parse(text.substring(47).slice(0, -2));
      const allRows = json.table.rows || [];

      const isHeader = allRows[0]?.c?.some(cell => {
        const val = cell?.v?.toString().toLowerCase() || '';
        return ['title', 'job title', 'position'].includes(val);
      });

      const rows = isHeader ? allRows.slice(1) : allRows;

      // ✅ Correct column mapping based on your actual Google Sheet
      const jobsData = rows.map(row => ({
        title: row.c[1]?.v?.trim() || '',
        description: row.c[2]?.v || '',
        link: row.c[3]?.v || '',
        requirements: row.c[4]?.v || '',      // bullet list column
        datePosted: row.c[5]?.v || '',
        salary: row.c[6]?.v || '',
        experienceLevel: row.c[7]?.v || '',
        skills: row.c[8]?.v || ''
      })).filter(job => job.title.length > 0);

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
    <Box sx={{ bgcolor: "#1E1E1E", color: "white", py: 5 }}>
      <Container>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Silkscreen, monospace",
            fontWeight: 400,
            mb: 3
          }}
        >
          Jobs
        </Typography>

        <Typography variant="body1" sx={{ fontWeight: 400, mb: 8 }}>
          You’ll find all available jobs and opportunity listings here
        </Typography>

        {loading && (
          <Box sx={{ textAlign: 'center', my: 4 }}>
            <CircularProgress color="info" />
            <Typography variant="body2" sx={{ mt: 1 }}>Loading jobs...</Typography>
          </Box>
        )}

        {error && (
          <Typography color="error" sx={{ textAlign: 'center' }}>{error}</Typography>
        )}

        {!loading && jobs.length === 0 && !error && (
          <Box sx={{ textAlign: 'center', my: 5, p: 3, borderRadius: 1, background: '#2f2f30' }}>
            <Typography>No job openings at the moment. Please check back soon.</Typography>
          </Box>
        )}

        <Box sx={{ display: 'grid', gap: 3, width: "100%", maxWidth: 800 }}>
          {jobs.map((job, idx) => (
            <Box
              key={idx}
              sx={{
                position: "relative",
                borderRadius: 2,
                overflow: "visible",
              }}
            >

               <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: -20, sm: -25, md: -30 },   
                    right: { xs: -20, sm: -25, md: -30 },   
                    width: { xs: 200, sm: 280, md: 380 },   
                    height: { xs: 200, sm: 280, md: 380 },   
                    backgroundImage: `
                      radial-gradient(#2F2F30 3px, transparent 3px),
                      radial-gradient(#2F2F30 3px, transparent 3px)
                    `,
                    backgroundPosition: "0 0, 10px 10px",
                    backgroundSize: { xs: "10px 10px", sm: "15px 15px", md: "20px 20px" },
                    zIndex: 0,
                    pointerEvents: "none",
                  }}
                />

        
              <Box
                sx={{
                  p: 3,
                  background: "#2f2f30",
                  borderRadius: 2,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#9BE3FF' }}>{job.title}</Typography>
                    {job.datePosted && (
                      <Typography variant="body2" color="white">
                     {job.datePosted}
                      </Typography>
                    )}
                  </Box>

          
                </Box>

                <Typography variant="body2" sx={{ color: 'white', mb: 2 }}>
                  {job.description}
                </Typography>

                {/* Requirements (Bullet List) */}
                {job.requirements && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      Requirements:
                    </Typography>

                    <ul style={{ marginTop: 4, paddingLeft: 20 }}>
                      {job.requirements
                        .split(/<br\s*\/?>|\r?\n/)
                        .map(line => line.trim())
                        .filter(line => line.length > 0)
                        .map((req, i) => (
                          <li key={i} style={{ marginBottom: 4 }}>
                            <Typography variant="body2">
                              {req.replace(/^•\s*/, '')}
                            </Typography>
                          </li>
                        ))}
                    </ul>
                  </Box>
                )}

                  {job.link && (
                    <Box sx={{ textAlign: "right", mb: 8 }}>
                      <Box
                        component="a"
                        href={job.link.startsWith("mailto:") ? job.link : `mailto:${job.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          position: "absolute",
                          bottom: 16,
                          right: 16,
                          color: "white",
                          cursor: "pointer",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 1,
                          padding: "6px 8px",
                          fontSize: "14px"
                        }}
                      >
                        Apply Now
                        <ArrowOutwardIcon sx={{ fontSize: 18 }} />
                      </Box>
                    </Box>
                  )}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
