import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Chip, Button, CircularProgress } from "@mui/material";

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

      const jobsData = rows.map(row => ({
        title: row.c[1]?.v?.trim() || '',
        location: row.c[2]?.v || '',
        description: row.c[3]?.v || '',
        link: row.c[4]?.v || '',
        requirements: row.c[5]?.v || '',
        responsibilities: row.c[6]?.v || '',
        experienceLevel: row.c[9]?.v || '',
        skills: row.c[10]?.v || ''
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
          variant="h4"
          sx={{ fontFamily: "Silkscreen, monospace", fontWeight: 200, color: "#1F6E1F", mb: 4 }}
        >
          afkanerd@afkanerd: ~$ ./Jobs/ Current Job Openings
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

        <Box sx={{ display: 'grid', gap: 3 }}>
          {jobs.map((job, idx) => (
            <Box
              key={idx}
              sx={{
                p: 3,
                background: "#2f2f30",
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Box>
                  <Typography variant="h6" sx={{ color: '#9BE3FF' }}>{job.title}</Typography>
                  {job.location && <Typography variant="body2" color="white">{job.location}</Typography>}
                </Box>
                {job.experienceLevel && <Chip label={job.experienceLevel} color="default" variant="outlined" />}
              </Box>

              <Typography variant="body2" sx={{ color: 'white', mb: 2 }}>{job.description}</Typography>

              {job.requirements && (
                <Typography variant="body2" sx={{ mb: 1 }}><strong>Requirements:</strong> {job.requirements}</Typography>
              )}
              {job.responsibilities && (
                <Typography variant="body2" sx={{ mb: 2 }}><strong>Responsibilities:</strong> {job.responsibilities}</Typography>
              )}

              {job.skills && (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {job.skills.split(',').map((skill, i) => (
                    <Chip key={i} label={skill.trim()} variant="outlined" color="default" />
                  ))}
                </Box>
              )}

              {job.link && (
                <Box sx={{ textAlign: 'right' }}>
                  <Button href={job.link} target="_blank" variant="outlined" color="info">Apply Now →</Button>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
