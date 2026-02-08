export default function Section({
  id,
  title,
  subtitle,
  children
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="section-title">{title}</h2>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
