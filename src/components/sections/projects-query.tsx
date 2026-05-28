"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FlowConnector } from "@/components/pipeline/flow-connector";
import { projects, type ProjectRow } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectsQuery() {
  const [activeProject, setActiveProject] = useState<ProjectRow>(projects[0]);
  const [detailsOpen, setDetailsOpen] = useState(true);

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 border-b border-zinc-900/80 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <header className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
              Projects
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-500">
              Select a project to explore architecture and implementation details.
            </p>
          </header>

          <div className="mb-4 flex flex-wrap gap-2">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveProject(project)}
                className={cn(
                  "rounded-lg border px-3 py-2 text-xs font-mono transition-colors",
                  activeProject.id === project.id
                    ? "border-cyan-500/50 bg-cyan-950/40 text-cyan-200"
                    : "border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:border-zinc-600",
                )}
              >
                {project.name}
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 sm:p-5">
            <SystemVisual project={activeProject} />

            <button
              type="button"
              onClick={() => setDetailsOpen((p) => !p)}
              className="mt-4 rounded-md border border-zinc-800 bg-zinc-900/40 px-3 py-1.5 font-mono text-[11px] text-zinc-400 hover:border-zinc-600"
            >
              {detailsOpen ? "Hide details" : "Show details"}
            </button>

            <AnimatePresence initial={false}>
              {detailsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 space-y-4 border-t border-zinc-800/80 pt-4">
                    <p className="text-sm text-zinc-400">{activeProject.description}</p>
                    <div>
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                        Architecture
                      </p>
                      <ul className="space-y-1.5 text-sm text-zinc-300">
                        {activeProject.architecture.map((line) => (
                          <li key={line} className="flex gap-2">
                            <span className="text-cyan-500/70">—</span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {activeProject.links && activeProject.links.length > 0 && (
                      <div>
                        <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                          Links
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {activeProject.links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-950/20 px-3 py-1.5 text-xs font-medium text-cyan-200 transition-colors hover:border-cyan-400/50 hover:bg-cyan-950/40"
                            >
                              <ExternalLink className="h-3 w-3" />
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                        Tools
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded border border-zinc-800 bg-zinc-900/60 px-2 py-1 text-xs text-zinc-400"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SystemVisual({ project }: { project: ProjectRow }) {
  if (project.id === "agentic_dbt_librarian") {
    return (
      <div className="rounded-lg border border-zinc-800 bg-black/20 p-4">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-zinc-500">Git Push → Webhook → AI → Pull Request</p>
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <StageBlock label="GitHub Webhook" subtitle="Push event trigger" tone="border-zinc-600/40 bg-zinc-900/30" />
          <FlowConnector className="h-6 w-12" />
          <StageBlock label="n8n Orchestration" subtitle="SQL + manifest fetch" tone="border-cyan-700/40 bg-cyan-950/20" />
          <FlowConnector className="h-6 w-12" />
          <StageBlock label="Gemini AI" subtitle="Impact Prompting" tone="border-violet-700/40 bg-violet-950/20" />
          <FlowConnector className="h-6 w-12" />
          <StageBlock label="GitHub PR" subtitle="Auto-created branch" tone="border-emerald-700/40 bg-emerald-950/20" />
        </div>
      </div>
    );
  }

  if (project.id === "medallion") {
    return (
      <div className="rounded-lg border border-zinc-800 bg-black/20 p-4">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-zinc-500">Bronze → Silver → Gold</p>
        <div className="grid gap-2 sm:grid-cols-3">
          <StageBlock label="Bronze" subtitle="Raw ingestion" tone="border-amber-700/40 bg-amber-950/20" />
          <StageBlock label="Silver" subtitle="Standardized entities" tone="border-slate-600/40 bg-slate-900/30" />
          <StageBlock label="Gold" subtitle="Business marts" tone="border-emerald-700/40 bg-emerald-950/20" />
        </div>
      </div>
    );
  }

  if (project.id === "azure_databricks") {
    return (
      <div className="rounded-lg border border-zinc-800 bg-black/20 p-4">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-zinc-500">Ingestion → Processing → Delta</p>
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <StageBlock label="ADF + ADLS" subtitle="Ingestion" tone="border-cyan-700/40 bg-cyan-950/20" />
          <FlowConnector className="h-6 w-12" />
          <StageBlock label="Databricks" subtitle="PySpark transforms" tone="border-violet-700/40 bg-violet-950/20" />
          <FlowConnector className="h-6 w-12" />
          <StageBlock label="Delta Lake" subtitle="ACID storage" tone="border-emerald-700/40 bg-emerald-950/20" />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-zinc-800 bg-black/20 p-4">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-zinc-500">Cross-cloud movement</p>
      <div className="grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
        <StageBlock label="Azure Blob" subtitle="Source zone" tone="border-cyan-700/40 bg-cyan-950/20" />
        <FlowConnector className="h-6 w-12" />
        <StageBlock label="Airflow" subtitle="Orchestration" tone="border-violet-700/40 bg-violet-950/20" />
        <FlowConnector className="h-6 w-12" />
        <StageBlock label="Snowflake + dbt" subtitle="Warehouse + models" tone="border-emerald-700/40 bg-emerald-950/20" />
      </div>
    </div>
  );
}

function StageBlock({
  label,
  subtitle,
  tone,
}: {
  label: string;
  subtitle: string;
  tone: string;
}) {
  return (
    <div className={cn("rounded-md border p-3", tone)}>
      <p className="text-xs font-semibold text-zinc-100">{label}</p>
      <p className="mt-1 text-[11px] text-zinc-400">{subtitle}</p>
    </div>
  );
}
