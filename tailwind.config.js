/** @type {import('tailwindcss').Config} */
const path = require('path')

module.exports = {
    mode: 'jit',
    content: [path.join(__dirname, './src/**/*.{js,jsx,ts,tsx}')],
    darkMode: 'class', // or 'media' or 'class'
    theme: {},
    variants: {
        extend: {},
    },
    plugins: [],
    important: true,
}
