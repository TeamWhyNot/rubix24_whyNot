import React, { useContext } from 'react'
import authContext from '../context/authContext'

const Login = () => {
  const {name} = useContext(authContext);
  return (
    <div>{name}</div>
  )
}

export default Login