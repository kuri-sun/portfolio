"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { LinkPreview } from "../ui/link-preview";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <div id="home" className="relative flex flex-col items-center w-full">
      {/* Avator */}
      <Image
        // src={"/images/me.jpg"}
        src={"/images/me3.png"}
        width={1000}
        height={1000}
        className="absolute w-[150px] md:w-[200px] h-[150px] md:h-[200px] object-fit rounded-full border-[12px] border-white dark:border-neutral-800 top-[-6rem] md:top-[-6rem]"
        alt="my portfolio (my face image)"
      />
      <div
        className={`flex w-full items-center md:items-start flex-col gap-4 pt-12 border-t md:px-8`}
      >
        <div className="flex flex-col items-center gap-8 justify-center w-full mb-4">
          <h2 className="w-full text-2xl md:text-4xl text-black dark:text-white">
            {t("About Me")}
          </h2>
        </div>
        <div className="gap-4 text-md md:text-lg font-normal ">
          {t("I'm Ruki from Japan. ")}
          {t("I studied Electrical Engineering at ")}
          <LinkPreview
            url="https://www.iwate-u.ac.jp/index.html"
            className="font-semibold text-indigo-500 underline hover:opacity-80"
          >
            {t("Iwate University")}
          </LinkPreview>
          {t(
            " while playing Division 1 soccer. Right after college, I moved to Canada, and had been working as a Software Engineer over 3 years at several startups, including"
          )}
          <LinkPreview
            url="https://nextui.org/"
            className="font-semibold text-indigo-500 underline hover:opacity-80"
          >
            NextUI
          </LinkPreview>
          {t(" which participated in ")}
          <LinkPreview
            url="https://www.ycombinator.com/"
            className="font-semibold text-indigo-500 underline hover:opacity-80"
          >
            YC
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
            "In my free time, I cook or go hiking. Nowadays, I am learning Python and Machine Learning."
          )}
        </div>
      </div>
    </div>
  );
}
