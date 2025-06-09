"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { LinkPreview } from "../ui/link-preview";
import { useTranslation } from "react-i18next";

const images2024 = [
  {
    name: "Me opening my arms wide open while climbing Mt. Fuji",
    image: "/images/slider/mt_fuji.png",
  },
  {
    name: "Skydived from 4,000m high in Saitama, Japan",
    image: "/images/slider/skydiving.png",
  },
  {
    name: "Benchpressed 100kg(220lbs) for 1 rep",
    image: "/images/slider/muscle.jpg",
  },
  {
    name: "Bungee jumped from 100m high in Ibaraki, Japan",
    image: "/images/slider/bungee.png",
  },
];

function Logs() {
  const { t } = useTranslation();

  const data = [
    {
      title: "2025",
      content: (
        <div>
          <div className="flex flex-col gap-4 mt-2 mb-8 text-md text-neutral-700 dark:text-neutral-300">
            <p className="md:text-xl">{t("logs.content.2025.title")}</p>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex gap-3 items-start">
                <span>☑️</span>
                <p>{t("logs.content.2025.text1")}</p>
              </div>
              <div className="flex gap-3 items-start">
                <span>☑️</span>
                <p>{t("logs.content.2025.text2")}</p>
              </div>
              <div className="flex gap-3 items-start">
                <span>☑️</span>
                <p>{t("logs.content.2025.text3")}</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="flex flex-col gap-4 mt-2 mb-8 text-md text-neutral-700 dark:text-neutral-300">
            <p className="md:text-xl">{t("logs.content.2024.title")}</p>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex gap-3 items-start">
                <span>✅</span>
                <p>{t("logs.content.2024.text1")}</p>
              </div>
              <div className="flex gap-3 items-start">
                <span>✅</span>
                <p>{t("logs.content.2024.text2")}</p>
              </div>
              <div className="flex gap-3 items-start">
                <span>✅</span>
                <p>{t("logs.content.2024.text3")}</p>
              </div>
              <div className="flex gap-3 items-start">
                <span>✅</span>
                <p>{t("logs.content.2024.text4")}</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <InfiniteMovingCards
              items={images2024}
              direction="right"
              speed="fast"
            />
          </div>
        </div>
      ),
    },
    {
      title: "~2024",
      content: (
        <div>
          <div className="flex flex-col gap-4 mt-2 mb-8 text-md text-neutral-700 dark:text-neutral-300">
            <p className="md:text-xl">{t("logs.content.before2024.title")}</p>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex gap-3 items-start">
                <span>✅</span>
                <p>{t("logs.content.before2024.text1")}</p>
              </div>
              <div className="flex gap-3 items-start">
                <span>✅</span>
                <p>{t("logs.content.before2024.text2")}</p>
              </div>
              <span className="flex gap-3 items-start">etc...</span>
              <LinkPreview
                url="https://www.linkedin.com/in/harukikuriwada/"
                className="mt-4 font-semibold text-lg text-indigo-500 underline hover:opacity-80"
              >
                {t("logs.content.before2024.see_more")}
              </LinkPreview>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="changelog" className="w-full border-t">
      <div className="max-w-7xl mx-auto pt-12">
        <h2 className="font-mono text-2xl md:text-4xl text-black dark:text-neutral-200">
          {t("logs.title")}
        </h2>
      </div>

      <Timeline data={data} />
    </div>
  );
}

export default Logs;
