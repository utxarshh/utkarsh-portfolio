"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TerminalModeToggle } from "@/components/terminal/terminal-mode";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "sticky top-0 z-40 border-b border-transparent px-4 py-3 backdrop-blur-md transition-colors sm:px-6",
        scrolled && "border-zinc-800/80 bg-zinc-950/85",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <a href="#landing" className="group flex flex-col leading-tight">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 transition-colors group-hover:text-cyan-500/80">
            portfolio
          </span>
          <span className="text-sm font-semibold text-zinc-100">
            {profile.name.split(" ")[0]}
            <span className="text-zinc-600">.</span>
            <span className="font-mono text-cyan-400/90">io</span>
          </span>
        </a>

        <nav className="flex max-w-[min(52vw,14rem)] items-center gap-0.5 overflow-x-auto md:max-w-none md:gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="shrink-0 rounded-md px-2 py-1.5 font-mono text-[10px] text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-zinc-200 sm:text-[11px]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-zinc-200"
            aria-label="GitHub"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <TerminalModeToggle />
        </div>
      </div>
    </motion.header>
  );
}

