/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1e3a8a', // dark blue
                    dark: '#1e40af',   // slightly deeper blue
                },
                accent: {
                    DEFAULT: '#3b82f6', // blue-500
                    dark: '#2563eb',   // blue-600
                    light: '#60a5fa',  // blue-400
                },
                light: {
                    DEFAULT: '#f3f6fd', // very light blue
                },
            },
            fontFamily: {
                sans: [
                    'Inter',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'sans-serif',
                ],
            },
        },
    },
    plugins: [],
}

