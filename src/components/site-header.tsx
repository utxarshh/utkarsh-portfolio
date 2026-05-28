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
          <TerminalModeToggle />
        </div>
      </div>
    </motion.header>
  );
}
