import 'tailwindcss/tailwind.css';
import '../styles/nprogress.css';
import Layout from '../components/Layout';
import { FormProvider } from '../components/context/formContext';
import { ThemeProvider } from '../components/context/themeContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChangeStart = () => {
            NProgress.start();
        };

        const handleRouteChangeComplete = () => {
            NProgress.done();
        };

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, []);

    return (
        <ThemeProvider>
            <FormProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </FormProvider>
        </ThemeProvider>
    );
}

export default MyApp;
