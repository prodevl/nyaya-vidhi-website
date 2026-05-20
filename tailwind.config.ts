import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Indian Heritage Modern palette
        paper: {
          DEFAULT: "#FBF7EF", // warm off-white, like aged paper
          50: "#FEFCF7",
          100: "#FBF7EF",
          200: "#F4EDDE",
          300: "#EADDB8",
        },
        ink: {
          DEFAULT: "#1A1410", // deep ink for text
          50: "#F5F2EE",
          100: "#E8E2DA",
          400: "#6B5E52",
          500: "#3D3329",
          900: "#1A1410",
          950: "#0F0B07",
        },
        saffron: {
          DEFAULT: "#D97706", // signature saffron
          50: "#FEF7EC",
          100: "#FDECD0",
          200: "#FBD79E",
          300: "#F8B85E",
          400: "#F19632",
          500: "#D97706",
          600: "#B45F09",
          700: "#92480C",
          800: "#783A0F",
          900: "#653010",
        },
        marigold: {
          DEFAULT: "#E8A33D",
          400: "#F0B85E",
          500: "#E8A33D",
          600: "#C8841F",
        },
        india: {
          // deep India green
          DEFAULT: "#0F5132",
          50: "#ECF5EF",
          100: "#D1E8D8",
          200: "#A3D0B0",
          400: "#3F8C5E",
          500: "#1F6F44",
          600: "#0F5132",
          700: "#0B3D26",
          800: "#082A1B",
        },
        nile: {
          // muted teal accent
          DEFAULT: "#2C5F5D",
          500: "#2C5F5D",
        },
        terracotta: {
          DEFAULT: "#A0522D",
          500: "#A0522D",
        },
        border: "rgba(26, 20, 16, 0.08)",
        ring: "#D97706",
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        devanagari: ['var(--font-tiro)', 'serif'],
        display: ['var(--font-fraunces)', 'ui-serif', 'serif'],
      },
      fontSize: {
        // editorial-scale type
        "display-2xl": ["clamp(3.5rem, 7vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.75rem, 5.5vw, 4.75rem)", { lineHeight: "1.0", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      letterSpacing: {
        "ultra-wide": "0.2em",
      },
      backgroundImage: {
        "jaali":
          "radial-gradient(circle at 1px 1px, rgba(26,20,16,0.12) 1px, transparent 0)",
        "jaali-saffron":
          "radial-gradient(circle at 1px 1px, rgba(217,119,6,0.18) 1px, transparent 0)",
        "paper-grain":
          "radial-gradient(ellipse at top, rgba(217,119,6,0.04), transparent 60%), radial-gradient(ellipse at bottom right, rgba(15,81,50,0.05), transparent 55%)",
        "saffron-glow":
          "radial-gradient(circle at 50% 0%, rgba(217,119,6,0.18), transparent 65%)",
        "mandala-fade":
          "radial-gradient(circle at center, rgba(217,119,6,0.06), transparent 70%)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26,20,16,0.04), 0 8px 24px -8px rgba(26,20,16,0.08)",
        elevated: "0 2px 6px rgba(26,20,16,0.06), 0 24px 48px -12px rgba(26,20,16,0.14)",
        glow: "0 0 0 1px rgba(217,119,6,0.15), 0 10px 40px -10px rgba(217,119,6,0.35)",
        inset: "inset 0 0 0 1px rgba(26,20,16,0.06)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "slow-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "shimmer": "shimmer 2.5s linear infinite",
        "slow-spin": "slow-spin 60s linear infinite",
        "marquee": "marquee 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
