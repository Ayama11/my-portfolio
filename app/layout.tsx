import "@/styles/globals.css";

export const metadata = {
  title: "Aya Almalla | AI Engineer",
  description: "AI Engineer & Mobile App Developer"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
