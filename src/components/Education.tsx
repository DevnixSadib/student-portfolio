"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { profile } from "@/lib/content";

export default function Education() {
  return (
    <section
      id="education"
      aria-label="Education"
      className="relative scroll-mt-24 overflow-hidden border-y border-line bg-surface py-28 md:py-36"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-4 select-none text-[16rem] font-extrabold leading-none text-primary/[0.04] md:right-10 md:text-[24rem]"
      >
        11
      </span>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center justify-between gap-6">
          <SectionLabel index="02" title="Education" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary/60">
            Currently
          </span>
        </div>

        <Reveal className="mt-16 md:mt-24">
          <h2 className="text-[clamp(3.5rem,11vw,10rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-primary">
            Class <span className="text-accent">11</span>
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-5 border-t border-line pt-8 md:mt-16 md:flex-row md:items-end md:justify-between md:gap-8">
          <Reveal delay={0.1}>
            <p className="text-2xl font-bold text-primary md:text-4xl">
              {profile.group}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary md:text-sm">
              Academic Session {profile.session}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
