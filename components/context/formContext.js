import React, { createContext, useReducer } from 'react';
import {
    FORM_SUBMIT_REQUEST,
    FORM_SUBMIT_SUCESS,
    FORM_SUBMIT_FAIL,
} from './formActionTypes';
import formReducer from './formReducer';

const FormContext = createContext();

const defaultState = { submitted: false };

const FormProvider = ({ children }) => {
    const [state, dispatch] = useReducer(formReducer, defaultState);

    const formSubmit = (name, email, message) => {
        // dispatch({ type: FORM_SUBMIT_REQUEST });
        // try {
        //     dispatch({type: FORM_SUBMIT_SUCESS, payload: data})
        // } catch (error) {
        //     dispatch({ type: FORM_SUBMIT_FAIL, payload: error });
        // }
        console.log(name, email, message);
    };

    return (
        <FormContext.Provider value={{ ...state, formSubmit }}>
            {children}
        </FormContext.Provider>
    );
};

export { FormContext, FormProvider };
