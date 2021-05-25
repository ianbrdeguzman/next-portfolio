import Header from './Header';
import Footer from './Footer';
import { useContext } from 'react';
import { ThemeContext } from './context/themeContext';

const Layout = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
