"use client";

import { useEffect, useState } from "react";

export default function TypewriterHeading({ text, speed = 80 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplayedText(text);
      return;
    }

    let characterIndex = 0;
    const timer = window.setInterval(() => {
      characterIndex += 1;
      setDisplayedText(text.slice(0, characterIndex));

      if (characterIndex === text.length) {
        window.clearInterval(timer);
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [speed, text]);

  return (
    <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-bold text-gray-900 dark:text-white mb-4">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {displayedText}
        <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.08em] animate-pulse bg-current" />
      </span>
    </h1>
  );
}
