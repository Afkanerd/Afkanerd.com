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

  // ============ Jobs Section 
  async function loadJobs() {
    const sheetId = '1XVzbedERoqGacuFR9UhwqywKN3Px8WRwspEqECkpwzo';
    const sheetName = 'AfknerdJobs';
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

    const container = document.getElementById('jobs-container');
    container.innerHTML = 'Loading jobs...';

    try {
      const response = await fetch(url);
      const text = await response.text();
      const json = JSON.parse(text.substring(47).slice(0, -2));

      const rows = json.table.rows;
      const jobs = rows.map(row => ({
        title: row.c[1]?.v || '',
        location: row.c[2]?.v || '',
        description: row.c[3]?.v || '',
        link: row.c[4]?.v || '',
        requirements: row.c[5]?.v || '',
        responsibilities: row.c[6]?.v || '',
        datePosted: row.c[7]?.v || '',
        salaryRange: row.c[8]?.v || '',
        experienceLevel: row.c[9]?.v || '',
        skills: row.c[10]?.v || ''
      })).filter(job => job.title || job.location || job.description);

      container.innerHTML = '';

      if (jobs.length === 0) {
        container.innerHTML = '<p class="no-jobs">We currently have no job openings. Please check back later.</p>';
        return;
      }

      jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card fade-in';
        jobCard.innerHTML = `
          <h3>${job.title}</h3>
          <p>${job.description}</p>
          <p><strong>Location:</strong> ${job.location}</p>
          ${job.experienceLevel ? `<p><strong>Experience Level:</strong> ${job.experienceLevel}</p>` : ''}
          ${job.salaryRange ? `<p><strong>Salary Range:</strong> ${job.salaryRange}</p>` : ''}
          ${job.skills ? `<p><strong>Skills Needed:</strong> ${job.skills}</p>` : ''}
          ${job.requirements ? `<p><strong>Requirements:</strong> ${job.requirements}</p>` : ''}
          ${job.responsibilities ? `<p><strong>Responsibilities:</strong> ${job.responsibilities}</p>` : ''}
          ${job.link ? `<a href="${job.link}" class="apply-btn" target="_blank" rel="noopener">Apply Now</a>` : ''}
        `;
        container.appendChild(jobCard);
      });

      observeFadeIns();

    } catch (err) {
      console.error('Error loading jobs:', err);
      container.innerHTML = '<p class="no-jobs">Could not load job listings. Please try again later.</p>';
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


  document.querySelectorAll('.hero-subtitle').forEach(el => el.classList.add('fade-in'));


  loadLang(currentLang);
  loadJobs();
  observeFadeIns();
});
