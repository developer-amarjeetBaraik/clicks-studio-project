import React, { createContext, useReducer } from 'react'

export const AdminAuthContext = createContext({
    serverMessage : null,
    adminLogin : ()=>{},
    adminLogout : ()=>{}
})

const serverMessageReducer = (currValue, action)=>{
    
}

const HandleAdminAuth = ({children}) => {
    const [serverMessage, dispathServerMessage] = useReducer(serverMessageReducer, null)

    const adminLogin = () =>{

    }
    const adminLogout = ()=>{

    }
  return (
    <AdminAuthContext.Provider value={{serverMessage, adminLogin, adminLogout}}>
        {children}
    </AdminAuthContext.Provider>
  )
}

export default HandleAdminAuth
