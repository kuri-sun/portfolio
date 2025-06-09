"use client";

import { Trans, useTranslation } from "react-i18next";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { LinkPreview } from "../ui/link-preview";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      title: t("project.nextui.title"),
      description: (
        <Trans
          i18nKey="project.nextui.description"
          components={{
            YCLink: (
              <LinkPreview
                url="https://www.ycombinator.com/"
                className="font-semibold text-indigo-500 underline hover:opacity-80"
              />
            ),
          }}
        />
      ),
      link: "https://nextui.org",
    },
    {
      title: t("project.sansui.title"),
      description: t("project.sansui.description"),
      link: "https://www.sans-ui.org/",
    },
  ];

  return (
    <div id="projects" className="w-full border-t pb-12">
      <div className="max-w-7xl pt-12 mb-16">
        <h2 className="font-mono text-2xl md:text-4xl text-black dark:text-neutral-200 max-w-4xl">
          {t("project.title")}
        </h2>
      </div>
      <div className="w-full flex flex-col gap-4 mx-auto">
        {projects.map((item) => (
          <div
            key={item?.link}
            className="relative block p-4 h-full w-full cursor-pointer transition-all duration-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-3xl"
            rel="noopener noreferrer"
          >
            <Card>
              <CardTitle url={item.link}>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
