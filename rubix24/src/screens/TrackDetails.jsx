import React from 'react'
import Navbar from '../components/Navbar'

const TrackDetails = () => {
    return (
        <div className='h-[100vh] bg-[#141414] w-[100vw]'>
            <div className=' p-2'>
                <Navbar />
            </div>
            <div className=" main_Track h-[100vh] w-[100vw] lg:flex-row flex flex-col flex-wrap items-center justify-center bg-[#141414]">
                <div className='bg-[#141414] h-[50%] z-1 lg:w-[50%] w-[100%] flex items-center p-4 justify-center '>
                    <div className='w-[100%] text-white'>
                        <div className='flex items-center justify-start'>
                            <h1>Total Spent on ott</h1>
                        </div>
                        <div className='flex items-center justify-center gap-2 mt-12 '>
                            <h1 className='text-[50px]'>Rs. 3500.00</h1>
                            <h1>Total 20 ott</h1>
                        </div>

                    </div>


                </div>
                <div className='bg-[#F8D600] items-center justify-center flex lg:rounded-[50px] z-2 rounded-tl-[50px] rounded-tr-[50px] h-[50%] lg:w-[50%] w-[100%] '>
                    <div className='space-y-10'>
                        <div>
                            <h1>Category</h1>
                        </div>
                        <div className=''>
                            <div className="w-[370px] h-[78px] items-center justify-center p-2 shadow-xl drop-shadow-xl flex gap-2 overflow-x-auto bg-stone-300 bg-opacity-50 rounded-[40px]">
                                <div className="w-[118px] flex items-center justify-center h-10 bg-zinc-100 rounded-2xl">
                                    <h1>
                                        MUSIC
                                    </h1>
                                </div>
                                <div className="w-[118px] h-10 flex items-center justify-center bg-zinc-100 rounded-2xl">
                                    <h1>
                                        SHOWS
                                    </h1>
                                </div>
                                <div className="w-[118px] h-10 flex items-center justify-center bg-zinc-100 rounded-2xl">
                                    <h1>
                                        LIVE
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-10 items-center justify-center'>
                            <div className='shadow-md drop-shadow-md F' >
                                <img src={require('../assets/Netflix.png')} ></img>
                            </div>
                            <div>
                                <div>
                                    <h1>NETFLIX</h1>
                                </div>
                                <div>
                                    <h1>upto 20 jan</h1>
                                </div>

                            </div>
                            <div>
                                <h1>299/month</h1>
                            </div>

                        </div>
                        <div className='flex gap-10 items-center justify-center'>
                            <div className='shadow-md drop-shadow-md '>
                                <img src={require('../assets/primesmall.png')} ></img>
                            </div>
                            <div>
                                <div>
                                    <h1>PRIME VIDEO</h1>
                                </div>
                                <div>
                                    <h1>upto 4 feb</h1>
                                </div>

                            </div>
                            <div>
                                <h1>199/month</h1>
                            </div>

                        </div>
                       



                    </div>
                </div>
            </div>
        </div>

    )
}

export default TrackDetails