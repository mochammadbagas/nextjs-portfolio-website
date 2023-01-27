/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                accent: '#CEF74F',
            },
            fontFamily: {
                inter: 'Inter',
            },
            backgroundImage: {
                pattern: "url('/pattern.svg')",
            },
        },
        screens: {
            mobile: '320px',
            // => @media (min-width: 320px) { ... }

            tablet: '640px',
            // => @media (min-width: 640px) { ... }

            laptop: '1024px',
            // => @media (min-width: 1024px) { ... }

            desktop: '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        container: {
            center: 'true',
            padding: {
                DEFAULT: '0px',
                mobile: '0px',
                tablet: '0px',
                laptop: '128px',
            },
        },
    },
    plugins: [],
};
