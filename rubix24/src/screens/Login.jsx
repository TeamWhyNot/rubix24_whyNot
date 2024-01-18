import React, {useState, useContext, useRef} from 'react'
import { Button } from '../components/Button';
import GoogleButton from 'react-google-button';
import authContext from '../context/authContext';
import { auth } from '../firebase';
const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { GoogleSignIn } = useContext(authContext);
const {Signin} = useContext(authContext);
  return (
    <div className='login flex flex-shrink-0 flex-col-reverse '>
      <div className='form h-auto w-full bg-[#141414] flex-col   justify-center items-center @media(max-width: 768px){ py-[5%] px-[4%] }'>
        <div className="header text-white">
          <h1 className=' text-2xl font-bold mb-[1.5rem] @media (min-width: 768px) { text-xl } '>Login</h1>
        </div>
        <form className="login-form flex flex-col gap-8 "onSubmit={Signin} >
        <div className="mail flex flex-col gap-2">
          <div className="heading text-xl text-white @media (max-width: 768px){ text-lg } ">Email</div>
          <input 
            type="email"
            placeholder="Enter your email address"
            ref={emailRef}
            required
          />
          </div>
          <div className="pass flex flex-col gap-2">
          <div className="heading text-xl text-white @media(max-width: 768px){ text-lg} ">Password</div>
          <input
            type="password"
            placeholder="Enter your password"
            ref={passwordRef}
          
            required
          />
          </div>
          <Button type="submit" className=" button ">Login</Button>
          </form>
          
          <div className='G flex w-full justify-center mt-5 '  onClick={GoogleSignIn} ><GoogleButton type='light' /></div>
        
        
      </div>
    </div>
  )
}

export default Login