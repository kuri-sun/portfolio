"use client";
import React from "react";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { WavyBackground } from "../ui/wavy-background";

export function Hero() {
  return (
    <div
      id="home"
      className={`flex md:h-screen w-full items-center md:items-start flex-col gap-5 text-white`}
    >
      <WavyBackground className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between text-white ">
          {/* Hero section */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col w-full">
              <TextGenerateEffect
                wordClassNames="text-4xl text-black font-bold"
                containerClassName="md:bg-white px-2 py-1"
                words={"Hi, I'm Haruki Kuriwada."}
                delay={0}
                customDelay={0.15}
              />
              <TextGenerateEffect
                wordClassNames="text-4xl text-[#025ed6] md:text-white font-bold"
                containerClassName="md:bg-[#025ed6] px-2 py-1 w-fit"
                words={"Front End Developer"}
                delay={700}
                customDelay={0.15}
              />
            </div>
          </div>
          {/* Avator section */}
          <Image
            src={"/images/avatar.jpg"}
            width={200}
            height={200}
            className="rounded-full"
            alt="my portfolio avatar"
          />
        </div>
        {/* Description */}
        <TextGenerateEffect
          words={
            "Having professional experience in frontend and backend application development with 4 AWS Cloud Certifications. \nCombining all this knowledge, I can tackle problems from various perspectives."
          }
          wordClassNames="text-xl font-normal text-gray-600"
          delay={1500}
          customDelay={0.15}
        />
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
          <button
            aria-roledescription="this is my Twitter account URL."
            onClick={() => {
              window.open("https://twitter.com/HK88395", "_blank");
            }}
          >
            <FontAwesomeIcon
              size="2xl"
              className="hover:scale-110 cursor-pointer transition duration-100"
              icon={faTwitter}
              color={`#1DA1F2`}
            />
          </button>
        </div>
      </WavyBackground>
    </div>
  );
}
