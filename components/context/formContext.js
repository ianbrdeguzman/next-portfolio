import React, { createContext, useReducer } from 'react';
import formReducer from './formReducer';
import axios from 'axios';

const FormContext = createContext();

const defaultState = {
  isLoading: false,
  success: null,
  error: ''
};

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, defaultState);

  const formSubmit = async ({ name, email, message }) => {
    dispatch({ type: 'FORM_SUBMIT_REQUEST' });
    try {
      const { data } = await axios.post(
        'https://next-portfolio-indol-one.vercel.app/api/submit',
        {
          name,
          email,
          message
        }
      );
      dispatch({ type: 'FORM_SUBMIT_SUCESS', payload: data.message });
    } catch (error) {
      dispatch({
        type: 'FORM_SUBMIT_FAIL',
        payload: error.response ? error.response.data.message : error.response
      });
    }
  };

  return (
    <FormContext.Provider value={{ ...state, formSubmit }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
