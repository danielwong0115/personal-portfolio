"use client";
// import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Daniel Wong. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              href="mailto:danielwong2026@u.northwestern.edu"
              className="hover:underline"
            >
              Email
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dl-wong/"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dl-wong/"
              className="hover:underline"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
