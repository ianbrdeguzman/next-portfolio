import 'tailwindcss/tailwind.css';
import { FormProvider } from '../components/context/formContext';
import { ThemeProvider } from '../components/context/themeContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
    switch (Component.name) {
        case 'Home':
            return (
                <ThemeProvider>
                    <FormProvider>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </FormProvider>
                </ThemeProvider>
            );
        default:
            return (
                <ThemeProvider>
                    <FormProvider>
                        <Component {...pageProps} />
                    </FormProvider>
                </ThemeProvider>
            );
    }
}

export default MyApp;
