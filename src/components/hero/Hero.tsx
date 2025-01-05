"use client";
import React from "react";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Hero() {
  return (
    <div
      id="home"
      className={`flex w-full items-center md:items-start flex-col  mt-16`}
    >
      <div className="flex flex-col w-full items-center md:items-stretch gap-8 md:gap-0">
        <div className="flex flex-col md:flex-row items-center justify-between  gap-8 md:gap-0">
          <h1 className="flex flex-col items-center md:items-stretch">
            <TextGenerateEffect
              wordClassNames="text-lg md:text-3xl text-gray-600 dark:text-neutral-100"
              words={"Hi, I'm HaRuki Kuriwada. 🙂"}
              delay={0}
              customDelay={0.15}
            />
            <TextGenerateEffect
              wordClassNames="text-xl md:text-3xl text-[#025ed6] font-bold"
              words={"Software Engineer"}
              delay={700}
              customDelay={0.15}
            />
          </h1>
          {/* Avator */}
          <Image
            src={"/images/avatar.png"}
            width={200}
            height={200}
            className="rounded-full border-4 border-gray"
            alt="my portfolio avatar"
          />
        </div>
        <div className="flex flex-col gap-4">
          {/* Social media */}
          <div
            role="list"
            aria-label="my soical media account links"
            className={`flex gap-4 items-center text-black dark:text-white mt-4`}
          >
            <button
              aria-roledescription="this is my GitHub account URL."
              onClick={() => {
                window.open("https://github.com/kuri-sun", "_blank");
              }}
            >
              <FontAwesomeIcon
                size="2xl"
                className=" hover:scale-110 cursor-pointer transition duration-100"
                icon={faGithub}
                aria-label="A GitHub icon nested within the button"
              />
            </button>
            <button
              aria-roledescription="this is my LinkedIn account URL."
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/harukikuriwada/",
                  "_blank"
                );
              }}
            >
              <FontAwesomeIcon
                size="2xl"
                className="hover:scale-110 cursor-pointer transition duration-100"
                icon={faLinkedinIn}
                aria-label="A LinkedIn icon nested within the button"
              />
            </button>
            <button
              aria-roledescription="this is my X account URL."
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/harukikuriwada/",
                  "_blank"
                );
              }}
            >
              <FontAwesomeIcon
                size="2xl"
                className="hover:scale-110 cursor-pointer transition duration-100"
                icon={faXTwitter}
                aria-label="A X icon nested within the button"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
