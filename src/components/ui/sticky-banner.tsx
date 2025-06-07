"use client";
import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { twMerge } from "tailwind-merge";
import { IconX } from "@tabler/icons-react";

export const StickyBanner = ({
  className,
  children,
  hideOnScroll = false,
}: {
  className?: string;
  children: React.ReactNode;
  hideOnScroll?: boolean;
}) => {
  const [open, setOpen] = useState(true);
  const [isCloseClicked, setIsCloseClicked] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isCloseClicked) return;
    if (hideOnScroll && latest > 40) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  });

  const handleClose = () => {
    setOpen(false);
    setIsCloseClicked(true);
  };

  return (
    <motion.div
      className={twMerge(
        "sticky inset-x-0 top-0 z-50 flex items-center min-h-14 w-full justify-between bg-transparent px-4 py-1",
        className,
      )}
      initial={{
        y: -100,
        opacity: 1,
      }}
      animate={{
        y: open ? 0 : -100,
        display: open ? "flex" : "none",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div />

      {children}

      <motion.button
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        onClick={handleClose}
        className="flex md:hidden hover:bg-blue-400 p-2 rounded-full transition-colors duration-300 bg-blue-500 items-center justify-center"
      >
        <IconX className="text-white font-bold" />
      </motion.button>
      <div className="hidden md:flex" />
    </motion.div>
  );
};
