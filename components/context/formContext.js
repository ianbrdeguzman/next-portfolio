import React, { createContext, useReducer } from 'react';
import formReducer from './formReducer';
import axios from 'axios';

const FormContext = createContext();

const defaultState = {
    isLoading: false,
    success: null,
    error: '',
};

const FormProvider = ({ children }) => {
    const [state, dispatch] = useReducer(formReducer, defaultState);

    const formSubmit = async ({ name, email, message }) => {
        dispatch({ type: 'FORM_SUBMIT_REQUEST' });
        try {
            const { data } = await axios.post(process.env.API_SUBMIT_URL, {
                name,
                email,
                message,
            });
            dispatch({ type: 'FORM_SUBMIT_SUCESS', payload: data.message });
            localStorage.setItem('submit', JSON.stringify(data));
        } catch (error) {
            dispatch({
                type: 'FORM_SUBMIT_FAIL',
                payload: error.response
                    ? error.response.data.message
                    : error.response,
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
