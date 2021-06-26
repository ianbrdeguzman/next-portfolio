module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        minHeight: {
            sm: 'calc(100vh - 72px)',
            md: 'calc(100vh - 88px)',
            lg: 'calc(100vh - 160px)',
            screen: '100vh',
        },
        screens: {
            xs: '320px',
            sm: '375px',
            md: '600px',
            lg: '900px',
            xl: '1280px',
            '2xl': '1440px',
        },
        listStyleType: {
            square: 'square',
        },
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-10deg)' },
                    '50%': { transform: 'rotate(10deg)' },
                },
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar'),
        require('@tailwindcss/line-clamp'),
    ],
};
