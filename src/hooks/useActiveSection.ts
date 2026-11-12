"use client";

import { useEffect, useState } from "react";

export default function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    for (const element of elements) observer.observe(element);

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
