import { useContext } from 'react';
import { ThemeContext } from './context/themeContext';
import { Link as Scroll } from 'react-scroll';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header id='header'>
            <nav className='p-4 md:px-8 dark:bg-gray-900 flex justify-end align-center'>
                <ul className='h-full align-center dark:text-gray-200 hidden md:flex'>
                    <li className='mr-4 mt-2 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 transition'>
                        <Scroll
                            to='about'
                            smooth={true}
                            duration={1000}
                            className='cursor-pointer'
                        >
                            about
                        </Scroll>
                    </li>
                    <li className='mr-4 mt-2 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 transition'>
                        <Scroll
                            to='exprience'
                            smooth={true}
                            duration={1000}
                            className='cursor-pointer'
                        >
                            experience
                        </Scroll>
                    </li>
                    <li className='mr-4 mt-2 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 transition'>
                        <Scroll
                            to='project'
                            smooth={true}
                            duration={1000}
                            className='cursor-pointer'
                        >
                            projects
                        </Scroll>
                    </li>
                    <li className='mr-4 mt-2 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 transition'>
                        <Scroll
                            to='contact'
                            smooth={true}
                            duration={1000}
                            className='cursor-pointer'
                        >
                            contact
                        </Scroll>
                    </li>
                </ul>
                <button
                    onClick={toggleTheme}
                    className='cursor-pointer p-2 bg-gray-100 dark:bg-gray-800 rounded focus:outline-none focus:ring focus:ring-blue-700 focus:bg-transparent transition'
                >
                    {theme === 'light' ? '🌑' : '🌞'}
                </button>
            </nav>
        </header>
    );
};

export default Header;
