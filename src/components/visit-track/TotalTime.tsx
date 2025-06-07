"use client";

import { useEffect, useState } from "react";

export default function TotalTime() {
  const [total, setTotal] = useState({
    totalHours: "0",
    uniqueVisitors: "0",
  });

  useEffect(() => {
    fetch("/api/total-time")
      .then((res) => res.json())
      .then((data) => {
        setTotal(data);
      });
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 text-base text-white">
      <p className="hidden md:block">
        Thank you for visiting 🎉 So far{" "}
        <strong>{total.uniqueVisitors} people</strong> visited this site for{" "}
        <strong>{total.totalHours} hours</strong> in total!
      </p>
      <p className="block md:hidden">
        So far <strong>{total.uniqueVisitors} people</strong> visited for{" "}
        <strong>{total.totalHours} hours</strong>! 🎉
      </p>
    </div>
  );
}
