import React, { useContext } from 'react'
import authContext from '../context/authContext'
import Netflix from "../assets/Netflix.png"
import RoundCard from '../components/RoundCard'

const Test = () => {
  const { Signin, GoogleSignIn, CreateUser } = useContext(authContext)
  return (
    <div>
      <RoundCard ottName="Netflix" path={require('../assets/Netflix.png')} />
    </div>
  )
}

export default Test