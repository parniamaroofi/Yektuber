/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  mode: "jit", // update this line
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E33232",
      },
    },
  },
  plugins: [],
};
