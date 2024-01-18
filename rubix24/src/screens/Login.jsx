import React, {useState, useContext} from 'react'
import { Button } from '../components/Button';
import GoogleButton from 'react-google-button';
import authContext from '../context/authContext';
const Login = () => {
  
  const { GoogleSignIn } = useContext(authContext);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const handleGoogleSignIn = async () => {
    try {
      setError('');
      setLoading(true);
      await GoogleSignIn();
      console.log('hii'); 
    } catch (error) {
      console.error('Google Sign-In Failed', error);
    }
    setLoading(false);
  };
  return (
    <div className='login flex flex-shrink-0 flex-col-reverse '>
      <div className='form h-auto w-full bg-[#141414] flex-col   justify-center items-center @media(max-width: 768px){ py-[5%] px-[4%] }'>
        <div className="header text-white">
          <h1 className=' text-2xl font-bold mb-[1.5rem] @media (min-width: 768px) { text-xl } '>Login</h1>
        </div>
        <form className="login-form flex flex-col gap-8 mb-" >
        <div className="mail flex flex-col gap-2">
          <div className="heading text-xl text-white @media (max-width: 768px){ text-lg } ">Email</div>
          <input 
            type="email"
            placeholder="Enter your email address"
            
            required
          />
          </div>
          <div className="pass flex flex-col gap-2">
          <div className="heading text-xl text-white @media(max-width: 768px){ text-lg} ">Password</div>
          <input
            type="password"
            placeholder="Enter your password"
            required
          />
          </div>
          <Button onClick={console.log("hello")} className=" button ">Login</Button>
          </form>
          
          <div className='G flex w-full justify-center mt-5 '  onClick={handleGoogleSignIn} ><GoogleButton type='light' /></div>
        
        
      </div>
    </div>
  )
}

export default Login