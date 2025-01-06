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
import { FloatingDockMobile } from "../ui/floating-dock";
import { LightIcon } from "../ui/icons/lightIcon";
import { LangIcon } from "../ui/icons/langIcon";

function MobileHeader({ className = "" }) {
  const onToggleLanguageClick = (newLocale: "en" | "ja") => {
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
    <>
      <div
        className={twMerge("fixed left-4 bottom-4 z-[100] w-full", className)}
      >
        <FloatingDockMobile items={links} />
      </div>
    </>
  );
}

export default MobileHeader;
