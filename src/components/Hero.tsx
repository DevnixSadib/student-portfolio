"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Portrait from "./Portrait";
import { profile } from "@/lib/content";
import { EASE, fadeUp, stagger } from "@/lib/motion";

const titleReveal: Variants = {
  hidden: { y: "115%" },
  visible: { y: "0%", transition: { duration: 1.1, ease: EASE } },
};

export default function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[10%] right-[-8%] h-[65vh] w-[50vw] rounded-full bg-accent/[0.06] blur-[130px]"
      />
      <span
        aria-hidden="true"
        className="absolute left-6 top-1/2 hidden -translate-y-1/2 text-[10px] font-semibold uppercase tracking-[0.45em] text-secondary/40 [writing-mode:vertical-rl] lg:block"
      >
        Personal Portfolio — 2026
      </span>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-28 md:px-10">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_clamp(240px,30vw,400px)] lg:gap-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="relative z-10 min-w-0"
          >
            <motion.p
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary md:justify-start md:text-xs"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin
                  size={13}
                  strokeWidth={2}
                  className="text-accent"
                  aria-hidden="true"
                />
                {profile.location}
              </span>
              <span
                aria-hidden="true"
                className="hidden h-3.5 w-px bg-line sm:block"
              />
              <span>Class 11 · Science</span>
              <span
                aria-hidden="true"
                className="hidden h-3.5 w-px bg-line sm:block"
              />
              <span>Session {profile.session}</span>
            </motion.p>

            <h1 className="mt-8 text-center text-[clamp(3.25rem,13vw,12.5rem)] font-extrabold leading-[0.94] tracking-[-0.04em] text-primary md:text-left md:text-[clamp(4rem,8vw,7.5rem)]">
              <span className="inline-block overflow-hidden pb-[0.08em]">
                <motion.span
                  variants={titleReveal}
                  className="block whitespace-nowrap"
                >
                  {profile.name.toUpperCase()}
                  <span className="text-accent" aria-hidden="true">
                    .
                  </span>
                </motion.span>
              </span>
            </h1>

            <motion.h2
              variants={fadeUp}
              className="mx-auto mt-9 max-w-2xl text-center text-[1.7rem] font-medium leading-[1.25] tracking-[-0.01em] text-primary md:mx-0 md:max-w-xl md:text-left md:text-[2.6rem]"
            >
              <span className="block md:inline">
                Curious by{" "}
                <span className="font-serif font-normal italic text-accent-light">
                  nature
                </span>
                .
              </span>{" "}
              <span className="block md:inline">
                Learning by{" "}
                <span className="font-serif font-normal italic text-accent-light">
                  choice
                </span>
                .
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-md text-center text-base leading-relaxed text-secondary md:mx-0 md:text-left md:text-lg"
            >
              {profile.introduction}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-12 w-56 max-w-[62vw] md:hidden"
            >
              <Portrait />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:justify-start"
            >
              <a
                href="#about"
                className="group inline-flex items-center gap-2.5 border-b border-line pb-1.5 text-[13px] font-bold uppercase tracking-[0.18em] text-primary transition-colors duration-300 hover:border-accent hover:text-accent-light"
              >
                About Me
                <ArrowRight
                  size={15}
                  strokeWidth={2.25}
                  className="text-accent transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 border-b border-line pb-1.5 text-[13px] font-bold uppercase tracking-[0.18em] text-primary transition-colors duration-300 hover:border-accent hover:text-accent-light"
              >
                Contact Me
                <ArrowRight
                  size={15}
                  strokeWidth={2.25}
                  className="text-accent transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={
              reducedMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }
            }
            animate={
              reducedMotion ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }
            }
            transition={{ duration: 1.2, delay: 0.55, ease: EASE }}
            className="hidden md:block"
          >
            <Portrait priority />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.9 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-secondary/70">
            Scroll
          </span>
          <span className="relative h-12 w-px overflow-hidden bg-line">
            <motion.span
              className="absolute left-0 top-0 h-1/2 w-px bg-accent"
              animate={reducedMotion ? { y: 0 } : { y: ["-100%", "220%"] }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : {
                      duration: 1.7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 0.35,
                    }
              }
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
