import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/data";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Ayama11", icon: "github" as const },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aya-almalla", icon: "linkedin" as const }
];

const SKILLS = [
  { title: "AI / ML", desc: "Deep learning, training & evaluation, deployment-ready pipelines", icon: "brain" as const },
  { title: "NLP", desc: "Transformers, Arabic NLP, text classification, Hugging Face", icon: "nlp" as const },
  { title: "Computer Vision", desc: "Detection/segmentation, OpenCV, practical CV systems", icon: "vision" as const },
  { title: "Flutter", desc: "Mobile app development, clean UI, API integration", icon: "mobile" as const }
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="container-max pt-10 pb-14">
        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="card p-7 sm:p-9">
            <div className="text-xs tracking-widest uppercase" style={{ color: "rgb(var(--muted))" }}>
              AI Engineer • Flutter Developer
            </div>

            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
              Building intelligent systems that solve real problems.
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
              I’m Aya Almalla, a fifth-year Information Technology Engineering student specializing in Artificial Intelligence.
              I build end-to-end AI products—from data & modeling to deployment and clean, user-friendly interfaces—and I also develop
              mobile apps using Flutter.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <a key={s.label} className="btn" href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
              <a className="btn btn-primary" href="#contact">Contact</a>
            </div>
          </div>

          {/* HERO IMAGE CARD (اختياري: حطي صورتك/صورة الهيدر) */}
          <div className="card p-4 sm:p-5">
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgb(var(--border))" }}>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop"
                alt="Hero"
                className="w-full h-[320px] sm:h-[380px] object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-4">
              <div className="text-lg font-semibold">Aya Almalla</div>
              <div className="text-sm" style={{ color: "rgb(var(--muted))" }}>AI Engineer</div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">About</h2>
            <span className="text-sm" style={{ color: "rgb(var(--muted))" }}>A quick snapshot</span>
          </div>

          <div className="card mt-4 p-7 sm:p-9">
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
              I’m an AI Engineer focused on building practical ML/NLP/CV systems that can be deployed and used in real workflows.
              My work spans model training and evaluation, building demos (Streamlit), and integrating AI into apps. In parallel,
              I develop cross-platform mobile applications using Flutter, with attention to clean UI and maintainable architecture.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
            <span className="text-sm" style={{ color: "rgb(var(--muted))" }}>Tools & strengths</span>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILLS.map((s) => (
              <div key={s.title} className="card p-6">
                <div className="text-base font-semibold">{s.title}</div>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
            <span className="text-sm" style={{ color: "rgb(var(--muted))" }}>Selected work</span>
          </div>

          {/* كاردات أكبر + مرتبة (مثل ستايل موقع محمد) */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">Contact</h2>
            <span className="text-sm" style={{ color: "rgb(var(--muted))" }}>Let’s connect</span>
          </div>

          <div className="card mt-4 p-7 sm:p-9">
            <p className="text-base sm:text-lg" style={{ color: "rgb(var(--muted))" }}>
              Feel free to reach out for internships, collaborations, or project discussions.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="https://www.linkedin.com/in/aya-almalla" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn" href="https://github.com/Ayama11" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
