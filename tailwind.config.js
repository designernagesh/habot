/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green": "#00732f",
        "orange": "#E7760D",
        "blue-navy": "#123557",
        "blue-dark": "#271555",
        "blue": "#072F57",
        "sky-blue": "#E8FBFF",
        "black-raisin": "#222222",
        "grey": "#6D6E71",
      },
      backgroundImage: {
        "banner-image": "url('/banner.png')",
      },
      listStyleImage: {
        tick: "url('/icon-tick.png')",
      },
      linkStyle: {
        link: "border-orange border rounded text-lg font-medium h-[65px] w-full md:w-[48%] flex items-center justify-center"
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
