"use client";

import React from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<"dark" | "light">("dark");

  React.useEffect(() => {
    const saved = (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <button
      onClick={toggle}
      className="btn h-9 w-9 rounded-full px-0"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === "dark" ? "☾" : "☀"}
    </button>
  );
}
