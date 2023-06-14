/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {   
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/background-login.jpg')",
        'wave': "url('/src/assets/wave-haikei.png')",
        'blob': "url('/src/assets/blob-scene-haikei.png')",
      }
    }
  },
  plugins: [require("daisyui")],
}

