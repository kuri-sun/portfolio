"use client";

import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

function Logs() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8"></div>
          <div className="grid grid-cols-2 gap-4">
            Welcome 2025!
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="mt-4 mb-8">
            I moved back to Japan 🇯🇵 and started to tried a bunch of new things!
            <div className="mt-4">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ I skydrived from 4,000 meters above the ground with my
                coworker/friend.
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ I climbed Mt. Fuji(3,776 m = 12,388 feet) with my college
                friends.
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ I bungee jumped from 100 meters above the ground with my
                coworkers/friends.
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Benchpressed 100kg(220lbs) for 1 rep.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/slider/mt_fuji.png"
              alt="me opening my arms widely during mt fuji climbing"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/slider/skydiving.png"
              alt="the photo of me skydiving"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "~2024",
      content: (
        <div>
          <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            After I guaraduated from the university at 2021, moved to Vancouver,
            Canada, and started working as a Software Engineer. 🇨🇦
            <div className="mt-4">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ 
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div id="changelog" className="w-full border-t">
      <div className="max-w-7xl mx-auto pt-12 md:px-8">
        <h2 className="text-xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          My Life Logs
        </h2>
      </div>

      <Timeline data={data} />
    </div>
  );
}

export default Logs;
