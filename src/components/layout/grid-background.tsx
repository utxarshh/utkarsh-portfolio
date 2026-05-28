import { cn } from "@/lib/utils";

export function GridBackground({ className }: { className?: string }) {
  const nodes = [
    { top: "14%", left: "12%", delay: "0s" },
    { top: "28%", left: "74%", delay: "1.5s" },
    { top: "48%", left: "36%", delay: "0.8s" },
    { top: "68%", left: "84%", delay: "2.2s" },
    { top: "82%", left: "18%", delay: "1.1s" },
  ];

  return (
    <div
      className={cn("pointer-events-none fixed inset-0 z-0 overflow-hidden", className)}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(39 39 42 / 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(39 39 42 / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="bg-flow-scan absolute inset-0 opacity-65" />
      <div className="bg-orbital-ring absolute -left-20 top-12 h-[420px] w-[420px] rounded-full border border-cyan-500/15" />
      <div className="bg-orbital-ring absolute -right-16 bottom-16 h-[360px] w-[360px] rounded-full border border-violet-500/15 [animation-delay:2s]" />
      {nodes.map((node) => (
        <span
          key={`${node.top}-${node.left}`}
          className="bg-node absolute h-2 w-2 rounded-full bg-cyan-300/80 shadow-[0_0_14px_rgba(34,211,238,0.5)]"
          style={{ top: node.top, left: node.left, animationDelay: node.delay }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
      <div className="absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-1/4 bottom-0 h-[380px] w-[380px] rounded-full bg-violet-500/10 blur-[120px]" />
    </div>
  );
}
