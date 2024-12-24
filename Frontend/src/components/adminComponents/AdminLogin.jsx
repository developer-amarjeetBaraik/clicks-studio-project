import React, { useContext, useRef } from 'react'
import style from './AdminLogin.module.css'
import { Form } from 'react-router-dom'
import { AdminAuthContext } from '../../store/HandleAdminAuth'

const AdminLogin = () => {

    const {serverMessage, adminLogin} = useContext(AdminAuthContext)

    const email = useRef()
    const password = useRef()

    const handleSubmitForm = (event)=>{
        event.preventDefalut()
        let emailInput = email.current.value
        let passwordInput = password.current.value
        const formData = {
            email:emailInput,
            password:passwordInput
        }
    }
    return (
        <div>
            <Form className={style.form}>
                        <div className={style.formHead}>
                            <h3>Login to <img className={style.formLogo} src="../Clicks Studio Logo.png" alt="" /></h3>
                            <p>as Admin</p>
                            <p>{serverMessage}</p>
                        </div>
                        <div className={style.formInput}>
                            <span className={style.inputGroup}>
                                <label htmlFor="emailInput">Enter admin's email</label>
                                <input required type="text" ref={email} name="emailInput" id="emailInput" />
                            </span>
                            <span className={style.inputGroup}>
                                <label htmlFor="password">Enter passkey</label>
                                <input required ref={password} type="password" name="password" id="password" />
                            </span>
                            <button type='submit' className={style.submitBtn}>Proceed</button>
                        </div>
                    </Form>
        </div>
    )
}

export default AdminLogin
