import React from 'react'
import style from './AdminLoginPageLayout.module.css'
import AdminLogin from '../components/adminComponents/AdminLogin'
import HandleAdminAuth from '../store/HandleAdminAuth'

const AdminLoginPageLayout = () => {
    return (
        <div className={style.AdminLoginDiv}>
            <HandleAdminAuth>
                <AdminLogin />
            </HandleAdminAuth>
        </div>
    )
}

export default AdminLoginPageLayout
