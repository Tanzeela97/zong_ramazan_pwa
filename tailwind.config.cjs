/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#ec0081",
                    "secondary": "#8dc63f",
                    "accent": "#570DF8",
                    "neutral": "#3D4451",
                    "base-100": "#FFFFFF",
                    "info": "#3ABFF8",
                    "success": "#10dc60",
                    "warning": "#ffce00",
                    "error": "#f53d3d",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
