"use client";

import { useEffect } from "react";

export default function VisitTracker({ userId }: { userId: string }) {
  useEffect(() => {
    const start = Date.now();

    const handleUnload = () => {
      const duration = Math.round((Date.now() - start) / 1000);
      navigator.sendBeacon(
        "/api/track-visit",
        JSON.stringify({ userId, duration }),
      );
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [userId]);

  return null;
}
