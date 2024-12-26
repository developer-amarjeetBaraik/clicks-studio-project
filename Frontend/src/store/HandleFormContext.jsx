import React, { useState } from 'react'
import { createContext } from "react";

export const FormContext = createContext({
    isLoading: false,
    submitForm: () => { },
    serverMessage: null
})


const HandleFormContext = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [serverMessage, setServerMessage] = useState(null)

    const submitForm = (formData) => {
        setIsLoading(true)
        fetch('/api/contact-form', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServerMessage(data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }
    return (
        <FormContext.Provider value={{ submitForm, isLoading, serverMessage }}>
            {children}
        </FormContext.Provider>
    )
}

export default HandleFormContext
