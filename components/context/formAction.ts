import { ActionTypeKeys } from './typeKeys';

interface FormSubmitRequest {
  type: ActionTypeKeys.FORM_SUBMIT_REQUEST;
  payload: { isLoading: boolean };
}

interface FormSubmitSuccess {
  type: ActionTypeKeys.FORM_SUBMIT_SUCCESS;
  payload: { isLoading: boolean; success: string };
}

interface FormSubmitFail {
  type: ActionTypeKeys.FORM_SUBMIT_FAIL;
  payload: { isLoading: boolean; error: string };
}

export type FormActionTypes =
  | FormSubmitRequest
  | FormSubmitSuccess
  | FormSubmitFail;

export const formSubmitRequest = (): FormSubmitRequest => {
  return {
    type: ActionTypeKeys.FORM_SUBMIT_REQUEST,
    payload: { isLoading: true }
  };
};

export const formSubmitSuccess = (payload: string): FormSubmitSuccess => {
  return {
    type: ActionTypeKeys.FORM_SUBMIT_SUCCESS,
    payload: { isLoading: false, success: payload }
  };
};

export const formSubmitFail = (payload: string): FormSubmitFail => {
  return {
    type: ActionTypeKeys.FORM_SUBMIT_FAIL,
    payload: { isLoading: false, error: payload }
  };
};
