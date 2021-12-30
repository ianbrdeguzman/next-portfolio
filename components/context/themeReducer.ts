import { ThemeActionType } from './themeAction';
import { ThemeContextInterface } from './themeContext';

const themeReducer = (
  state: ThemeContextInterface,
  action: ThemeActionType
) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    default:
      return { ...state };
  }
};

export default themeReducer;
