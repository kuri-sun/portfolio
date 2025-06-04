"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { InfiniteMovingCards } from "../ui/moving-cards";
import { t } from "i18next";
import { LinkPreview } from "../ui/link-preview";

const images2024 = [
  {
    name: "Me opening my arms wide open while climbing Mt. Fuji",
    image: "/images/slider/mt_fuji.png",
  },
  {
    name: "Skydived from 4,000m high in Saitama, Japan",
    image: "/images/slider/skydiving.png",
  },
  {
    name: "Benchpressed 100kg(220lbs) for 1 rep",
    image: "/images/slider/muscle.jpg",
  },
  {
    name: "Bungee jumped from 100m high in Ibaraki, Japan",
    image: "/images/slider/bungee.png",
  },
];

function Logs() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <div className="flex flex-col gap-4 mt-2 mb-8 text-md text-neutral-700 dark:text-neutral-300">
            <p className="md:text-xl">Welcome 2025!</p>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex gap-3 items-start">
                <span>☑️</span>
                <p>
                  {
                    "I'm going to start mix martial arts training at a local dojo."
                  }
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span>☑️</span>
                <p>{"I'm going to learn Machine Learning with Python."}</p>
              </div>
              <div className="flex gap-3 items-start">
                <span>☑️</span>
                <p>
                  {
                    "I'm going to create a UI library for Svelte 5 with my friend."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="flex flex-col gap-4 mt-2 mb-8 text-md text-neutral-700 dark:text-neutral-300">
            <p className="md:text-xl">
              In March 2024, I moved back to Japan 🇯🇵
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex gap-3 items-start">
                <span>✅</span>
                <p>
                  Skydived from 4,000 meters above the ground with my
                  coworker/friend.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span>✅</span>
                <p>
                  Climbed Mt. Fuji(3,776 m = 12,388 feet) with my college
                  friends.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span>✅</span>
                <p>
                  Bungee jumped from 100 meters above the ground with my
                  coworkers/friends.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span>✅</span>
                <p>Benchpressed 100kg(220lbs) for 1 rep.</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <InfiniteMovingCards
              items={images2024}
              direction="right"
              speed="fast"
            />
          </div>
        </div>
      ),
    },
    {
      title: "~2024",
      content: (
        <div>
          <div className="flex flex-col gap-4 mt-2 mb-8 text-md text-neutral-700 dark:text-neutral-300">
            <p className="md:text-xl">
              I moved to Vancouver, and started working as a Software Engineer.
              🇨🇦
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex gap-3 items-start">
                <span>✅</span>
                <p>
                  Experienced startup launch in NextUI as a core team member.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span>✅</span>
                <p>
                  Learned basic web a11y concepts at Carbon Design System as a
                  collaborator.
                </p>
              </div>
              <span className="flex gap-3 items-start">etc...</span>
              <LinkPreview
                url="https://www.linkedin.com/in/harukikuriwada/"
                className="mt-4 font-semibold text-lg text-indigo-500 underline hover:opacity-80"
              >
                {t("See more on my LinkedIn →")}
              </LinkPreview>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div id="changelog" className="w-full border-t">
      <div className="max-w-7xl mx-auto pt-12">
        <h2 className="font-mono text-2xl md:text-4xl text-black dark:text-white">
          {t("Logs")}
        </h2>
      </div>

      <Timeline data={data} />
    </div>
  );
}

export default Logs;
