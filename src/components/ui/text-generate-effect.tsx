"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cs";

export const TextGenerateEffect = ({
  words,
  delay = 0,
  customDelay = 0.2,
  className,
  wordClassNames,
  containerClassName,
}: {
  words: string;
  delay?: number;
  customDelay?: number;
  className?: string;
  wordClassNames?: string;
  containerClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("animate", delay);
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(customDelay),
        }
      );
    }, delay);

    return () => clearTimeout(timer);
  }, [animate, customDelay, delay]);

  const renderWords = (wordClassNames?: string) => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={
                "dark:text-white text-black opacity-0 " + wordClassNames
              }
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          className={
            "dark:text-white text-black text-2xl leading-snug tracking-wide " +
            containerClassName
          }
        >
          {renderWords(wordClassNames)}
        </div>
      </div>
    </div>
  );
};
