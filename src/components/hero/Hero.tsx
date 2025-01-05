"use client";
import React from "react";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function Hero() {
  return (
    <div
      id="home"
      className={`flex w-full items-center md:items-start flex-col text-white mt-16`}
    >
      {/* <CustomBackground /> */}
      <div className="flex flex-col w-full items-center md:items-stretch gap-8 md:gap-0">
        <div className="flex flex-col md:flex-row items-center justify-between text-white gap-8 md:gap-0">
          <div className="flex flex-col items-center md:items-stretch">
            <TextGenerateEffect
              wordClassNames="text-4xl text-black font-bold text-gray-600"
              containerClassName="md:bg-white px-2 py-1"
              words={"Hi, I'm HaRuki Kuriwada. 🙂"}
              delay={0}
              customDelay={0.15}
            />
            <TextGenerateEffect
              wordClassNames="text-4xl text-[#025ed6] md:text-white font-bold"
              containerClassName="md:bg-[#025ed6] px-2 py-1 w-fit"
              words={"Software Engineer"}
              delay={700}
              customDelay={0.15}
            />
          </div>
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
            className={`flex gap-4 items-center text-black mt-4`}
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
                color={`${"black"}`}
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
                color={`#0a66c2`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
