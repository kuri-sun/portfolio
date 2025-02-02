"use client";

import { useTranslation } from "react-i18next";
// import ProjectCard from "../ui/card";
import { Card, CardDescription, CardTitle } from "../ui/hover-efffect-card";
import Link from "next/link";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      title: "NextUI",
      description: t(
        "NextUI is a modern React UI component library trusted by developers worldwide, with over 1 million downloads on npm. Offering more than 50+ customizable and accessible components."
      ),
      link: "https://nextui.org",
      // image: "/images/nextui.png",
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
