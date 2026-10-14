"use client";

import { useEffect, useState } from "react";

export default function TypewriterHeading({ text, speed = 80 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplayedText(text);
      setShowCursor(false);
      return;
    }

    let characterIndex = 0;
    let cursorTimer;
    const timer = window.setInterval(() => {
      characterIndex += 1;
      setDisplayedText(text.slice(0, characterIndex));

      if (characterIndex === text.length) {
        window.clearInterval(timer);
        cursorTimer = window.setTimeout(() => setShowCursor(false), 750);
      }
    }, speed);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(cursorTimer);
    };
  }, [speed, text]);

  return (
    <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-bold text-gray-900 dark:text-white mb-4">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {displayedText}
        {showCursor && (
          <span className="typewriter-cursor ml-1 inline-block h-[0.85em] w-[5px] translate-y-[0.08em] bg-current" />
        )}
      </span>
    </h1>
  );
}
