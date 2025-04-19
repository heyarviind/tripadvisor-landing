import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-trip)"],
      },
      colors: {
        primary: "#34e0a1",
        black: "#000",
        gray: {
          5: "#121212",
          10: "#191919",
          15: "#232323",
          20: "#333",
          30: "#545454",
          50: "#757575",
          70: "#bababa",
          80: "#e0e0e0",
          95: "#f2f2f2",
        },
        green: {
          10: "#004f32",
          20: "#006641",
          30: "#00aa6c",
          40: "#0fd28a",
          brand: "#34e0a1",
          80: "#c9f2e3",
          90: "#eafaf4",
        },
        yellow: {
          brand: "#f2b203",
          60: "#fdc735",
          70: "#f7d36e",
          80: "#fee39a",
          90: "#fff7e1",
        },
      },
      transitionTimingFunction: {
        "trip-ease": "cubic-bezier(0.25,0.1,0,1)",
      },
    },
  },
  plugins: [],
};

export default config;
