import { FormActionTypes } from './formAction';
import { FormContextInterface } from './formContext';
import { ActionTypeKeys } from './typeKeys';

const themeReducer = (state: FormContextInterface, action: FormActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.FORM_SUBMIT_REQUEST:
    case ActionTypeKeys.FORM_SUBMIT_SUCCESS:
    case ActionTypeKeys.FORM_SUBMIT_FAIL:
      return {
        ...state,
        ...action.payload
      };
    default:
      return { ...state };
  }
};

export default themeReducer;
