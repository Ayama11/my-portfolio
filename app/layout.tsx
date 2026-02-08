import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aya Almalla | AI Portfolio",
  description: "AI/ML/NLP/CV projects portfolio"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
