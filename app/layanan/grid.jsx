import React from 'react'
import { gridLayanan } from '../lib/data'
import Image from 'next/image'



const Grid = () => {
  return (
    <div className='min-h-3.5 my-8'>

    <div className='md:mx-32 mx-4 my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 '>
        {gridLayanan.map((data, i) => (
            <div className='flex flex-col items-center justify-center text-center border rounded-lg shadow-lg'>
                <div className='my-2'>
                    <Image src="/Emphasis.png" width={100} height={100}/>
                    
                </div>
                <div className='flex flex-col px-4 py-6'>

                <h1 className='py-4'>{data.title}</h1>
                <p className='text-sm font-light'> {data.text}</p>
                </div>

            </div>
        ))}
      
    </div>
    </div>
  )
}

export default Grid
