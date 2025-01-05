"use client";
import Link from "next/link";
import React from "react";

export function About() {
  return (
    <div
      id="home"
      className={`flex w-full items-center md:items-start flex-col text-white gap-8`}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl text-[#025ed6] font-bold">History</h2>
      </div>
      <div className="gap-4 text-lg font-normal text-gray-600">
        I studied Electrical Engineering at{" "}
        <Link
          href="https://www.iwate-u.ac.jp/"
          className="font-semibold text-indigo-500"
        >
          Iwate University
        </Link>{" "}
        while playing Division 1 soccer. After college, I moved to Canada, and
        had been working as a Software Engineer over 3 years at several
        startups, including{" "}
        <Link
          href="https://nextui.org/"
          className="font-semibold text-indigo-500"
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
          className="font-semibold text-indigo-500"
        >
          HENNGE
        </Link>
        .
        <br />
        <br />
        In my free time, I go hiking 🥾. Nowadays, I am learning Python and
        Machine Learning.
      </div>
    </div>
  );
}
