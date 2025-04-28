"use client";
// import Link from "next/link";
import NavItem from "./NavItem";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <ul className="flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
        <li>
          <NavItem href="/" label="Home" />
        </li>
        <li>
          <NavItem href="/about" label="About" />
        </li>
        <li>
          <NavItem href="/interests" label="Interests" />
        </li>
        <li>
          <NavItem href="/contact" label="Contact" />
        </li>
      </ul>

      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
