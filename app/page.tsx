import Header from "@/components/Header";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { projects, links } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* HERO with photo like the reference */}
      <main id="home" className="mx-auto max-w-6xl px-4 sm:px-6 pt-6 sm:pt-10">
        <div className="glass shadow-glow rounded-3xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_.8fr] gap-8 items-center">
            {/* Left: text */}
            <div className="max-w-2xl">
              <p className="chip">AI / ML / NLP / CV</p>

              <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.08]">
                Building intelligent systems that solve real problems.
              </h1>

              <p className="mt-4 text-[rgb(var(--muted))] leading-relaxed">
                I’m Aya Almalla, a fifth-year Information Technology Engineering student specializing in Artificial Intelligence.
                I build end-to-end ML products: from data & modeling to deployment and clean interfaces.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="btn-primary">View Projects</a>
                <a href="#contact" className="btn">Contact</a>
                <a href={links.github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
                <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn">LinkedIn</a>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { k: "4", v: "Projects" },
                  { k: "16", v: "Shifaa Classes" },
                  { k: "0.82", v: "Accuracy" },
                  { k: "0.94", v: "Segmentation Dice" }
                ].map((x) => (
                  <div key={x.v} className="glass rounded-2xl p-4 text-center">
                    <div className="text-xl font-semibold">{x.k}</div>
                    <div className="text-xs text-[rgb(var(--muted))] mt-1">{x.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: photo card */}
            <div className="flex justify-center lg:justify-end">
              <div className="glass shadow-glow rounded-3xl p-4 w-full max-w-sm">
                <div className="relative overflow-hidden rounded-2xl">
                  {/* Replace this image with your own */}
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
                    alt="Profile"
                    className="w-full h-[360px] object-cover"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,.55) 100%)"
                    }}
                  />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="glass rounded-2xl p-3">
                      <div className="font-semibold">Aya Almalla</div>
                      <div className="text-sm text-[rgb(var(--muted))]">
                        AI • NLP • Computer Vision
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="chip">Python</span>
                  <span className="chip">PyTorch</span>
                  <span className="chip">HuggingFace</span>
                  <span className="chip">Streamlit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ABOUT */}
      <Section id="about" title="About" subtitle="A quick snapshot">
        <div className="glass shadow-glow rounded-3xl p-6 sm:p-8">
          <p className="text-[rgb(var(--muted))] leading-relaxed">
            I focus on applied AI projects across NLP and computer vision — building reliable pipelines, training and evaluating models,
            then shipping demos that are easy to test and share. I care about clean code, clear results, and real usability.
          </p>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills" subtitle="Tools & strengths">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Machine Learning", items: ["PyTorch", "scikit-learn", "Model evaluation"] },
            { title: "NLP", items: ["Transformers", "AraBERT", "Text preprocessing"] },
            { title: "Computer Vision", items: ["OpenCV", "YOLOv8", "U-Net segmentation"] },
            { title: "Deployment", items: ["Streamlit", "Hugging Face Hub", "Git/GitHub"] }
          ].map((c) => (
            <div key={c.title} className="glass shadow-glow rounded-2xl p-5">
              <h3 className="font-semibold">{c.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {c.items.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS (no Experience section) */}
      <Section id="projects" title="Projects" subtitle="Selected work">
        <div className="grid grid-cols-1 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact" subtitle="Let’s connect">
        <div className="glass shadow-glow rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[rgb(var(--muted))]">
            Want to collaborate or discuss an internship? Reach me via LinkedIn or GitHub.
          </p>
          <div className="flex gap-3">
            <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
