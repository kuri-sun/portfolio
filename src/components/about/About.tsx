"use client";

import Image from "next/image";
import React from "react";
import { LinkPreview } from "../ui/link-preview";
import { useTranslation, Trans } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <div id="home" className="relative flex flex-col items-center w-full pb-12">
      {/* Avator */}
      <div
        className={`flex w-full items-center md:items-start flex-col gap-4 pt-12 leading-loose`}
      >
        <div className="flex flex-row items-center gap-12 justify-start w-full mb-10">
          <h2 className="font-mono text-2xl md:text-4xl text-black dark:text-neutral-200">
            {t("about.title")}
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
        <div>
          <Trans
            i18nKey="about.content"
            components={{
              br: <br />,
              IwateLink: (
                <LinkPreview
                  url="https://www.iwate-u.ac.jp/index.html"
                  className="font-semibold text-indigo-500 underline hover:opacity-80"
                />
              ),
              NextUILink: (
                <LinkPreview
                  url="https://nextui.org/"
                  className="font-semibold text-indigo-500 underline hover:opacity-80"
                />
              ),
              YCLink: (
                <LinkPreview
                  url="https://www.ycombinator.com/"
                  className="font-semibold text-indigo-500 underline hover:opacity-80"
                />
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
}
