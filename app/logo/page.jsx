import React from 'react'
import { Logo } from '../lib/data'
import Image from 'next/image'


const LogoList = () => {
  return (
    <div className='my-12'>
        <div className='flex items-center py-8 justify-center text-center '>
            <h1 className='font-bold text-2xl  '>
                Kami telah melayani lebih dari <span className='text-blue-800'>2300+ pengguna</span>
            </h1>


        </div>
        <div className=' mx-4 md:mx-32 grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4'>
            {Logo?.map((data, i) => (
                <div className='shadow-lg'>
                    <Image src={data.img} width={200} height={200}/>

                </div>
            ))}

        </div>
        <div className='py-20 flex font-bold text-green-700 text-xl items-center justify-center w-full'>
            <h1>dan Masih Banyak Lagi...</h1>
             
        </div>
      
    </div>
  )
}

export default LogoList
