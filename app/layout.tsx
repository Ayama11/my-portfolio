import "@/styles/globals.css";

export const metadata = {
  title: "Aya Almalla | AI Engineer",
  description: "AI Engineer & Mobile App Development."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
