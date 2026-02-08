import Link from "next/link";
import type { Project } from "@/lib/data";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.id}`}
      className="card overflow-hidden group block"
      style={{ textDecoration: "none" }}
    >
      <div className="relative">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="w-full h-[220px] sm:h-[260px] object-cover"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
          style={{
            background:
              "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.55) 100%)"
          }}
        />
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center justify-between gap-3">
            <span
              className="pill"
              style={{ color: "rgba(255,255,255,0.9)", borderColor: "rgba(255,255,255,0.18)", background: "rgba(0,0,0,0.25)" }}
            >
              {p.subtitle}
            </span>
            <span
              className="pill"
              style={{ color: "rgba(255,255,255,0.9)", borderColor: "rgba(255,255,255,0.18)", background: "rgba(0,0,0,0.25)" }}
            >
              View →
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
          {p.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
