"use client";

import { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";

const PORTRAIT_SRC = "/images/heroo.jpeg";

interface PortraitProps {
  priority?: boolean;
  className?: string;
}

export default function Portrait({ priority = false, className = "" }: PortraitProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure
      className={`relative aspect-[3/4] w-full overflow-hidden rounded-t-full rounded-b-[1.75rem] border border-line bg-surface ${className}`}
    >
      {failed ? (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center"
          role="img"
          aria-label="Portrait placeholder for Al Amin"
        >
          <span
            aria-hidden="true"
            className="absolute inset-4 rounded-t-full rounded-b-xl border border-dashed border-line"
          />
          <ImageIcon
            size={22}
            strokeWidth={1.5}
            className="text-accent/70"
            aria-hidden="true"
          />
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary">
            Portrait
          </span>
          <span className="text-xs leading-relaxed text-secondary/60">
            Add your photo at
            <br />
            <span className="text-secondary">public/images/heroo.jpeg</span>
          </span>
        </div>
      ) : (
        <Image
          src={PORTRAIT_SRC}
          alt="Portrait of Al Amin"
          fill
          priority={priority}
          sizes="(max-width: 768px) 62vw, 30vw"
          className="object-cover object-top"
          onError={() => setFailed(true)}
        />
      )}
    </figure>
  );
}
