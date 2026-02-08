import ThemeToggle from "./ThemeToggle";
import { links } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3">
        <div className="glass shadow-glow rounded-2xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <span className="inline-block h-2 w-2 rounded-full"
              style={{ background: "rgba(var(--accent),1)" }}
            />
            Aya Almalla
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-[rgb(var(--muted))]">
            <a className="hover:text-[rgb(var(--text))]" href="#about">About</a>
            <a className="hover:text-[rgb(var(--text))]" href="#skills">Skills</a>
            <a className="hover:text-[rgb(var(--text))]" href="#experience">Experience</a>
            <a className="hover:text-[rgb(var(--text))]" href="#projects">Projects</a>
            <a className="hover:text-[rgb(var(--text))]" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a className="btn hidden sm:inline-flex" href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn hidden sm:inline-flex" href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
