import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='main_Home h-[100vh] w-[100vw] flex-col  justify-center  items-start p-4 space-y-6 '>
      <div className='w-[100%] justify-center flex items-center '>
       <Navbar/>
      </div>
      {/* Start next div here in the main div main_Home */}
    </div>
  )
}

export default Home