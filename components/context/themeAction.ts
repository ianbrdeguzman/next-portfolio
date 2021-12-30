import { ActionTypeKeys } from './typeKeys';

interface ToggleTheme {
  type: ActionTypeKeys.TOGGLE_THEME;
}

export type ThemeActionType = ToggleTheme;

export const toggleTheme = (): ToggleTheme => {
  return {
    type: ActionTypeKeys.TOGGLE_THEME
  };
};
