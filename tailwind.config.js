module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      princ: "var(--color-principal)",
      principald: "var(--color-principal-d)",
      secundario: "var(--color-secundario)",
      secundariod: "var(--color-secundario-d)",
      detalle: "var(--color-detalle)",
      detalle2: "var(--color-detalle2)",
      detalle3: "var(--color-detalle3)",
      detalle4: "var(--color-detalle4)",
    },
    fontFamily: {
      font1: ["Harry Potter", "sans-serif"],
      font2: ["Amazon Ember Display", "sans-serif"],
      font3: ["Red Hat Display", "sans-serif"],
    },

    extend: {
      height: {
        78: "19rem",
        100: "28rem",
        128: "40rem",
        136: "50rem",
        142: "55rem",
      },
      width: {
        78: "19rem",
      },
      backgroundImage: {
        mapa: "url('../public/imagenes/mapa.jpg')",
        mapa2: "url('../public/imagenes/mapa2.png')",
        circle: "url('../public/imagenes/circle.png')",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        point: {
          "0%, 100%": { transform: "translate(-3px)" },
          "50%": { transform: "translate(3px)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        point: "point 1s ease-in-out infinite",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["odd"],
      animation: ["hover", "focus"],
      textOpacity: ["hover"],
    },
  },
  plugins: [],
};
