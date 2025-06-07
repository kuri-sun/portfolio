"use client";

import { useEffect } from "react";

export default function VisitTracker() {
  useEffect(() => {
    // Generate or retrieve visitor ID
    let visitorId = localStorage.getItem("visitorId");
    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem("visitorId", visitorId);
    }

    const start = Date.now();

    const handleUnload = () => {
      const duration = Math.round((Date.now() - start) / 1000); // seconds

      navigator.sendBeacon(
        "/api/track-visit",
        JSON.stringify({ userId: visitorId, duration }),
      );
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  return null;
}
