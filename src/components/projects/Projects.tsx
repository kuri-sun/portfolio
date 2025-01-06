"use client";

import { useTranslation } from "react-i18next";
import { HoverEffectCard } from "../ui/hover-efffect-card";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      title: "NextUI",
      description: t(
        "NextUI is a UI library for React that helps you build beautiful and accessible user interfaces."
      ),
      link: "https://nextui.org",
      // image: "/images/nextui.png",
    },
    {
      title: "SanS UI",
      description: t(
        "SanS is a UI library for boosting your Svelte projects with modular UI components built on Tailwind CSS."
      ),
      link: "https://sans-ui.org",
      // image: "/images/sans-ui.png",
    },
  ];

  return (
    <div id="projects" className="w-full border-t">
      <div className="max-w-7xl pt-12 md:px-8">
        <h2 className="text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          {t("Projects")}
        </h2>
      </div>
      <div className="w-full mx-auto md:px-6">
        <HoverEffectCard items={projects} />
      </div>
    </div>
  );
}
