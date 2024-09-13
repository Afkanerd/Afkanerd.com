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
              if (key === "hero.title") {
                element.innerHTML = translation.replace("AFKANERD", "AFKANERD");
              } else {
                element.textContent = translation;
              }
            }
          });
  
          if (lang === "fa") {
            document.documentElement.setAttribute("dir", "rtl");
          } else {
            document.documentElement.setAttribute("dir", "ltr");
          }
        });
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
  
    loadLang(currentLang);
  });
  