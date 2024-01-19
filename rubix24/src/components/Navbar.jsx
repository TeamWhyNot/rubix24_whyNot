import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { signOut } from '@firebase/auth'
import { auth } from "../firebase"
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    const Logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    }

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        // <div className=' border-solid border-2 p-2 flex-wrap rounded-lg border-[#F8D600] w-[30%] gap-10 flex items-center justify-center '>
        //     <div className=' bg-[#1A1A1A] text-[14px] p-2 text-white hover:shadow-2xl rounded-md '>
        //         <Link to="/"><h1>Home</h1></Link>
        //     </div>
        //     <div className=' bg-[#1A1A1A] text-[14px] p-2 text-white shadow-2xl rounded-md '>
        //         <Link to="/customisation"><h1>Customisation</h1></Link>
        //     </div>
        //     <div className=' bg-[#1A1A1A] text-[14px] p-2 text-white shadow-2xl rounded-md '>
        //         <Link to="/track"><h1>Track</h1></Link>
        //     </div>
        //     <div className=' bg-[#1A1A1A] text-[14px] p-2 text-white shadow-2xl rounded-md '>
        //         <Link to="/reminder"><h1 onClick={Logout} >Reminder</h1></Link>
        //     </div>
        // </div>
        <nav className='nav'>
      <div className={`navbar-links flex p-2 gap-6 justify-center items-center rounded-lg border-2 border-solid border-yellow-500 ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" className='nav-link' onClick={() => setMobileMenuOpen(false)}>
          HOME
        </Link>
        <Link to="/customization" className='nav-link' onClick={() => setMobileMenuOpen(false)}>
          CUSTOMIZATION
        </Link>
        <Link to="/track" className='nav-link' onClick={() => setMobileMenuOpen(false)}>
          TRACK
        </Link>
        <Link to="/reminder" className='nav-link' onClick={() => setMobileMenuOpen(false)}>
          REMINDER
        </Link>
        
      </div>
      <button className="open-menu-btn hidden" onClick={toggleMobileMenu}>
        <GiHamburgerMenu />
      </button>
    </nav>
    )
}

export default Navbar