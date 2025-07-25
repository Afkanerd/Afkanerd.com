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

            // Adjust page direction for RTL languages like Persian
            if (lang === "fa") {
              document.body.setAttribute("dir", "rtl");
            } else {
              document.body.setAttribute("dir", "ltr");
            }
          })
          .catch(console.error);
      }

      function getTranslationByKey(translations, key) {
        return key.split(".").reduce((acc, part) => acc && acc[part], translations);
      }

      // Load language on startup
      loadLang(currentLang);

      document.querySelectorAll(".translate").forEach((button) => {
        button.addEventListener("click", function () {
          const lang = this.getAttribute("data-lang");
          currentLang = lang;
          localStorage.setItem("lang", lang);
          loadLang(lang);
        });
      });
    });

    // Navbar scroll effect and collapse on link click
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navCollapse = document.querySelector('.navbar-collapse');

    function updateNavbarScrollStyle() {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    }

    window.addEventListener('scroll', updateNavbarScrollStyle);
    window.addEventListener('load', updateNavbarScrollStyle);

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navCollapse, {
            toggle: true,
          });
        }
      });
    });

    // Typing effect
  const text = 'We Code For The People';
const target = document.getElementById('typed-text');
let index = 0;

function typeChar() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(typeChar, 100); // Typing speed
  } else {
    target.classList.add('typed-complete');
  }
}

window.addEventListener('DOMContentLoaded', typeChar);


    // Jobs loader
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
          <div class="col-12 d-flex justify-content-center my-5">
            <div 
              class="d-flex align-items-center gap-4 p-4 rounded-4 shadow-sm border position-relative bg-white"
              style="
                max-width: 600px;
                width: 100%;
                border: 1px solid #e0e0e0;
                background: linear-gradient(to right, #f9f9f9, #ffffff);
                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
              "
            >
              <div 
                class="d-flex justify-content-center align-items-center rounded-circle bg-light text-success" 
                style="width: 50px; height: 50px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"
              >
                <i class="fas fa-info-circle fs-5"></i>
              </div>

              <div class="text-start">
                <h6 class="mb-1 fw-semibold text-dark">No job openings</h6>
                <p class="mb-0 text-muted small">
                  We're not hiring right now. Please check back soon or follow us for updates.
                </p>
              </div>
            </div>
          </div>
          `;
          return;
        }

        jobs.forEach(job => {
          const jobCard = document.createElement('div');
          jobCard.className = 'col-12 job-card fade-in';
          jobCard.innerHTML = `
            <div class="job-card rounded-4 p-4 mb-4 text-white shadow-lg"
              style="
                background: linear-gradient(145deg, rgba(45, 47, 51, 0.39), rgba(22, 59, 73, 0.43));
                border: 1px solid rgba(64, 93, 104, 0.4);
                backdrop-filter: blur(6px);
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
                transition: all 0.3s ease-in-out;
              "
              onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 30px rgba(0,0,0,0.6)'"
              onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 24px rgba(0,0,0,0.5)'"
            >
              <div class="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h5 class="fw-bold mb-1" style="color: #9BE3FF;">
                    <i class="bi bi-briefcase-fill me-1"></i>${job.title}
                  </h5>
                  <span class="small text-light">
                    <i class="bi bi-geo-alt-fill me-1"></i>${job.location}
                  </span>
                </div>
                ${job.salaryRange ? `<span class="badge bg-info bg-opacity-25 text-info border border-info">${job.salaryRange}</span>` : ''}
              </div>
              <p class="mb-3 text-light">${job.description}</p>
              <div class="d-flex flex-wrap gap-2 mb-3">
                ${job.experienceLevel ? `<span class="badge rounded-pill bg-dark border border-light text-light">${job.experienceLevel}</span>` : ''}
                ${job.skills ? `<span class="badge rounded-pill bg-dark border border-light text-light">${job.skills}</span>` : ''}
              </div>
              <div class="small text-light mb-3">
                ${job.requirements ? `<p class="mb-1"><strong>Requirements:</strong> ${job.requirements}</p>` : ''}
                ${job.responsibilities ? `<p class="mb-0"><strong>Responsibilities:</strong> ${job.responsibilities}</p>` : ''}
              </div>
              ${job.link ? `
                <div class="text-end mt-3">
                  <a href="${job.link}" class="btn btn-outline-info btn-sm px-3" target="_blank" rel="noopener">
                    Apply Now →
                  </a>
                </div>` : ''}
            </div>
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
