"use client";

import React from "react";
import { ImagesSlider } from "../ui/image-slider";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const images = [
  "/images/slider/mt_fuji.png",
  "/images/slider/skydiving.png",
  "/images/slider/fire.png",
  "/images/slider/airsoft.jpg",
];

function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <ImagesSlider className="flex lg:hidden h-[38rem]" images={images}>
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
            className={`flex w-full items-center md:items-start flex-col mt-16 `}
          >
            <div className="flex flex-col w-full items-center md:items-stretch md:gap-0">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 mb-8">
                <h1 className="flex flex-col gap-6 items-center md:items-stretch">
                  <span className="text-center text-5xl md:text-6xl text-neutral-100 font-bold">
                    [Who am I?]
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </motion.div>
      </ImagesSlider>
    </>
  );
}

export default Hero;
