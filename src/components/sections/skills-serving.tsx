"use client";

import { motion } from "framer-motion";
import { skillStack } from "@/lib/data";

export function SkillsServing() {
  return (
    <section
      id="skills"
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
              Skills
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-500">
              Core stack first, then supporting tools.
            </p>
          </header>

          <div className="rounded-xl border border-cyan-800/50 bg-gradient-to-b from-cyan-950/30 to-zinc-950/30 p-5 sm:p-6">
            <p className="font-mono text-[10px] uppercase tracking-wider text-cyan-300/80">Core Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {skillStack.core.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-cyan-700/40 bg-cyan-950/30 px-3 py-1.5 text-sm text-cyan-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/30 p-4">
              <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Secondary Tools</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {skillStack.secondary.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-zinc-700 bg-zinc-900/50 px-2.5 py-1 text-sm text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/30 p-4">
              <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Additional</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {skillStack.additional.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-zinc-800/80 bg-zinc-900/40 px-2 py-1 text-xs text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
