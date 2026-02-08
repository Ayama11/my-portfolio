export default function Footer() {
  return (
    <footer className="py-10">
      <div className="container-max text-center text-sm" style={{ color: "rgb(var(--muted))" }}>
        Designed by Aya Almalla © {new Date().getFullYear()} • All rights reserved.
      </div>
    </footer>
  );
}
