import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                baumans: ["Baumans", defaultTheme.fontFamily.sans],
            },
            screens: {
                sm: "620px",
                xs: "430px",
            },
        },
        container: {
            center: true,
            padding: "20px",
            screens: {
                sm: "1240px",
                md: "1240px",
                lg: "1240px",
                xl: "1240px",
                "2xl": "1700px",
            },
        },
    },
    plugins: [],
};
