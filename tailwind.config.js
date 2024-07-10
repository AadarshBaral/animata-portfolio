/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "hsl(var(--foreground))",
        background: "#16151f",
        primaryText:"#a94ba1",
      },
      transitionTimingFunction: {
        "minor-spring": "cubic-bezier(0.18,0.89,0.82,1.04)",
      },
      keyframes:{
          "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(80%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-down": {
          "0%": { opacity: "0", transform: "translateY(-80%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
          "content-blur": {
          "0%": { filter: "blur(0.3rem)" },
          "100%": { filter: "blur(0)" },
        },
    },
  }
},
  plugins: [require("tailwindcss-animate")],
}
