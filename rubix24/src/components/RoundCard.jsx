import React from 'react'

const RoundCard = ({ottName,path}) => {
    return (
        <div className=' flex items-start justify-center '>
            <div>
                <div className=' bg-black h-[50px] rounded-full items-center justify-center flex text-white w-[50px] '>
                    <img src={path} ></img>
                </div>
                <div className='flex items-center justify-center'>
                    <h1>{ottName}</h1>
                </div>
            </div>
        </div>
    )
}

export default RoundCard