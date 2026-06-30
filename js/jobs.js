document.addEventListener("DOMContentLoaded", function () {
  const jobsList = document.getElementById("jobs-list");
  const jobsStatus = document.getElementById("jobs-status");

  if (!jobsList || !jobsStatus) {
    return;
  }

  const externalSource = "https://opensheet.elk.sh/YOUR_GOOGLE_SHEET_ID/jobs";
  const fallbackSource = "./data/jobs.json";

  function normalizeJob(rawJob) {
    return {
      title: rawJob.title || "Untitled Role",
      team: rawJob.team || "General",
      location: rawJob.location || "Remote",
      type: rawJob.type || "Full-time",
      summary: rawJob.summary || "No summary provided yet.",
      link: rawJob.link || "#",
      posted: rawJob.posted || "Open"
    };
  }

  function renderJobs(jobs) {
    if (!Array.isArray(jobs) || jobs.length === 0) {
      jobsStatus.textContent = "No openings right now. Please check back soon.";
      return;
    }

    jobsList.innerHTML = "";

    jobs.forEach((rawJob) => {
      const job = normalizeJob(rawJob);
      const card = document.createElement("div");
      card.className = "col-md-6";
      card.innerHTML = `
        <article class="card project-card job-card h-100">
          <div class="card-body d-flex flex-column">
            <p class="project-prompt mb-3">afkanerd@jobs:~$ cat ${job.title.toLowerCase().replace(/\s+/g, "-")}.md</p>
            <h5 class="card-title mb-3">${job.title}</h5>
            <p class="job-meta mb-2">${job.team} | ${job.location} | ${job.type}</p>
            <p class="card-text flex-grow-1">${job.summary}</p>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <span class="job-posted">${job.posted}</span>
              <a href="${job.link}" class="project-link" target="_blank" rel="noopener noreferrer">Apply <span class="ms-1">&rarr;</span></a>
            </div>
          </div>
        </article>
      `;
      jobsList.appendChild(card);
    });

    jobsStatus.textContent = `Showing ${jobs.length} open role${jobs.length > 1 ? "s" : ""}.`;
  }

  function fetchJobs(url) {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load jobs from ${url}`);
      }
      return response.json();
    });
  }

  const sources = externalSource.includes("YOUR_GOOGLE_SHEET_ID")
    ? [fallbackSource]
    : [externalSource, fallbackSource];

  (async function loadJobs() {
    for (const source of sources) {
      try {
        const jobs = await fetchJobs(source);
        renderJobs(jobs);
        return;
      } catch (error) {
        // Continue to next source.
      }
    }

    jobsStatus.textContent = "Unable to load jobs feed right now.";
  })();
});
