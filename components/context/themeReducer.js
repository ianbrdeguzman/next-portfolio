import { TOGGLE_THEME } from './themeActionTypes';

const themeReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light',
            };
        default:
            return { ...state };
    }
};

export default themeReducer;
