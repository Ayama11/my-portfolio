import Link from "next/link";
import { Project } from "@/lib/data";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link href={`/projects/${p.id}`} className="block">
      <div className="glass shadow-glow rounded-3xl p-5 sm:p-6 transition hover:translate-y-[-2px]">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5 items-start">
          {/* image */}
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-[160px] md:h-[140px] object-cover"
              loading="lazy"
            />
          </div>

          {/* content */}
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-[rgb(var(--muted))] leading-relaxed">
                  {p.short}
                </p>
              </div>

              <span
                className="hidden sm:inline-flex h-10 w-10 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(var(--accent),.9), rgba(var(--accent2),.9))"
                }}
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.slice(0, 7).map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="btn text-xs px-3 py-2">View Details →</span>
              {p.demoUrl ? <span className="btn text-xs px-3 py-2">Demo</span> : null}
              {p.hfUrl ? <span className="btn text-xs px-3 py-2">Hugging Face</span> : null}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
