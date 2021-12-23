const themeReducer = (state, action) => {
  switch (action.type) {
    case 'FORM_SUBMIT_REQUEST':
      return {
        ...state,
        isLoading: true
      };
    case 'FORM_SUBMIT_SUCESS':
      return {
        ...state,
        isLoading: false,
        success: action.payload
      };
    case 'FORM_SUBMIT_FAIL':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return { ...state };
  }
};

export default themeReducer;
