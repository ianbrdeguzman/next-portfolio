import { useContext } from 'react';
import { ThemeContext } from './context/themeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header id="header">
      <nav className="p-4 md:px-8 dark:bg-gray-900 flex justify-end align-center">
        <div
          onClick={toggleTheme}
          data-aos="fade-down"
          className="rounded bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-red-400"
        >
          <button className="cursor-pointer p-2 bg-white dark:bg-gray-900 rounded focus:outline-none m-0.5">
            {theme === 'light' ? '🌑' : '🌞'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
