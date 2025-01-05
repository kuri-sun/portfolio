"use client";

import Image from "next/image";
import React from "react";
import { LinkPreview } from "../ui/link-preview";
import { Lens } from "../ui/lens";

export function About() {
  const [hovering, setHovering] = React.useState(false);

  return (
    <div
      id="home"
      className={`flex w-full items-center md:items-start flex-col gap-8 pt-12 border-t md:px-8`}
    >
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="w-full text-2xl md:text-4xl mb-4 text-black dark:text-white">
          About Me
        </h2>
        {/* Avator */}
        {/* <Lens hovering={hovering} setHovering={setHovering}> */}
        <Image
          src={"/images/me.jpg"}
          width={180}
          height={180}
          className="w-[120px] md:w-[180px] h-[120px] md:h-[180px] rounded-full border-4 border-gray"
          alt="my portfolio (my face image)"
        />
        {/* </Lens> */}
      </div>
      <div className="gap-4 text-md md:text-lg font-normal ">
        I studied Electrical Engineering at{" "}
        <LinkPreview
          url="https://www.iwate-u.ac.jp/index.html"
          className="font-semibold text-indigo-500 underline hover:opacity-80"
        >
          Iwate University
        </LinkPreview>{" "}
        while playing Division 1 soccer. Right after college, I moved to Canada,
        and had been working as a Software Engineer over 3 years at several
        startups, including{" "}
        <LinkPreview
          url="https://nextui.org/"
          className="font-semibold text-indigo-500 underline hover:opacity-80"
        >
          NextUI
        </LinkPreview>{" "}
        which participated in{" "}
        <LinkPreview
          url="https://www.ycombinator.com/"
          className="font-semibold text-indigo-500 underline hover:opacity-80"
        >
          YC
        </LinkPreview>{" "}
        summer batch 2024.
        <br />
        <br />
        Afterwards, I came back to Japan and working on Cloud Security Software
        at{" "}
        <LinkPreview
          url="https://hennge.com/"
          className="font-semibold text-indigo-500 underline hover:opacity-80"
        >
          HENNGE
        </LinkPreview>
        .
        <br />
        <br />
        In my free time, I cook 🧑‍🍳 or go hiking 🥾. Nowadays, I am learning
        Python and Machine Learning.
      </div>
    </div>
  );
}
