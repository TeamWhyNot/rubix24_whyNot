import React from 'react'
import authContext from './authContext'
const AuthState = (props) => {
    const name ="Toyash";
  return (
    <authContext.Provider value={{name}}>
        {props.children}
    </authContext.Provider>
  )
}

export default AuthState