import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { SOCIALS } from "@/lib/data";
import { IconGithub, IconLinkedIn } from "@/components/icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="container-max pt-4">
        <div className="card px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            Aya Almalla
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: "rgb(var(--muted))" }}>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#skills" className="hover:opacity-80">Skills</a>
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a className="btn w-10 h-10 p-0" href={SOCIALS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <IconGithub className="h-5 w-5" />
            </a>
            <a className="btn w-10 h-10 p-0" href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <IconLinkedIn className="h-5 w-5" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
