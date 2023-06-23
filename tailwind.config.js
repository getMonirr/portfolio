/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "get-bg": "#212428",
        // "get-primary": "#ff014f",
        "get-primary": "#22c55e",
        "get-secondary": "#f4f5f6",
        "get-tertiary": "#0d1013",
        "get-gray": "#f6f6f6",
        "get-subtitle": "#f9004d",
        "get-body-text": "var(--color-lightn)",
        // btn
        "get-btn-bg-1": "var(--btn-bg-1)",
        // bg
        "get-bg-1": "var(--background-color-1)",
        "get-bg-2": "var(--background-color-2)",
        "get-shadow-1": "var(--shadow-1)",
        "get-shadow-2": "var(--shadow-2)",
        "get-inner-shadow": "var(--inner-shadow)",
      },
    },
  },
  plugins: [],
};
