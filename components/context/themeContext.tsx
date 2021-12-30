import React, { createContext, ReactNode, useReducer } from 'react';
import themeReducer from './themeReducer';
import { toggleTheme as toggleThemeAction } from './themeAction';

export interface ThemeContextInterface {
  theme: string;
  toggleTheme?: () => void;
}

const initialState: ThemeContextInterface = { theme: 'dark' };

const ThemeContext = createContext<ThemeContextInterface>(initialState);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    dispatch(toggleThemeAction());
  };

  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
