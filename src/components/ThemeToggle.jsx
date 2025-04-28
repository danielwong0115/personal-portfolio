"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700
                 bg-white dark:bg-gray-800 text-black dark:text-white
                 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
