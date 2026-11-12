"use client";

import { ArrowUpRight, Languages } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { languages, skills } from "@/lib/content";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="relative scroll-mt-24 py-28 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionLabel index="03" title="Skills" />

        <ul className="mt-14 md:mt-20">
          {skills.map((skill, index) => (
            <Reveal
              as="li"
              key={skill}
              delay={index * 0.06}
              y={20}
              className={`group flex items-center justify-between gap-6 border-t border-line py-7 md:py-10 ${
                index === skills.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="flex items-baseline gap-5 md:gap-10">
                <span className="text-xs font-bold tabular-nums text-accent md:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-3xl font-extrabold tracking-tight text-primary transition-colors duration-300 group-hover:text-accent-light md:text-6xl">
                  {skill}
                </span>
              </div>
              <ArrowUpRight
                size={26}
                strokeWidth={1.5}
                aria-hidden="true"
                className="shrink-0 -translate-x-2 translate-y-2 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
              />
            </Reveal>
          ))}
        </ul>

        <div className="mt-16 md:mt-24">
          <div className="flex items-center gap-3">
            <Languages
              size={15}
              strokeWidth={1.75}
              className="text-accent"
              aria-hidden="true"
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
              Languages
            </span>
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-12 md:max-w-2xl">
            {languages.map((language, index) => (
              <Reveal
                key={language}
                delay={index * 0.1}
                className={`flex items-baseline gap-5 ${
                  index > 0 ? "sm:border-l sm:border-line sm:pl-12" : ""
                }`}
              >
                <span className="text-xs font-bold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl font-bold text-primary md:text-4xl">
                  {language}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
