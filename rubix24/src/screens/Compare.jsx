import React from 'react'
import CCard from '../components/CCard'
import Navbar from '../components/Navbar'
const Compare = () => {
    return (
        <div className='flex flex-col'>
        <div className='bg-[#141414]'>
        <div className="w-[100%] justify-start  flex items-center ">
        <Navbar />
      </div>
        </div>
            <div className='flex-col lg:flex bg-[#141414] lg:flex-row space-y-5 items-center  justify-center  gap-5 h-[100vh] w-[100vw]'>

                <CCard name="NETFLIX"
                    det1="1. Unlimited ad-free movies, TV shows, and mobile games"
                    det2="2. Watch on 2 supported devices at a time and Watch in Full HD"
                    det3="3. Standard Plan Cost 499/month"
                    path={require('../assets/bigNetflix.png')} />
                <CCard name="Disney Hotstar"
                    det1="1. Unlimited ad-free movies, TV shows, and mobile games"
                    det2="2. Watch on 4 supported devices at a time and Watch in Full HD"
                    det3="3. Standard Plan Cost 299/month"
                    path={require('../assets/disneybig.webp')} />


            </div>
        </div>

    )
}

export default Compare