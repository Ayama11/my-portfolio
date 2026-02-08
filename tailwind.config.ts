import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,.06), 0 20px 60px rgba(0,0,0,.55)"
      }
    }
  },
  plugins: []
} satisfies Config;
