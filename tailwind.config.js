module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    fontSize: {
      hd: "3.875rem",
      shd: "2rem",
      tt: "1.5rem",
      bt: "1.125rem",
      lb: "1rem",
      cd: "0.875rem",
    },
    fontFamily: {
      fira: ["Fira Code", "monospace"],
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      default: "450",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },

    colors: {
      primary: {
        black: "#070707",
        blue: "#011221",
      },
      secondary: {
        gray: {
          100: "#607B96",
          50: "#607B9680",
        },
        green: "#43D9AD",
        green2: "#A1ECD6",
        white: "#FFFFFF",
      },
      accent: {
        skin: "#E99287",
        blueg: "#1E2D3D",
        purple: "#4D5BCE",
        purplevivid: "#7000FF",
      },
    },
    extend: {
      animation: {
        scale: "pulse 3s linear infinite",
        scale1: "pulse1 4s linear infinite",
        scale2: "pulse2 4s linear infinite",
        moveIsland: "moveY 2s linear infinite",
      },
      keyframes: {
        pulse: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(0.7)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        pulse1: {
          "0%": {
            transform: "scale(1.2)",
          },
          "50%": {
            transform: "scale(0.9)",
          },
          "100%": {
            transform: "scale(1.2)",
          },
        },
        pulse2: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(0.2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        moveY: {
          "0%": {
            transform: "translateY(0rem)",
          },
          "50%": {
            transform: "translateY(0.5rem )",
          },
          "100%": {
            transform: "translateY(0rem)",
          },
        },
      },
    },
  },
  plugins: [],
};
