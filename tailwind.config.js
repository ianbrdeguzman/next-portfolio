module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        minHeight: {
            sm: 'calc(100vh - 128px)',
            md: 'calc(100vh - 160px)',
        },
        screens: {
            xs: '320px',
            sm: '375px',
            md: '600px',
            lg: '900px',
            xl: '1280px',
            '2xl': '1440px',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
