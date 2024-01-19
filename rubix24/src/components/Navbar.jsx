import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { signOut } from '@firebase/auth'
import { auth } from "../firebase"
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from './Button';


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
        <Button className="logOut  w-[5rem] h-[3rem]">Logout</Button>
      </div>
      <button className="open-menu-btn hidden" onClick={toggleMobileMenu}>
        <GiHamburgerMenu />
      </button>
    </nav>
    )
}

export default Navbar