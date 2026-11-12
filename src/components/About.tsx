"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { interests } from "@/lib/content";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="relative scroll-mt-24 py-28 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <SectionLabel index="01" title="About" />
          </div>
          <div className="md:col-span-9">
            <Reveal
              as="h2"
              className="text-4xl font-extrabold tracking-tight text-primary md:text-6xl"
            >
              A little{" "}
              <span className="font-serif font-normal italic text-accent-light">
                about
              </span>{" "}
              me
              <span className="text-accent">.</span>
            </Reveal>

            <div className="mt-12 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-16">
              <Reveal delay={0.1}>
                <p className="text-lg leading-[1.8] text-secondary md:text-xl">
                  I&apos;m a{" "}
                  <span className="font-medium text-primary">
                    curious and ambitious
                  </span>{" "}
                  student who enjoys learning new things,{" "}
                  <span className="font-medium text-primary">
                    exploring technology
                  </span>
                  , and discovering new experiences. I love taking on
                  challenges, developing new skills, and exploring different
                  perspectives.
                </p>
              </Reveal>
              <Reveal delay={0.22} className="md:mt-20">
                <p className="text-lg leading-[1.8] text-secondary md:text-xl">
                  I believe every day is an opportunity to learn something new,
                  grow as a person, and move one step closer to becoming{" "}
                  <span className="font-serif font-normal italic text-accent-light">
                    the best version of myself
                  </span>
                  .
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-24 border-y border-line py-8 md:mt-32 md:py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
            <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
              Interests
            </span>
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-4">
              {interests.map((interest, index) => (
                <li key={interest} className="flex items-center">
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="mr-7 hidden h-5 w-px bg-line sm:block"
                    />
                  )}
                  <Reveal
                    delay={index * 0.07}
                    y={16}
                    className="cursor-default text-xl font-semibold text-primary/85 transition-colors duration-300 hover:text-accent-light md:text-2xl"
                  >
                    {interest}
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal className="ml-auto mt-20 max-w-xl text-right md:mt-28">
          <span
            aria-hidden="true"
            className="mb-7 ml-auto block h-px w-16 bg-accent"
          />
          <p className="font-serif text-3xl italic leading-[1.25] text-primary md:text-5xl">
            Always learning.
            <br />
            Always becoming.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
