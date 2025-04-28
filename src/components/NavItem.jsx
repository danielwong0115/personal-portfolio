// app/components/NavItem.jsx
"use client";
import Link from "next/link";

export default function NavItem({ href, label }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-md transition-colors duration-200
                 text-gray-900 dark:text-white
                 hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black"
    >
      {label}
    </Link>
  );
}
