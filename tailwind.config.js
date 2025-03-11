const { heroui } = require("@heroui/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 25px 50px -12px rgb(200 255 136 / 0.25);",
      },
      colors: {
        primary: "#C8FF88",
        chaosMint: "#C8FF88",
      },
      fontFamily: {
        googleRegular: ["GoogleSans-Regular", "sans-serif"],
        spotifyBold: ["SpotifyMix-Bold", "sans-serif"],
        spotifyUltra: ["SpotifyMix-Ultra", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
