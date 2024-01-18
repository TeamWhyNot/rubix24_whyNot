import React from 'react'

export const Button = ({className,onClick, children}) => {
  return (
    // <button className='button color-black flex justify-center items-center w-[70%] h-[4rem] bg-gold rounded-[0.7rem] '>Login</button>
    <>
    <button onClick={onClick} className={`color-black flex justify-center items-center w-[100%] h-[3.5rem] bg-gold rounded-[0.7rem] ${className}`}>
      {children}
    </button>
   </>
    )
}
