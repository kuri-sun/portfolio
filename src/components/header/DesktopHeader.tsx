"use client";

import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import "../../i18/config";
import i18n from "i18next";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { FloatingDockDesktop } from "../ui/floating-dock";
import { LightIcon } from "../ui/icons/lightIcon";
import { LangIcon } from "../ui/icons/langIcon";
import { setLanguage } from "@/utils/lang";

function DesktopHeader({ className = "" }) {
  const [isTop, setIsTop] = React.useState(true);

  const onToggleLanguageClick = (lang: "en" | "ja") => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

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
        html.classList.contains("dark") ? "dark" : "",
      );
    }
  };

  // Links for the floating dock
  const links = [
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full" />,
      onClick: () =>
        window.open("https://www.linkedin.com/in/harukikuriwada/", "_blank"),
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
        "hidden sm:flex z-[100] w-full sticky top-0",
        className,
      )}
    >
      <div
        className={twMerge(
          "relative text-lg flex items-center justify-center sm:justify-between w-full bg-white text-black dark:text-white dark:bg-neutral-800 h-[64px] py-2 px-14 md:px-18 lg:px-24 xl:px-36 border-b",
        )}
      >
        {/* right */}
        <div className={twMerge("hidden sm:flex flex-row items-center gap-4")}>
          <a
            href="/"
            className="font-mono text-xl font-semibold text-black dark:text-neutral-100 opacity-100 inline-flex items-center gap-2"
          >
            Haruki Kuriwada{" "}
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
