import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { useContext } from 'react';
import { ThemeContext } from './context/themeContext';

const Layout = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <Head>
                <title>Ian De Guzman</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
                <link
                    rel='icon'
                    href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>'
                ></link>
            </Head>
            <div className='overflow-x-hidden'>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
