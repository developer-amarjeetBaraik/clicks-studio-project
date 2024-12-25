import React from 'react'
import { createContext } from "react";

export const FormContext = createContext({
    submitForm: () => { },
})

const HandleFormContext = ({ children }) => {

    const submitForm = (formData) => {
        fetch('/api/contact-form', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
    return (
        <FormContext.Provider value={{ submitForm }}>
            {children}
        </FormContext.Provider>
    )
}

export default HandleFormContext
