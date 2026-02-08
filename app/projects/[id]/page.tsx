import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PROJECTS } from "@/lib/data";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetails({ params }: Props) {
  const { id } = await params;

  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <>
        <Header />
        <main className="container-max pt-10">
          <div className="card p-8">
            <h1 className="text-2xl font-semibold">Project not found</h1>
            <p className="mt-2" style={{ color: "rgb(var(--muted))" }}>
              The requested project does not exist.
            </p>
            <Link href="/#projects" className="btn mt-6">
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const { full } = project;

  return (
    <>
      <Header />
      <main className="container-max pt-8 sm:pt-12">
        <div className="card p-6 sm:p-10">
          <Link href="/#projects" className="btn mb-6 w-fit">
            ← Back
          </Link>

          <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">
            {project.title}
          </h1>
          <p className="mt-2 text-base sm:text-lg" style={{ color: "rgb(var(--muted))" }}>
            {project.description}
          </p>

          <div className="mt-6 rounded-2xl overflow-hidden border" style={{ borderColor: "rgb(var(--border))" }}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[70vh] object-contain bg-black/5"
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            {project.demoUrl && project.demoUrl !== "#" && (
              <a className="btn btn-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
                View Demo
              </a>
            )}
            {project.githubUrl && (
              <a className="btn" href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {project.hfUrl && (
              <a className="btn" href={project.hfUrl} target="_blank" rel="noreferrer">
                Hugging Face
              </a>
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Block title="🧠 Description" items={full.description} />
            <Block title="🎯 Objectives" items={full.objectives} />
            <Block title="🚀 Key Features" items={full.features} />
            <Block title="🧩 Dataset" items={full.dataset} />
            <Block title="📊 Results" items={full.results} />
            <Block title="🛠 Technologies Used" items={full.tech} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card p-5" style={{ boxShadow: "none" }}>
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm" style={{ color: "rgb(var(--muted))" }}>
        {items.map((x, i) => (
          <li key={i} className="flex gap-2">
            <span style={{ color: "rgb(var(--primary))" }}>•</span>
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
