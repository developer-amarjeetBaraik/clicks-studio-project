import React from 'react'
import style from './ContactForm.module.css'
import { Form } from 'react-router-dom'

const ContactForm = () => {
  return (
    <Form className={style.form}>
        <div className={style.formHead}>
            <h3>Contact to <img className={style.formLogo} src="./Clicks Studio Logo.png" alt="" /></h3>
            <p>We respond quickly</p>
        </div>
        <div className={style.formInput}>
            <span className={style.inputGroup}>
                <label htmlFor="nameInput">Your good name</label>
                <input required type="text" name="nameInput" id="nameInput" />
            </span>
            <span className={style.inputGroup}>
                <label htmlFor="phoneInput">Phone number</label>
                <input required type="number" name="phoneInput" id="phoneInput" />
            </span>
            <span className={style.inputGroup}>
                <label htmlFor="emailInput">Email (Optional)</label>
                <input type="text" name="emailInput" id="emailInput" />
            </span>
            <span className={style.inputGroup}>
                <label htmlFor="serviceInput">Service</label>
                <select required name="serviceInput" id="serciceInput">
                    <option value="Pre-wedding shoot">Pre-wedding shoot</option>
                    <option value="Engagement shoot">Engagement shoot</option>
                    <option value="Wedding shoot">Wedding shoot</option>
                    <option value="Aniversary shoot">Aniversary shoot</option>
                    <option value="Cinematography shoot">Cinematography shoot</option>
                    <option value="Candid Photography">Candid Photography</option>
                    <option value="Traditional Photography /Videography">Traditional Photography/Videography</option>
                    <option value="Music-Album Shoot">Music-Album Shoot</option>
                    <option selected value="Other services">Other</option>
                </select>
            </span>
            <button type='submit' className={style.submitBtn}>Proceed</button>
        </div>
    </Form>
  )
}

export default ContactForm
