import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from '@firebase/auth'
import { auth } from "../firebase"

const Navbar = () => {
    const Logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    }
    return (
        <div className=' border-solid border-2 p-2 flex-wrap rounded-lg border-[#F8D600] w-[30%] gap-10 flex items-center justify-center '>
            <div className=' bg-[#1A1A1A] text-[14px] p-2 text-white hover:shadow-2xl rounded-md '>
                <Link to="/"><h1>Home</h1></Link>
            </div>
            <div className=' bg-[#1A1A1A] text-[14px] p-2 text-white shadow-2xl rounded-md '>
                <Link to="/customisation"><h1>Customisation</h1></Link>
            </div>
            <div className=' bg-[#1A1A1A] text-[14px] p-2 text-white shadow-2xl rounded-md '>
                <Link to="/track"><h1>Track</h1></Link>
            </div>
            <div className=' bg-[#1A1A1A] text-[14px] p-2 text-white shadow-2xl rounded-md '>
                <Link to="/reminder"><h1 onClick={Logout} >Reminder</h1></Link>
            </div>
        </div>
    )
}

export default Navbar