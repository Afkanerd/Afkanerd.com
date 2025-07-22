document.addEventListener("DOMContentLoaded", function () {
  const defaultLang = "en";
  let currentLang = localStorage.getItem("lang") || defaultLang;

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
      })
      .catch(console.error);
  }

  function getTranslationByKey(translations, key) {
    return key.split(".").reduce((acc, part) => acc && acc[part], translations);
  }

  document.querySelectorAll(".translate").forEach((button) => {
    button.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      currentLang = lang;
      localStorage.setItem("lang", lang);
      loadLang(lang);
    });
  });

})

  // ============ Jobs Section 
  async function loadJobs() {
    const sheetId = '1XVzbedERoqGacuFR9UhwqywKN3Px8WRwspEqECkpwzo';
    const sheetName = 'AfknerdJobs';
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

    const container = document.getElementById('jobs-container');
    container.innerHTML = `
      <div class="col-12 text-center my-4" id="jobs-loading">
        <div class="spinner-border text-info" role="status" style="width: 2rem; height: 2rem;">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2 small">Loading jobs...</p>
      </div>
    `;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');

      const text = await response.text();
      const json = JSON.parse(text.substring(47).slice(0, -2));
      const allRows = json.table.rows || [];

      // Automatically detect and skip header if necessary
      const isHeader = allRows[0]?.c?.some(cell => {
        const val = cell?.v?.toString().toLowerCase() || '';
        return ['title', 'job title', 'position'].includes(val);
      });

      const rows = isHeader ? allRows.slice(1) : allRows;

      const jobs = rows.map(row => ({
        title: row.c[1]?.v?.trim() || '',
        location: row.c[2]?.v || '',
        description: row.c[3]?.v || '',
        link: row.c[4]?.v || '',
        requirements: row.c[5]?.v || '',
        responsibilities: row.c[6]?.v || '',
        datePosted: row.c[7]?.v || '',
        salaryRange: row.c[8]?.v || '',
        experienceLevel: row.c[9]?.v || '',
        skills: row.c[10]?.v || ''
      })).filter(job => job.title.length > 0);

      container.innerHTML = '';

      if (jobs.length === 0) {
        container.innerHTML = `
          <div class="col-12 text-center my-5">
            <span
              class="badge bg-primary d-inline-flex align-items-center gap-2 px-4 py-2 fs-5 fst-italic"
              style="border-radius: 1rem; max-width: 400px; cursor: default;"
            >
              <i class="fas fa-info-circle" aria-hidden="true"></i>
              No job vacancy for now.
            </span>
          </div>
        `;
        return;
      }

      jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'col-12 job-card fade-in';
        jobCard.innerHTML = `
          <h3 class="job-title fw-bold mb-2 text-uppercase">${job.title}</h3>
          <p>${job.description}</p>
          <p><strong>Location:</strong> ${job.location}</p>
          ${job.experienceLevel ? `<p><strong>Experience Level:</strong> ${job.experienceLevel}</p>` : ''}
          ${job.salaryRange ? `<p><strong>Salary Range:</strong> ${job.salaryRange}</p>` : ''}
          ${job.skills ? `<p><strong>Skills Needed:</strong> ${job.skills}</p>` : ''}
          ${job.requirements ? `<p><strong>Requirements:</strong> ${job.requirements}</p>` : ''}
          ${job.responsibilities ? `<p><strong>Responsibilities:</strong> ${job.responsibilities}</p>` : ''}
          ${job.link ? `<a href="${job.link}" class="btn btn-outline-primary mt-3" target="_blank" rel="noopener">Apply Now</a>` : ''}
        `;
        container.appendChild(jobCard);
      });

      observeFadeIns();

    } catch (err) {
      console.error('Error loading jobs:', err);
      container.innerHTML = '<p class="text-danger text-center">Could not load job listings. Please try again later.</p>';
    }
  }

  const appearOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  function observeFadeIns() {
    document.querySelectorAll('.fade-in').forEach(fader => {
      appearOnScroll.observe(fader);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    loadJobs();
    observeFadeIns();
  });