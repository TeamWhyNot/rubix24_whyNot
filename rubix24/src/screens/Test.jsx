import React, { useContext } from 'react'
import authContext from '../context/authContext'

const Test = () => {
    const {Signin, GoogleSignIn, CreateUser}=useContext(authContext)
  return (
    <div>
        <button>Press me</button>
    </div>
  )
}

export default Test