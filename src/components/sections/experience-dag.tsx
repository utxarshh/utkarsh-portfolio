"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FlowConnector } from "@/components/pipeline/flow-connector";
import {
  experienceDagOrder,
  experienceNodes,
  type ExperienceId,
  type ExperienceNode,
} from "@/lib/data";
import { cn } from "@/lib/utils";

function nodeById(id: ExperienceId): ExperienceNode {
  const n = experienceNodes.find((x) => x.id === id);
  if (!n) throw new Error("unknown experience id");
  return n;
}

export function ExperienceDag() {
  const [expanded, setExpanded] = useState<ExperienceId | null>("tiger");

  return (
    <section
      id="experience"
      className="relative scroll-mt-20 border-b border-zinc-900/80 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <header className="mb-10">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
              Experience
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-500">
              Click each role to inspect the systems I built, key engineering choices, and impact.
            </p>
          </header>

          <div className="mx-auto flex max-w-3xl flex-col">
            {[...experienceDagOrder].reverse().map((id, index) => {
              const n = nodeById(id);
              const isOpen = expanded === id;
              const showConnectorBelow = index < experienceDagOrder.length - 1;

              return (
                <div key={id} className="flex flex-col items-center">
                  <motion.button
                    type="button"
                    onClick={() => setExpanded((prev) => (prev === id ? null : id))}
                    className={cn(
                      "w-full rounded-xl border text-left transition-colors",
                      isOpen
                        ? "border-cyan-500/50 bg-cyan-950/20 shadow-[0_0_28px_-6px_rgba(34,211,238,0.25)]"
                        : "border-zinc-800 bg-zinc-950/40 hover:border-zinc-600",
                    )}
                    whileHover={{ scale: 1.005 }}
                    whileTap={{ scale: 0.995 }}
                  >
                    <div className="flex items-start justify-between gap-3 p-4 sm:p-5">
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-50">{n.company}</h3>
                        <p className="text-sm text-zinc-400">{n.title}</p>
                        <p className="mt-1 text-xs text-violet-400/80">{n.role}</p>
                        <p className="mt-2 font-mono text-xs text-zinc-500">
                          {n.period} · {n.location}
                        </p>
                      </div>
                      <ChevronDown
                        className={cn(
                          "mt-1 h-5 w-5 shrink-0 text-zinc-500 transition-transform",
                          isOpen && "rotate-180",
                        )}
                      />
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28 }}
                          className="overflow-hidden border-t border-zinc-800/80"
                        >
                          <div className="space-y-5 p-4 pt-0 sm:p-5 sm:pt-0">
                            <p className="pt-4 text-sm text-violet-200/90">{n.impact}</p>

                            <ExperienceVisual companyId={n.id} />

                            <div>
                              <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                                Tech
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {n.tech.map((t) => (
                                  <span
                                    key={t}
                                    className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2 py-1 text-xs text-zinc-300"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                                Highlights
                              </p>
                              <ul className="space-y-2 text-sm text-zinc-400">
                                {n.responsibilities.map((r) => (
                                  <li key={r} className="flex gap-2">
                                    <span className="font-mono text-cyan-500/80">→</span>
                                    <span>{r}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  {showConnectorBelow && (
                    <div className="flex w-full max-w-[120px] flex-col items-center py-1">
                      <FlowConnector direction="vertical" className="h-12 w-full" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceVisual({ companyId }: { companyId: ExperienceId }) {
  if (companyId === "tiger") {
    const stages = ["Azure Blob", "Snowflake", "dbt", "Airflow"];
    const highlights = ["Incremental pipelines", "SCD Type 2", "Cost optimization", "Test checks"];

    return (
      <div className="rounded-lg border border-zinc-800 bg-zinc-950/40 p-4">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
          Architecture snapshot
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          {stages.map((stage, index) => (
            <div key={stage} className="flex items-center gap-2">
              <span className="rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1 text-xs text-zinc-200">
                {stage}
              </span>
              {index < stages.length - 1 && <FlowConnector className="h-6 w-10" />}
            </div>
          ))}
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded border border-cyan-900/50 bg-cyan-950/20 px-2 py-1 text-xs text-cyan-200/90"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (companyId === "zenarate") {
    return (
      <div className="rounded-lg border border-zinc-800 bg-zinc-950/40 p-4">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
          Workflow snapshot
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-md border border-zinc-700 bg-zinc-900/60 p-3">
            <p className="font-mono text-[10px] text-zinc-500">Step 1</p>
            <p className="mt-1 text-xs text-zinc-200">SQL + Python workflows</p>
          </div>
          <div className="rounded-md border border-zinc-700 bg-zinc-900/60 p-3">
            <p className="font-mono text-[10px] text-zinc-500">Step 2</p>
            <p className="mt-1 text-xs text-zinc-200">Validation pipelines</p>
          </div>
          <div className="rounded-md border border-zinc-700 bg-zinc-900/60 p-3">
            <p className="font-mono text-[10px] text-zinc-500">Step 3</p>
            <p className="mt-1 text-xs text-zinc-200">Debugging flow + fixes</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-950/40 p-4">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
        Transformation snapshot
      </p>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-md border border-zinc-700 bg-zinc-900/60 p-3">
          <p className="font-mono text-[10px] text-zinc-500">dbt</p>
          <p className="mt-1 text-xs text-zinc-200">Transformations</p>
        </div>
        <div className="rounded-md border border-zinc-700 bg-zinc-900/60 p-3">
          <p className="font-mono text-[10px] text-zinc-500">Macros</p>
          <p className="mt-1 text-xs text-zinc-200">Reusable SQL logic</p>
        </div>
        <div className="rounded-md border border-zinc-700 bg-zinc-900/60 p-3">
          <p className="font-mono text-[10px] text-zinc-500">Modeling</p>
          <p className="mt-1 text-xs text-zinc-200">Facts and dimensions</p>
        </div>
      </div>
    </div>
  );
}
