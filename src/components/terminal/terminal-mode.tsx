"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { experienceNodes, profile, projects } from "@/lib/data";

type TerminalModeContextValue = {
  enabled: boolean;
  setEnabled: (v: boolean) => void;
};

const TerminalModeContext = createContext<TerminalModeContextValue | null>(
  null,
);

export function useTerminalMode() {
  const ctx = useContext(TerminalModeContext);
  if (!ctx)
    throw new Error("useTerminalMode must be used within TerminalModeProvider");
  return ctx;
}

export function TerminalModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [enabled, setEnabled] = useState(false);
  const value = useMemo(() => ({ enabled, setEnabled }), [enabled]);
  return (
    <TerminalModeContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {enabled && <TerminalPanel onClose={() => setEnabled(false)} />}
      </AnimatePresence>
    </TerminalModeContext.Provider>
  );
}

type Line = { id: string; text: string };

function TerminalPanel({ onClose }: { onClose: () => void }) {
  const [lines, setLines] = useState<Line[]>([
    {
      id: "welcome",
      text: "Type `help` for commands. Click outside header or toggle to hide.",
    },
  ]);
  const [input, setInput] = useState("");

  const pushLine = useCallback((text: string) => {
    setLines((prev) => [...prev, { id: crypto.randomUUID(), text }]);
  }, []);

  const run = useCallback(
    (raw: string) => {
      const cmd = raw.trim().toLowerCase();
      if (!cmd) return;
      pushLine(`> ${raw}`);
      if (cmd === "help" || cmd === "?") {
        pushLine(
          "Commands: help | show projects | show experience | contact | clear | exit",
        );
        return;
      }
      if (cmd === "clear") {
        setLines([]);
        return;
      }
      if (cmd === "exit" || cmd === "quit") {
        onClose();
        return;
      }
      if (cmd === "show projects") {
        projects.forEach((p) => {
          pushLine(`• ${p.name} — ${p.tech.join(", ")}`);
        });
        return;
      }
      if (cmd === "show experience") {
        experienceNodes.forEach((e) => {
          pushLine(`• ${e.title} @ ${e.company} (${e.period})`);
        });
        return;
      }
      if (cmd === "contact") {
        pushLine(`${profile.email}`);
        pushLine(profile.github.href);
        pushLine(`${profile.location} · ${profile.phone}`);
        return;
      }
      pushLine(`command not found: ${raw.trim()}. Try help.`);
    },
    [onClose, pushLine],
  );

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 48, opacity: 0 }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-800 bg-zinc-950/95 shadow-[0_-12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 font-mono text-[10px] text-zinc-500 sm:text-[11px]">
        <div className="flex items-center gap-2 text-zinc-400">
          <TerminalIcon className="h-3.5 w-3.5 text-cyan-500" />
          <span>utkarsh@platform ~ %</span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded border border-zinc-800 px-2 py-0.5 text-zinc-500 hover:text-zinc-300"
        >
          exit
        </button>
      </div>
      <div
        className="mx-auto max-h-[180px] max-w-6xl overflow-y-auto px-4 pb-2 font-mono text-[11px] leading-relaxed text-zinc-300 sm:text-xs"
        role="log"
      >
        {lines.map((l) => (
          <p key={l.id} className="whitespace-pre-wrap">
            {l.text}
          </p>
        ))}
      </div>
      <form
        className="mx-auto flex max-w-6xl gap-2 border-t border-zinc-800/80 px-4 py-3"
        onSubmit={(e) => {
          e.preventDefault();
          run(input);
          setInput("");
        }}
      >
        <span className="shrink-0 font-mono text-xs text-cyan-500/90">❯</span>
        <input
          className="flex-1 bg-transparent font-mono text-xs text-zinc-100 outline-none placeholder:text-zinc-600 sm:text-sm"
          placeholder="try: show projects"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          spellCheck={false}
          aria-label="Terminal command"
        />
      </form>
    </motion.div>
  );
}

export function TerminalModeToggle() {
  const { enabled, setEnabled } = useTerminalMode();
  return (
    <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 py-1 pl-3 pr-1.5">
      <span className="hidden font-mono text-[10px] uppercase tracking-wider text-zinc-500 sm:inline">
        Terminal
      </span>
      <Switch checked={enabled} onCheckedChange={setEnabled} />
    </div>
  );
}
