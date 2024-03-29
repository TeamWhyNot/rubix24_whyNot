import React, {useState, useContext, useRef,useEffect} from 'react'
import { Button } from '../components/Button';
import GoogleButton from 'react-google-button';
import authContext from '../context/authContext';
import { auth } from '../firebase';
import { onAuthStateChanged } from '@firebase/auth';
import { useNavigate } from 'react-router';
const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { GoogleSignIn , Signin } = useContext(authContext);

  const navigate=useNavigate();

  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        navigate('/')
        // ...
      } else {
        console.log("not yet sign in")
      }
    });
    
    
  
    
  }, [onAuthStateChanged])
  

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    Signin(email, password);
  };

  return (
    <div className='login flex flex-shrink-0 flex-col-reverse '>
      <div className='form h-auto w-80% bg-[#141414] flex-col   justify-center items-center  }'>
        <div className="header text-white flex justify-center items-center">
          <h1 className=' text-[2.5rem]  font-semibold mb-[1.5rem] @media (min-width: 768px) { text-xl } '>Login</h1>
        </div>
       <div className='flex justify-center items-center flex-col '>
       <form className="login-form flex justify-center w-[90%] flex-col gap-6 mt-2 "onSubmit={handleSignIn} >
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
       </div>
   
  )
}

export default Login