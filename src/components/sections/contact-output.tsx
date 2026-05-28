"use client";

import { motion } from "framer-motion";
import { FolderGit2, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

export function ContactOutput() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950/90 via-zinc-950/40 to-violet-950/20 p-6 sm:p-10"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">Contact</h2>
          <p className="mt-2 max-w-lg text-sm text-zinc-400">
            Reach out for data platform engineering, Snowflake + dbt builds, or end-to-end Azure data workflows.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 font-mono text-sm text-cyan-200/90 transition-colors hover:border-cyan-500/40 hover:bg-cyan-950/20"
            >
              <Mail className="h-4 w-4 text-cyan-500" />
              {profile.email}
            </a>
            <a
              href={profile.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 font-mono text-sm text-zinc-300 transition-colors hover:border-zinc-600"
            >
              <FolderGit2 className="h-4 w-4" />
              {profile.github.label}
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 font-mono text-xs text-zinc-600">
            <MapPin className="h-3.5 w-3.5" />
            {profile.location} · {profile.phone}
          </p>
        </motion.div>

        <p className="mt-10 text-center font-mono text-[11px] text-zinc-600">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript, and Framer Motion.
        </p>
      </div>
    </section>
  );
}
