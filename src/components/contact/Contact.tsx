"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

function Contact() {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t flex flex-col gap-4 pb-12">
      <div className="max-w-7xl pt-12 md:px-8">
        <h2 className="font-mono text-2xl md:text-4xl mb-4 sm:mb-8 text-black dark:text-white max-w-4xl">
          {t("contact.title")}
        </h2>
      </div>
      <div className="inline-flex justify-start w-full mx-auto md:px-6">
        <Button
          as="a"
          borderRadius="2.75rem"
          href="mailto:harukikuriwada@gmail.com"
          containerClassName="w-56 md:w-64 h-12 md:h-14"
          className="bg-white dark:bg-slate-900 text-lg text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          {t("contact.text")}
        </Button>
      </div>
    </footer>
  );
}

export default Contact;
