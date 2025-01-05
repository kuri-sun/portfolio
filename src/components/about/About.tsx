"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function About() {
  return (
    <div
      id="home"
      className={`flex w-full items-center md:items-start flex-col gap-8 pt-12 border-t`}
    >
      <div className="flex flex-row gap-8 items-center">
        <h2 className="text-3xl font-semibold">{"About Me ->"}</h2>
        {/* Avator */}
        <Image
          src={"/images/me.jpg"}
          width={100}
          height={100}
          className="w-[100px] h-[100px] rounded-full border-4 border-gray"
          alt="my portfolio (my face image)"
        />
      </div>
      <div className="gap-4 text-xl font-normal ">
        I studied Electrical Engineering at{" "}
        <Link
          href="https://www.iwate-u.ac.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-indigo-500 underline hover:opacity-80"
        >
          Iwate University
        </Link>{" "}
        while playing Division 1 soccer. After college, I moved to Canada, and
        had been working as a Software Engineer over 3 years at several
        startups, including{" "}
        <Link
          href="https://nextui.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-indigo-500 underline hover:opacity-80"
        >
          NextUI
        </Link>{" "}
        which participated in YC summer batch 2024.
        <br />
        <br />
        Afterwards, I came back to Japan and working on Cloud Security Software
        at{" "}
        <Link
          href="https://hennge.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-indigo-500 underline hover:opacity-80"
        >
          HENNGE
        </Link>
        .
        <br />
        <br />
        In my free time, I cook 🧑‍🍳 or go hiking 🥾. Nowadays, I am learning
        Python and Machine Learning.
      </div>
    </div>
  );
}
