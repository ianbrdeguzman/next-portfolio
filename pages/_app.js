import 'tailwindcss/tailwind.css';
import { ThemeProvider } from '../components/context/themeContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
