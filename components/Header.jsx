import { useContext } from 'react';
import { ThemeContext } from './context/themeContext';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header id='header'>
            <nav className='p-4 md:px-8 dark:bg-gray-900 flex justify-end align-center'>
                <button
                    onClick={toggleTheme}
                    data-aos='fade-down'
                    className='cursor-pointer p-2 bg-gray-100 dark:bg-gray-800 rounded focus:outline-none focus:ring focus:ring-blue-700 focus:bg-transparent transition'
                >
                    {theme === 'light' ? '🌑' : '🌞'}
                </button>
            </nav>
        </header>
    );
};

export default Header;
