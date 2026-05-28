"use client";

import { useMemo, useState } from "react";
import {
  BarChart2,
  Box,
  Cloud,
  Database,
  Wind,
} from "lucide-react";
import { motion } from "framer-motion";
import { FlowConnector } from "@/components/pipeline/flow-connector";
import { PipelineNodeButton } from "@/components/pipeline/pipeline-node";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { profile, pipelineNodes, type PipelineNode } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap = {
  azure_blob: Cloud,
  snowflake: Database,
  dbt: Box,
  airflow: Wind,
  bi: BarChart2,
} as const;

export function HeroPipeline() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<PipelineNode | null>(null);

  const nodes = useMemo(
    () =>
      pipelineNodes.map((n) => ({
        ...n,
        Icon: iconMap[n.id],
      })),
    [],
  );

  return (
    <section
      id="landing"
      className="relative border-b border-zinc-900/80 px-4 pb-20 pt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 font-mono text-sm text-violet-300/90">
            {profile.title}
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            {profile.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="rounded-2xl border border-zinc-800/90 bg-zinc-950/40 p-4 backdrop-blur-sm sm:p-6"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-4 font-mono text-[11px] text-zinc-500">
            <span className="text-zinc-400">pipeline.dag</span>
            <span className="rounded border border-zinc-800 bg-zinc-900/80 px-2 py-0.5 text-cyan-400/90">
              live
            </span>
          </div>

          {/* Mobile: stack with vertical connectors */}
          <div className="flex flex-col gap-2 md:hidden">
            {nodes.map((n, i) => (
              <div key={n.id}>
                <PipelineNodeButton
                  label={n.label}
                  short={n.short}
                  icon={n.Icon}
                  active={selected?.id === n.id}
                  onSelect={() => {
                    setSelected(n);
                    setOpen(true);
                  }}
                />
                {i < nodes.length - 1 && (
                  <FlowConnector direction="vertical" className="h-10 w-full" />
                )}
              </div>
            ))}
          </div>

          {/* Desktop: horizontal flow */}
          <div className="hidden flex-wrap items-stretch justify-center gap-0 md:flex md:flex-nowrap">
            {nodes.map((n, i) => (
              <div key={n.id} className="flex flex-1 items-center gap-0">
                <PipelineNodeButton
                  label={n.label}
                  short={n.short}
                  icon={n.Icon}
                  active={selected?.id === n.id}
                  onSelect={() => {
                    setSelected(n);
                    setOpen(true);
                  }}
                />
                {i < nodes.length - 1 && (
                  <FlowConnector className="h-8 w-full min-w-[2rem]" />
                )}
              </div>
            ))}
          </div>

          <p className="mt-5 font-mono text-[11px] leading-relaxed text-zinc-500">
            Click any stage to inspect tools and how they fit the stack. Flow:{" "}
            <span className="text-zinc-400">
              Sources → Snowflake → dbt → Airflow → BI
            </span>
          </p>
        </motion.div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={cn(
            "max-w-md border-zinc-800 bg-zinc-950/95",
            selected && "font-mono",
          )}
          onPointerDownOutside={() => setSelected(null)}
        >
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.label}</DialogTitle>
                <DialogDescription className="font-sans">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-2 border-t border-zinc-800/80 pt-4">
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Tools & concepts
                </p>
                <ul className="flex flex-wrap gap-2">
                  {selected.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2 py-1 text-xs text-cyan-200/90"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
