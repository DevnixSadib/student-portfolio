"use client";

import Reveal from "./Reveal";

interface SectionLabelProps {
  index: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionLabel({
  index,
  title,
  align = "left",
  className = "",
}: SectionLabelProps) {
  return (
    <Reveal
      y={14}
      className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""} ${className}`}
    >
      <span className="text-xs font-bold text-accent">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-accent/50 md:w-12" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
        {title}
      </span>
      {align === "center" && (
        <span aria-hidden="true" className="h-px w-8 bg-accent/50 md:w-12" />
      )}
    </Reveal>
  );
}
