"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

function Contact() {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t flex flex-col gap-8">
      <div className="max-w-7xl pt-12 md:px-8">
        <h2 className="text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          {t("Contact")}
        </h2>
        <p>
          {t(
            "If you have some interesting idea, feel free to reach out to me."
          )}
        </p>
      </div>
      <div className="inline-flex justify-start w-full mx-auto md:px-6">
        <Button
          as="a"
          borderRadius="2.75rem"
          href="mailto:harukikuriwada@gmail.com"
          containerClassName="w-44 md:w-52 h-10 md:h-14"
          className="bg-white dark:bg-slate-900 md:text-lg text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          {t("Contact with Him")}
        </Button>
      </div>
    </footer>
  );
}

export default Contact;
