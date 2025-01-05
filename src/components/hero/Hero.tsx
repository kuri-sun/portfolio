"use client";
import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImagesSlider } from "../ui/image-slider";
import { motion } from "framer-motion";

const images = [
  "/images/slider/mt_fuji.png",
  "/images/slider/garic_toast.png",
  "/images/slider/mt_iwate.png",
  "/images/slider/skydiving.png",
  "/images/slider/hakuba.png",
  "/images/slider/kurobe_dam.png",
  // "/images/slider/fire_celebration.png",
];

export function Hero() {
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <div
          id="home"
          className={`flex w-full items-center md:items-start flex-col  mt-16`}
        >
          <div className="flex flex-col w-full items-center md:items-stretch md:gap-0">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 mb-8">
              <h1 className="flex flex-col items-center md:items-stretch">
                <TextGenerateEffect
                  wordClassNames="text-lg md:text-3xl text-neutral-100"
                  words={"Hi, I'm HaRuki Kuriwada 🙂"}
                  delay={0}
                  customDelay={0.15}
                />
                <TextGenerateEffect
                  wordClassNames="text-3xl md:text-5xl text-neutral-100 font-bold"
                  words={"Software Engineer."}
                  delay={700}
                  customDelay={0.15}
                />
              </h1>
            </div>
            {/* Social media */}
            <div className="flex flex-col gap-4">
              <div
                role="list"
                aria-label="my soical media account links"
                className={`flex gap-4 items-center text-white mt-4`}
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
      </motion.div>
    </ImagesSlider>
  );
}
