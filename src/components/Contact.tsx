"use client";

import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./icons";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { profile, socials, type Social } from "@/lib/content";

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
} as const;

type SocialLink = Social & { icon: keyof typeof socialIcons };

export default function Contact() {
  const socialLinks = socials.filter(
    (social): social is SocialLink =>
      social.icon === "facebook" || social.icon === "instagram"
  );

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative scroll-mt-24 overflow-hidden pt-28 pb-8 md:pt-44"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[10%] h-[45vh] w-[70vw] -translate-x-1/2 rounded-full bg-accent/[0.05] blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <SectionLabel index="04" title="Contact" align="center" />

          <Reveal
            as="h2"
            delay={0.05}
            className="mt-10 text-[clamp(3rem,9vw,8rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-primary"
          >
            Let&apos;s{" "}
            <span className="font-serif font-normal italic text-accent-light">
              connect
            </span>
            <span className="text-accent">.</span>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 md:mt-14">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 border-b border-line pb-2 text-lg font-semibold text-primary transition-colors duration-300 hover:border-accent hover:text-accent-light md:text-2xl"
            >
              <Mail
                size={20}
                strokeWidth={1.75}
                className="text-accent"
                aria-hidden="true"
              />
              {profile.email}
            </a>
          </Reveal>

          <Reveal
            delay={0.22}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-3 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-primary transition-colors duration-300 hover:border-accent/60 hover:text-accent-light"
                >
                  {Icon && (
                    <Icon
                      size={16}
                      strokeWidth={1.75}
                      className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5"
                    />
                  )}
                  {social.label}
                  <ArrowUpRight
                    size={14}
                    strokeWidth={2}
                    className="text-secondary transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-accent-light"
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </Reveal>
        </div>

        <footer className="mt-24 border-t border-line pt-8 md:mt-32">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs tracking-wide text-secondary md:text-sm">
              Designed with curiosity. © 2026 Al Amin.
            </p>
            <a
              href="#home"
              className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary transition-colors duration-300 hover:text-accent-light"
            >
              Back to top
              <ArrowUp
                size={14}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
