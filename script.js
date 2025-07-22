document.addEventListener("DOMContentLoaded", function () {
  const defaultLang = "en";
  let currentLang = localStorage.getItem("lang") || defaultLang;

  // Function to load the language file
  function loadLang(lang) {
    fetch(`./lang/${lang}.json`)
      .then((response) => response.json())
      .then((translations) => {
        document.querySelectorAll("[data-i18n]").forEach((element) => {
          const key = element.getAttribute("data-i18n");
          const translation = getTranslationByKey(translations, key);
          if (translation) {
            element.textContent = translation;
          }
        });
      });
  }

  // Helper function to get translation from nested JSON keys
  function getTranslationByKey(translations, key) {
    return key.split(".").reduce((acc, part) => acc && acc[part], translations);
  }

  // Add event listeners to language buttons
  document.querySelectorAll(".translate").forEach((button) => {
    button.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      currentLang = lang;
      localStorage.setItem("lang", lang);
      loadLang(lang);
    });
  });

  loadLang(currentLang);
});

// =============== Jobs


 const sheetId = '1XVzbedERoqGacuFR9UhwqywKN3Px8WRwspEqECkpwzo';
  const sheetName = 'AfknerdJobs';
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

  async function loadJobs() {
    const container = document.getElementById('jobs-container');
    container.innerHTML = 'Loading jobs...';

    try {
      const response = await fetch(url);
      const text = await response.text();
      const json = JSON.parse(text.substring(47).slice(0, -2)); // Remove weird wrapper
      
      const rows = json.table.rows;

      const jobs = rows.map(row => ({
        title: row.c[1]?.v || '',
        location: row.c[2]?.v || '',
        description: row.c[3]?.v || '',
        link: row.c[4]?.v || ''
      })).filter(job => job.title || job.location || job.description);

      container.innerHTML = '';

      if (jobs.length === 0) {
        container.innerHTML = '<p class="no-jobs">We currently have no job openings. Please check back later.</p>';
        return;
      }

      jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
          <h3>${job.title}</h3>
          <p><strong>Location:</strong> ${job.location}</p>
          <p>${job.description}</p>
          <a href="${job.link}" class="apply-btn" target="_blank">Apply Now</a>
        `;
        container.appendChild(jobCard);
      });

    } catch (err) {
      console.error('Error loading jobs:', err);
      container.innerHTML = '<p class="no-jobs">Could not load job listings. Please try again later.</p>';
    }
  }

  window.addEventListener('DOMContentLoaded', loadJobs);