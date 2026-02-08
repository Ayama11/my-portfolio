import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/data";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Ayama11", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aya-almalla", icon: "linkedin" }
];

const SKILLS = [
  { title: "AI / ML", desc: "Deep Learning, model training, evaluation, deployment-ready pipelines", icon: "brain" },
  { title: "NLP", desc: "Transformers, Arabic NLP, text classification, Hugging Face", icon: "nlp" },
  { title: "Computer Vision", desc: "Detection/segmentation, OpenCV, practical CV systems", icon: "vision" },
  { title: "Flutter", desc: "Mobile app development, clean UI, API integration", icon: "mobile" }
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="container-max pt-8 sm:pt-12">
        {/* HERO */}
        <section className="card p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs sm:text-sm tracking-wide uppercase mb-3" style={{ color: "rgb(var(--muted))" }}>
                AI Engineer • Flutter Developer
              </p>

              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
                Building intelligent systems that solve real problems.
              </h1>

              <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
                I’m Aya Almalla, a final-year Information Technology Engineering student specializing in Artificial Intelligence.
                I build end-to-end AI products — from data and modeling to deployment — and I also develop mobile apps with Flutter.
              </p>

              {/* Social icons (small) */}
              <div className="mt-6 flex items-center gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-btn"
                    aria-label={s.label}
                    title={s.label}
                  >
                    <SocialIcon name={s.icon} />
                  </a>
                ))}

                <a href="#contact" className="btn btn-primary ml-2">
                  Contact
                </a>
              </div>
            </div>

            {/* Hero image card (smaller & modern) */}
            <div className="lg:justify-self-end w-full">
              <div className="card overflow-hidden p-4 sm:p-5">
                <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgb(var(--border))" }}>
                  <img
                    src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1400&auto=format&fit=crop"
                    alt="Tech visual"
                    className="w-full h-[260px] sm:h-[320px] object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="mt-4">
                  <h2 className="text-lg font-semibold">Aya Almalla</h2>
                  <p className="text-sm" style={{ color: "rgb(var(--muted))" }}>
                    AI Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-10 sm:mt-14">
          <div className="card p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About</h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
              I’m an AI Engineer focused on building practical machine learning solutions, with strong experience in NLP and computer vision.
              I enjoy turning real-world problems into deployable systems — from dataset preparation and model training to creating clean, user-friendly demos.
              Alongside AI work, I also build mobile applications using Flutter.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="pill">AI / ML</span>
              <span className="pill">NLP</span>
              <span className="pill">Computer Vision</span>
              <span className="pill">Flutter</span>
              <span className="pill">PyTorch</span>
              <span className="pill">Hugging Face</span>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-10 sm:mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Skills</h2>
              <p className="mt-1 text-sm sm:text-base" style={{ color: "rgb(var(--muted))" }}>
                Tools & strengths I work with
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {SKILLS.map((s) => (
              <div key={s.title} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="skill-icon">
                    <SkillIcon name={s.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS (cards bigger, like Mahmoud-style) */}
        <section id="projects" className="mt-10 sm:mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Projects</h2>
              <p className="mt-1 text-sm sm:text-base" style={{ color: "rgb(var(--muted))" }}>
                Selected work — click a project to view details
              </p>
            </div>
            <a href="#contact" className="btn w-fit">Let’s talk</a>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-10 sm:mt-14 pb-10">
          <div className="card p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-3 text-base sm:text-lg leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
              Want to collaborate, discuss an internship, or ask about my projects?  
              You can reach me through the links below.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <a key={s.label} className="btn" href={s.href} target="_blank" rel="noreferrer">
                  <span className="inline-flex items-center gap-2">
                    <SocialIcon name={s.icon} />
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ---------- Small icons (inline SVG) ---------- */

function SocialIcon({ name }: { name: string }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "currentColor" as const };
  if (name === "github") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.303-5.467-1.334-5.467-5.934 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.554 3.296-1.23 3.296-1.23.654 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.628-5.48 5.926.43.37.815 1.102.815 2.222 0 1.606-.015 2.903-.015 3.293 0 .32.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    );
  }
  // linkedin
  return (
    <svg {...common} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.6 0 4.267 2.368 4.267 5.455v6.288zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM6.813 20.452H3.86V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

function SkillIcon({ name }: { name: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  if (name === "brain") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M8 6a3 3 0 0 1 6 0v1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3v2a3 3 0 0 1-6 0v-1a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3V6z" />
      </svg>
    );
  }
  if (name === "nlp") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M4 4h16v6H4z" />
        <path d="M4 14h10v6H4z" />
        <path d="M18 14v6" />
        <path d="M8 7h8" />
        <path d="M7 17h5" />
      </svg>
    );
  }
  if (name === "vision") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  // mobile
  return (
    <svg {...common} aria-hidden="true">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 19h2" />
    </svg>
  );
}
