"use client";

import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import "../../i18/config";
import i18n from "i18next";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
} from "@tabler/icons-react";
import { FloatingDockDesktop } from "../ui/floating-dock";
import { LightIcon } from "../ui/lightIcon";
import { LangIcon } from "../ui/langIcon";

function DesktopHeader({ className = "" }) {
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

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full" />,
      onClick: () => (window.location.href = "/"),
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full" />,
      onClick: () =>
        window.open("https://www.linkedin.com/in/harukikuriwada/", "_blank"),
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full" />,
      onClick: () => window.open("https://x.com/HK88395", "_blank"),
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full" />,
      onClick: () => window.open("https://github.com/kuri-sun", "_blank"),
    },
    {
      title: "LangSwitcher",
      icon: <LangIcon className="h-full w-full" />,
      onClick: () => {
        onToggleLanguageClick(i18n.language === "en" ? "ja" : "en");
      },
    },
    {
      title: "Light/Dark",
      icon: <LightIcon className="h-full w-full" />,
      onClick: () => {
        onClickLightDarkMode();
      },
    },
  ];

  return (
    <div
      className={twMerge(
        "hidden sm:flex z-[100] w-full transition-all duration-1000 px-14 md:px-18 lg:px-24 xl:px-36",
        isTop ? "top-[0px]" : "sticky top-[16px]",
        className
      )}
    >
      <div
        className={twMerge(
          "relative text-lg flex items-center justify-center sm:justify-between w-full rounded-lg bg-white text-black dark:text-white dark:bg-neutral-800 opacity-90 py-2 px-8",
          isTop ? "" : "shadow-xl"
        )}
      >
        {/* right */}
        <div
          className={twMerge(
            "hidden sm:flex flex-row items-center gap-4 transition-all duration-1000 "
          )}
        >
          <a
            href="/"
            className="text-xl font-semibold text-black dark:text-neutral-100 opacity-100"
          >
            HaRuki Kuriwada
          </a>
        </div>
        {/* center */}
        <div className={"sm:flex"}>
          <FloatingDockDesktop items={links} />
        </div>
      </div>
    </div>
  );
}

export default DesktopHeader;
