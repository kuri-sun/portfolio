"use client";

import { twMerge } from "tailwind-merge";
import { LinkPreview } from "./link-preview";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={twMerge(
        "rounded-2xl h-full w-full p-4 overflow-hidden border dark:border-neutral-400 border-neutral-800 relative z-20",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  url,
  className,
  children,
}: {
  url?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={twMerge("text-xl font-bold tracking-wide ", className)}>
      <LinkPreview
        url={url || ""}
        className="mt-4 font-semibold text-lg text-indigo-500 underline hover:opacity-80"
      >
        {children}
      </LinkPreview>
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={twMerge(
        "text-base mt-2 tracking-wide leading-relaxed",
        className,
      )}
    >
      {children}
    </p>
  );
};
