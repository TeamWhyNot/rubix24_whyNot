import React, { useContext } from 'react'
import authContext from '../context/authContext'
import Netflix from "../assets/Netflix.png"
import RoundCard from '../components/RoundCard'
import CCard from '../components/CCard'

const Test = () => {
  const { Signin, GoogleSignIn, CreateUser } = useContext(authContext)
  return (
    <div>
      <CCard/>
    </div>
  )
}

export default Test