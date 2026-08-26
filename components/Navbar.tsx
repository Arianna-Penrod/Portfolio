"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    return savedTheme ? savedTheme === "dark" : prefersDark;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.documentElement.classList.toggle("light", !isDarkMode);
  }, [isDarkMode]);

  function toggleTheme() {
    const nextMode = !isDarkMode;

    localStorage.setItem("theme", nextMode ? "dark" : "light");
    setIsDarkMode(nextMode);
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-primary backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-lg font-bold tracking-widest text-white transition hover:text-indigo-100 dark:text-indigo-950 dark:hover:text-white"
        >
          Arianna Penrod
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-indigo-100 transition hover:text-white dark:text-indigo-950 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/resume.pdf"
            target="_blank"
            className="rounded-lg border border-indigo-200/40 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-primary-dark dark:border-indigo-950/30 dark:text-indigo-950"
          >
            Resume
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg border border-indigo-200/40 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-primary-dark dark:border-indigo-950/30 dark:text-indigo-950"
            aria-label="Toggle dark mode"
          >
            Theme
          </button>
        </div>
      </div>
    </nav>
  );
}
