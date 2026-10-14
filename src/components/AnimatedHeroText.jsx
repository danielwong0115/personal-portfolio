"use client";

import { useCallback, useEffect, useState } from "react";
import TypewriterHeading from "@/components/TypewriterHeading";

export default function AnimatedHeroText() {
  const [showTagline, setShowTagline] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const revealTagline = useCallback(() => {
    setShowTagline(true);
  }, []);

  useEffect(() => {
    if (!showTagline) {
      return;
    }

    const timer = window.setTimeout(() => setShowWelcome(true), 700);
    return () => window.clearTimeout(timer);
  }, [showTagline]);

  return (
    <>
      <TypewriterHeading
        text="Hi! I'm Daniel Wong"
        onComplete={revealTagline}
      />
      <h3
        className={`text-xl md:text-2xl mb-3 text-gray-800 dark:text-gray-200 ${
          showTagline ? "hero-copy-visible" : "hero-copy-hidden"
        }`}
      >
        Passionate software developer specializing in building exceptional
        digital experiences.
      </h3>
      <p
        className={`text-lg text-gray-700 dark:text-gray-300 ${
          showWelcome ? "hero-copy-visible" : "hero-copy-hidden"
        }`}
      >
        Welcome to my portfolio! Dive in to explore my work!
      </p>
    </>
  );
}
