export const setLanguage = (lang: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }
};

export const getLanguage = () => {
  if (typeof window !== "undefined") {
    const savedLang = localStorage.getItem("lang");
    const browserLang = navigator.language;

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
  } else {
    console.log("Failed to detect the initial language"); // If not in a browser environment, default to English
    return "en";
  }
};
