/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { base: "#080C10", surface: "#0D1117", elevated: "#111820", overlay: "#161E28" },
        accent: { cyan: "#00D4FF", purple: "#8B5CF6", green: "#10E5A0", amber: "#F59E0B" },
        border: { subtle: "#1A2332", DEFAULT: "#1E2D42" },
        text: { primary: "#E8F4FF", secondary: "#7A9BB5", muted: "#3D5A73" },
      },
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        float: { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-10px)" } },
      },
    },
  },
  plugins: [],
}
