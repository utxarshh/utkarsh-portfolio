"use client";

import { motion } from "framer-motion";
import { summary } from "@/lib/data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 border-b border-zinc-900/80 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                About
              </h2>
            </div>
            <div className="rounded-lg border border-dashed border-zinc-700 bg-zinc-950/50 px-3 py-2 font-mono text-[10px] text-zinc-500">
              data engineer · snowflake · azure
            </div>
          </header>

          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/30 p-5 sm:p-6">
              <p className="text-sm leading-relaxed text-zinc-300">{summary.body}</p>
            </div>
            <ul className="space-y-3 font-mono text-sm">
              {summary.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-lg border border-zinc-800/80 bg-zinc-900/20 px-4 py-3 text-zinc-400"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-xl border border-zinc-800/60 bg-zinc-950/20 px-5 py-4 font-mono text-xs text-zinc-500">
            <span className="text-zinc-600">education</span>{" "}
            <span className="text-zinc-300">
              B.Tech, Computer Science & Systems Engineering · KIIT University, Bhubaneswar
            </span>
            <span className="block pt-1 text-[11px] text-zinc-600">2020 — 2024 · CGPA 8.42 / 10.0</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
