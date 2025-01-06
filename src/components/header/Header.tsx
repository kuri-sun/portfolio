"use client";

import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import "../../i18/config";
import i18n from "i18next";

function Header() {
  const [isTop, setIsTop] = React.useState(true);

  const onToggleLanguageClick = (newLocale: "en" | "ja") => {
    console.log("newLocale", newLocale);
    i18n.changeLanguage(newLocale);
  };

  useEffect(() => {
    // dark/light
    const html = document.querySelector("html");
    if (html) {
      const isDark = localStorage.getItem("dark");
      if (isDark) {
        html.classList.add("dark");
      }
    }
  }, []);

  useEffect(() => {
    // Header position
    window.onscroll = function () {
      var body = document.body; //IE 'quirks'
      var doc = document.documentElement; //IE with doctype
      doc = doc.clientHeight ? doc : body;

      if (doc.scrollTop == 0) {
        setIsTop(true);
      } else if (isTop) {
        setIsTop(false);
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, [isTop]);

  const onClickLightDarkMode = () => {
    const html = document.querySelector("html");
    if (html) {
      html.classList.toggle("dark");
      localStorage.setItem(
        "dark",
        html.classList.contains("dark") ? "dark" : ""
      );
    }
  };

  return (
    <div
      className={twMerge(
        "z-[100] w-full transition-all duration-1000 px-14 md:px-18 lg:px-24 xl:px-36",
        isTop ? "top-[0px]" : "sticky top-[8px]"
      )}
    >
      <div
        className={twMerge(
          "relative text-lg flex items-center justify-center sm:justify-between w-full rounded-lg bg-white text-black dark:text-white dark:bg-neutral-800 opacity-90 py-2 px-8",
          isTop ? "" : " shadow-xl"
        )}
      >
        <div className="hidden sm:flex flex-row items-center gap-4 ">
          <a
            href="/"
            className="text-xl font-semibold text-black dark:text-neutral-100 opacity-100"
          >
            HaRuki Kuriwada
          </a>
        </div>
        <div className="flex flex-row items-center gap-4">
          {/* lang switcher */}
          <button
            onClick={() =>
              onToggleLanguageClick(i18n.language === "en" ? "ja" : "en")
            }
            className="flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer hover:opacity-75 dark:opacity-75 dark:hover:opacity-100 dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              height={28}
              width={28}
            >
              <path
                d="M0 128C0 92.7 28.7 64 64 64l192 0 48 0 16 0 256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-256 0-16 0-48 0L64 448c-35.3 0-64-28.7-64-64L0 128zm320 0l0 256 256 0 0-256-256 0zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1 73.6 0 8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276l-38 0 19-42.8zM448 164c11 0 20 9 20 20l0 4 44 0 16 0c11 0 20 9 20 20s-9 20-20 20l-2 0-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45L448 228l-72 0c-11 0-20-9-20-20s9-20 20-20l52 0 0-4c0-11 9-20 20-20z"
                fill="currentColor"
              />
            </svg>
          </button>
          {/* light/dark mode */}
          <button
            aria-roledescription="this is dark or light mode switcher."
            onClick={onClickLightDarkMode}
            className="flex items-center justify-center p-3 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer hover:opacity-75 dark:opacity-75 dark:hover:opacity-100 dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              height={20}
              width={20}
            >
              <path
                d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
