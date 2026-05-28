"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type PipelineNodeProps = {
  label: string;
  short: string;
  icon: LucideIcon;
  active?: boolean;
  onSelect: () => void;
};

export function PipelineNodeButton({
  label,
  short,
  icon: Icon,
  active,
  onSelect,
}: PipelineNodeProps) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative flex min-w-[5.5rem] flex-col items-center gap-1 rounded-xl border px-3 py-3 text-left transition-colors sm:min-w-[6.5rem] sm:px-4",
        active
          ? "border-cyan-500/60 bg-cyan-950/40 shadow-[0_0_24px_-4px_rgba(34,211,238,0.35)]"
          : "border-zinc-800 bg-zinc-950/60 hover:border-zinc-600 hover:bg-zinc-900/80",
      )}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-cyan-400 group-hover:border-cyan-500/30">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
        {short}
      </span>
      <span className="text-center text-xs font-medium leading-tight text-zinc-100">
        {label}
      </span>
    </motion.button>
  );
}
