"use client";

import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t flex flex-col md:gap-4 px-8 py-12 items-center">
      <p>{t("footer.message")}</p>
    </footer>
  );
}

export default Footer;
