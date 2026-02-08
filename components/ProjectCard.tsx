import Link from "next/link";
import { Project } from "@/lib/data";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link href={`/projects/${p.id}`} className="block">
      <div className="glass shadow-glow rounded-2xl p-5 hover:translate-y-[-2px] transition">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-[rgb(var(--muted))] leading-relaxed">
              {p.short}
            </p>
          </div>
          <div className="h-10 w-10 rounded-xl"
               style={{ background: "linear-gradient(135deg, rgba(var(--accent),.9), rgba(var(--accent2),.9))" }}
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.slice(0, 6).map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
