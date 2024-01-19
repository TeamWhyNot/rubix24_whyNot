import React from 'react'
import SearchBox from '../components/SearchBox'
import { Button } from '../components/Button'
const Customization = () => {

  return (
    <div className='h-[100vh] bg-[#141414] '>
        <div className="head">
        <h1 className='text-2xl font-semibold text-white pt-8 mr-8 ml-8'>Search for comparing plans</h1>
        </div>
        <div className="search bg-[#141414] ">
            <SearchBox className="p-[1rem]"/>
        </div>
        <div className="compare p-[2rem]">
            <Button className="w-[6rem] ">Compare</Button>
        </div>
    </div>
  )
}

export default Customization