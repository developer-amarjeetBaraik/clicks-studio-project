import React, { useContext, useRef } from 'react'
import style from './ContactForm.module.css'
import { Form } from 'react-router-dom'
import { FormContext } from '../store/HandleFormContext'

const ContactForm = () => {

    const { submitForm } = useContext(FormContext)

    const name = useRef()
    const phone = useRef()
    const email = useRef()
    const service = useRef()
    const budget = useRef()

    const handleFormSumbit = (event) => {
        event.preventDefault()
        const formData = {
            name: name.current.value,
            email: email.current.value,
            phone: phone.current.value,
            service: service.current.value,
            budget: budget.current.value,
        };

        submitForm(formData)

        name.current.value = ''
        email.current.value = ''
        phone.current.value = ''
        service.current.value = ''
        budget.current.value = ''
    }


    return (
        <Form className={style.form} onSubmit={handleFormSumbit}>
            <div className={style.formHead}>
                <h3>Contact to <img className={style.formLogo} src="./Clicks Studio Logo.png" alt="" /></h3>
                <p>We respond quickly</p>
            </div>
            <div className={style.formInput}>
                <span className={style.inputGroup}>
                    <label htmlFor="nameInput">Your good name</label>
                    <input required ref={name} type="text" name="nameInput" id="nameInput" />
                </span>
                <span className={style.inputGroup}>
                    <label htmlFor="phoneInput">Phone number</label>
                    <input required ref={phone} type="number" name="phoneInput" id="phoneInput" />
                </span>
                <span className={style.inputGroup}>
                    <label htmlFor="emailInput">Email (Optional)</label>
                    <input type="text" ref={email} name="emailInput" id="emailInput" />
                </span>
                <span className={style.inputGroup}>
                    <label htmlFor="serviceInput">Service</label>
                    <select required ref={service} defaultValue='Other services' name="serviceInput" id="serciceInput">
                        <option value="Pre-wedding shoot">Pre-wedding shoot</option>
                        <option value="Engagement shoot">Engagement shoot</option>
                        <option value="Wedding shoot">Wedding shoot</option>
                        <option value="Aniversary shoot">Aniversary shoot</option>
                        <option value="Cinematography shoot">Cinematography shoot</option>
                        <option value="Candid Photography">Candid Photography</option>
                        <option value="Traditional Photography /Videography">Traditional Photography/Videography</option>
                        <option value="Music-Album Shoot">Music-Album Shoot</option>
                        <option value="Other services">Other</option>
                    </select>
                </span>
                <span className={style.inputGroup}>
                    <label htmlFor="budgetInput">Select your budget</label>
                    <select required ref={budget} defaultValue='50,000 to 70,000' name="budgetInput" id="budgetInput">
                        <option value="10,000 to 20,000">10,000 to 20,000</option>
                        <option value="20,000 to 30,000">20,000 to 30,000</option>
                        <option value="30,000 to 50,000">30,000 to 50,000</option>
                        <option value="50,000 to 70,000">50,000 to 70,000</option>
                        <option value="70,000 to 90,000">70,000 to 90,000</option>
                        <option value="90,000 to 1,10,000">90,000 to 1,10,000</option>
                        <option value="1,10,000 to 1,30,000">1,10,000 to 1,30,000</option>
                        <option value="1,30,000 to 1,50,000">1,30,000 to 1,50,000</option>
                    </select>
                </span>
                <button type='submit' className={style.submitBtn}>Proceed</button>
            </div>
        </Form>
    )
}

export default ContactForm
