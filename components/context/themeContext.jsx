import React, { createContext, useReducer } from 'react';
import { TOGGLE_THEME } from './themeActionTypes';
import themeReducer from './themeReducer';

const ThemeContext = createContext();

const defaultState = { theme: 'dark' };

const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, defaultState);

    const toggleTheme = () => {
        dispatch({ type: TOGGLE_THEME });
        localStorage.setItem(
            'theme',
            JSON.stringify(state.theme === 'dark' ? 'light' : 'dark')
        );
    };

    return (
        <ThemeContext.Provider value={{ ...state, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
