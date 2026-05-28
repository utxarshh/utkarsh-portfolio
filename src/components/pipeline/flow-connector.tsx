"use client";

import { useId } from "react";
import { motion } from "framer-motion";

type FlowConnectorProps = {
  className?: string;
  direction?: "horizontal" | "vertical";
};

export function FlowConnector({
  className,
  direction = "horizontal",
}: FlowConnectorProps) {
  const gid = useId().replace(/:/g, "");
  const gradId = `flowGrad-${gid}`;
  const isH = direction === "horizontal";
  return (
    <div
      className={`relative flex items-center justify-center ${isH ? "min-h-[2rem] flex-1 min-w-[2rem]" : "min-h-12 w-full"}`}
    >
      <svg
        className={className}
        viewBox={isH ? "0 0 120 24" : "0 0 24 80"}
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(6 182 212 / 0)" />
            <stop offset="50%" stopColor="rgb(6 182 212 / 0.8)" />
            <stop offset="100%" stopColor="rgb(139 92 246 / 0)" />
          </linearGradient>
        </defs>
        {isH ? (
          <motion.line
            x1="4"
            y1="12"
            x2="116"
            y2="12"
            stroke={`url(#${gradId})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 10"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -64 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        ) : (
          <motion.line
            x1="12"
            y1="8"
            x2="12"
            y2="72"
            stroke={`url(#${gradId})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 10"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -64 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        )}
      </svg>
    </div>
  );
}
