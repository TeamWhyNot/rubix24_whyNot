import React, { useContext } from 'react'
import authContext from '../context/authContext'
import Netflix from "../assets/Netflix.png"

const Test = () => {
  const { Signin, GoogleSignIn, CreateUser } = useContext(authContext)
  return (
    <div className=" main_Track h-[100vh] w-[100vw] lg:flex-row flex flex-col flex-wrap items-center justify-center bg-[#141414]">
      <div className='bg-[#141414] h-[50%] z-1 lg:w-[50%] w-[100%] flex items-center p-4 justify-center '>
        <div className=' h-[50%] bg-white p-4 rounded-3xl  lg:w-[50%] w-[90%] ' >
          <div className='flex items-center justify-start'>
            <h1>Total spent on ott</h1>
          </div>
          <div className='flex items-center justify-center gap-2  '>
            <h1 className='text-[50px]'>Rs. 3500.00</h1>
            <h1>total 20 ott</h1>
          </div>

        </div>


      </div>
      <div className=' items-start justify-center flex   h-[50%] lg:w-[50%] w-[100%] '>
        <div className='space-y-5'>
          <div>
            <h1 className='text-white'>Cost Distribution</h1>
          </div>
          <div className='space-y-10'>
            <div className="w-[370px] h-[78px] items-center justify-center flex gap-2 overflow-x-auto bg-stone-300 bg-opacity-50 rounded-[40px]">
              <div className="w-[118px] flex items-center justify-center h-10 bg-zinc-100 rounded-2xl">
                <h1>
                  MUSIC
                </h1>
              </div>
              <div className="w-[118px] h-10 flex items-center justify-center  rounded-2xl">
                <h1>
                  SHOWS
                </h1>
              </div>
              <div className="w-[118px] h-10 flex items-center justify-center  rounded-2xl">
                <h1>
                  82%
                </h1>
              </div>
            </div>
            <div className="w-[370px] h-[78px] items-center justify-center flex gap-2 overflow-x-auto bg-stone-300 bg-opacity-50 rounded-[40px]">
              <div className="w-[118px] flex items-center justify-center h-10 bg-zinc-100 rounded-2xl">
                <h1>
                  MUSIC
                </h1>
              </div>
              <div className="w-[118px] h-10 flex items-center justify-center  rounded-2xl">
                <h1>
                  MUSIC
                </h1>
              </div>
              <div className="w-[118px] h-10 flex items-center justify-center  rounded-2xl">
                <h1>
                  9%
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[370px] h-[78px] items-center justify-center flex gap-2 overflow-x-auto bg-stone-300 bg-opacity-50 rounded-[40px]">
            <div className="w-[118px] flex items-center justify-center h-10  rounded-2xl">
              <h1>
                MUSIC
              </h1>
            </div>
            <div className="w-[118px] h-10 flex items-center justify-center  rounded-2xl">
              <h1>
                LIVE CHANNELS
              </h1>
            </div>
            <div className="w-[118px] h-10 flex items-center justify-center  rounded-2xl">
              <h1>
                9%
              </h1>
            </div>
          </div>





        </div>
      </div>
    </div>
  )
}

export default Test