import 'tailwindcss/tailwind.css';
import '../styles/nprogress.css';
import Layout from '../components/Layout';
import { FormProvider } from '../components/context/formContext';
import { ThemeProvider } from '../components/context/themeContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import aos from 'aos';
import 'aos/dist/aos.css';
import * as gtag from '../lib/gtag';

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        aos.init();
        const handleRouteChangeStart = () => {
            NProgress.start();
        };

        const handleRouteChangeComplete = () => {
            NProgress.done();
        };

        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

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
