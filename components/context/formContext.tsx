import { createContext, ReactNode, useReducer } from 'react';
import formReducer from './formReducer';
import axios from 'axios';
import {
  formSubmitFail,
  formSubmitRequest,
  formSubmitSuccess
} from './formAction';

export interface IForm {
  name: string;
  email: string;
  message: string;
}

export interface FormContextInterface {
  isLoading: boolean;
  success?: string;
  error?: string;
  formSubmit?: (props: IForm) => Promise<void>;
}

export const initialFormState: FormContextInterface = {
  isLoading: false,
  success: undefined,
  error: undefined
};

const FormContext = createContext<FormContextInterface>(initialFormState);

const FormProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const formSubmit = async ({ name, email, message }: IForm) => {
    dispatch(formSubmitRequest());
    try {
      const { data } = await axios.post(
        'https://next-portfolio-indol-one.vercel.app/api/submit',
        {
          name,
          email,
          message
        }
      );
      dispatch(formSubmitSuccess(data.message));
      window.localStorage.setItem('sent', 'true');
    } catch (error) {
      let message: string;
      if (error instanceof Error) {
        message = error.message;
        dispatch(formSubmitFail(message));
      }
    }
  };

  return (
    <FormContext.Provider value={{ ...state, formSubmit }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
