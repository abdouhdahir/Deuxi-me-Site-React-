/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgcHeader: "#edecfb",
        blogHero: "#000929",
        tenant1: "#403b77",
        tenant3: "#7065f0",
        tenantBgc: "#140e58",
      },
      backgroundImage: {
        "header-gradient": "linear-gradient(to bottom, #e4e3f8, #ffffff)",
      },
    },
  },
  plugins: [],
};
