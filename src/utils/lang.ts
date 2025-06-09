export const setLanguage = (lang: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }
};

export const getLanguage = () => {
  const savedLang = localStorage.getItem("lang");
  const browserLang = navigator.language;
  if (typeof window !== "undefined") {
    if (savedLang) {
      return savedLang;
    }

    const lang = browserLang.split("-")[0]; // Get the language part before the hyphen
    if (lang === "ja" || lang === "en") {
      localStorage.setItem("lang", lang);
      return lang;
    } else {
      return "en";
    }
  }
  return "en";
};
