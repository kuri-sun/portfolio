"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { FloatingDockDesktop } from "../ui/floating-dock";

function Footer() {
  const { t } = useTranslation();

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
  ];

  return (
    <footer className="w-full border-t flex flex-col gap-8 p-8 items-center">
      <div className="flex ">
        <FloatingDockDesktop items={links} />
      </div>
      <p>{t("This website is Open Source 😊")}</p>
    </footer>
  );
}

export default Footer;
