"use client";

import Image from "next/image";
import React from "react";
import { LinkPreview } from "../ui/link-preview";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <div id="home" className="relative flex flex-col items-center w-full pb-12">
      {/* Avator */}
      <div
        className={`flex w-full items-center md:items-start flex-col gap-4 pt-12 leading-loose`}
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
          {t("I'm Ruki from Japan. ")}
          <br />
          {t("I studied Electrical Engineering at ")}
          <LinkPreview
            url="https://www.iwate-u.ac.jp/index.html"
            className="font-semibold text-indigo-500 underline hover:opacity-80"
          >
            {t("Iwate University")}
          </LinkPreview>
          {t(
            " while playing Division 1 soccer. Right after college, I moved to Canada, and had been working as a Software Engineer almost 3 years at several startups, including ",
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
          {t("In my free time, I go hiking or go Onsen.")}
        </div>
      </div>
    </div>
  );
}
