"use client";

import { IconUser } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function TotalTime() {
  const [totalHours, setTotalHours] = useState("0");

  useEffect(() => {
    fetch("/api/total-time")
      .then((res) => res.json())
      .then((data) => setTotalHours(Number(data.totalHours).toFixed(1)));
  }, []);

  return (
    <div className="flex items-center justify-center gap-1 border rounded-full pl-3 pr-4 py-2">
      <IconUser className="h-5 w-5 text-gray-600 dark:text-gray-400" />
      <div className="text-sm text-center text-gray-800 dark:text-gray-200">
        <span className="">Visiting: </span>
        <span className="text-base font-bold">{totalHours} h</span>
      </div>
    </div>
  );
}
