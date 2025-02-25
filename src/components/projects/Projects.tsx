"use client";

import { useTranslation } from "react-i18next";
// import ProjectCard from "../ui/card";
import { Card, CardDescription, CardTitle } from "../ui/hover-efffect-card";
import Link from "next/link";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      title: "HeroUI(NextUI)",
      description: t(
        "I participated in the HeroUI projects as a member when the company joined the Y Combinator 2024 batch. (over 1 million+ npm downloads)"
      ),
      link: "https://nextui.org",
    },
    {
      title: "SanS UI",
      description: t(
        "My friend and I created a UI library for Svelte for learning experience!"
      ),
      link: "https://www.sans-ui.org/",
    },
  ];

  return (
    <div id="projects" className="w-full border-t">
      <div className="max-w-7xl pt-12 md:px-8 mb-4 sm:mb-8">
        <h2 className="font-mono text-2xl md:text-4xl text-black dark:text-white max-w-4xl">
          {t("Projects")}
        </h2>
      </div>
      <div className="w-full mx-auto md:px-6">
        {projects.map((item, idx) => (
          <Link
            href={item?.link}
            key={item?.link}
            className="relative group block md:p-2 h-full w-full cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-800 rounded-3xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
