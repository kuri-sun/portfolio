"use client";

import Image from "next/image";
import React from "react";
import { LinkPreview } from "../ui/link-preview";
import { useTranslation } from "react-i18next";
import { InfiniteMovingCards } from "../ui/moving-cards";

export function About() {
  const { t } = useTranslation();

  return (
    <div id="home" className="relative flex flex-col items-center w-full">
      {/* Avator */}
      <div
        className={`flex w-full items-center md:items-start flex-col gap-4 pt-12 leading-loose md:px-8`}
      >
        <div className="flex flex-row items-center gap-12 justify-start w-full mb-4 sm:mb-8">
          <h2 className="font-mono text-2xl md:text-4xl text-black dark:text-white">
            {t("About Me")}
          </h2>
          <Image
            src={"/images/me3.png"}
            priority={true}
            width={1000}
            height={1000}
            className="flex absolute lg:relative w-[150px] lg:w-[100px] h-[150px] lg:h-[100px] object-fit rounded-full border-[12px] lg:border-0 border-white dark:border-neutral-800 top-[-7rem] lg:top-0 left-[-1rem]"
            alt="my portfolio (my face image)"
          />
        </div>
        <div className="gap-4 text-base font-normal">
          {t("I'm Haruki(Ruki) from Japan. ")}
          {t("I studied Electrical Engineering at ")}
          <LinkPreview
            url="https://www.iwate-u.ac.jp/index.html"
            className="font-semibold text-indigo-500 underline hover:opacity-80"
          >
            {t("Iwate University")}
          </LinkPreview>
          {t(
            " while playing Division 1 soccer. Right after college, I moved to Canada, and had been working as a Software Engineer almost 3 years at several startups, including "
          )}
          <LinkPreview
            url="https://nextui.org/"
            className="font-semibold text-indigo-500 underline hover:opacity-80"
          >
            {"HeroUI(NextUI)"}
          </LinkPreview>
          {t(" which participated in ")}
          <LinkPreview
            url="https://www.ycombinator.com/"
            className="font-semibold text-indigo-500 underline hover:opacity-80"
          >
            Y Combinator
          </LinkPreview>
          {t(" summer batch 2024. ")}
          <br />
          <br />
          {t("Afterwards, I came back to Japan and working for ")}
          <LinkPreview
            url="https://hennge.com/"
            className="font-semibold text-indigo-500 underline hover:opacity-80"
          >
            HENNGE
          </LinkPreview>
          {t(" from April 2024.")}
          <br />
          <br />
          {t(
            "In my free time, I go hiking or go Onsen ♨. Nowadays, I am learning Machine Learning."
          )}
        </div>
      </div>
      <div className="rounded-md hidden xl:flex flex-col antialiased bg-white dark:bg-neutral-800 items-center justify-center relative overflow-hidden mt-8">
        <InfiniteMovingCards items={images} direction="right" speed="slow" />
      </div>
    </div>
  );
}

const images = [
  {
    name: "Me opening my arms wide open while climbing Mt. Fuji",
    image: "/images/slider/mt_fuji.png",
  },
  {
    name: "Garic toast that I made",
    image: "/images/slider/garic_toast.png",
  },
  {
    name: "Made it to the top of Mt. Iwate during the winter! It was freezing cold!",
    image: "/images/slider/mt_iwate.png",
  },
  {
    name: "I skydived from 4,000m high in Saitama, Japan",
    image: "/images/slider/skydiving.png",
  },
  {
    name: "The picture when I did hiking with my family in Hakuba, Nagano, Japan. It was a beautiful day!",
    image: "/images/slider/hakuba.png",
  },
  {
    name: "The most famous dam in Japan, which is Kurobe Dam in Toyama, Japan.",
    image: "/images/slider/kurobe_dam.png",
  },
];
