/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        moveWave: "moveWave 15s infinite alternate ease-in-out",
        moveWaveReverse: "moveWaveReverse 18s infinite alternate ease-in-out",
      },
      keyframes: {
        moveWave: {
          "0%": { transform: "translateY(0px) translateX(0px)" },
          "100%": { transform: "translateY(-50px) translateX(50px)" },
        },
        moveWaveReverse: {
          "0%": { transform: "translateY(0px) translateX(0px)" },
          "100%": { transform: "translateY(50px) translateX(-50px)" },
        },
      },
    },
  },
  plugins: [],
};
