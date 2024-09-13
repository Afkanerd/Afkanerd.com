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
