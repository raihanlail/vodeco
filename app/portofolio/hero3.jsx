import Image from 'next/image'
import React from 'react'
import { services } from '../lib/data'



const Hero3 = () => {
  return (
    <div className='my-16 mx-6 md:mx-32 flex flex-col'>
        <div className='py-4 flex items-center justify-center'>
            <h1 className='text-4xl font-bold'>The Best Quality Services For You</h1>

        </div>
        <div className='flex flex-col md:flex-row my-4 justify-between lg:mx-64 '>
            <div className='text-sm font-light'>
                <p>Kami pastikan memberikan pelayanan terbaik untuk kepuasan Anda. Vodeco siap menjadi solusi terbaik untuk Anda</p>

            </div>
            <div className=''>
                <button className='w-48 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 h-12 my-4 md:my-0 md:h-full flex flex-row items-center justify-center gap-2 text-white rounded-lg md:rounded-full '>
                    <a href="">
                        Call Us Now
                    </a>
                    <Image src="/Emphasis2.png" width={20} height={20}/>

                </button>

            </div>

        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 my-8'>
            {services?.map((data, i) => (
                <div className='flex flex-col px-4 pt-8 pb-4 md:pb-24 border gap-4'>
                    <Image src={data.img} height={70} width={70}/>
                    <h1 className='font-bold text-xl'>{data.title}</h1>
                    <p className='font-light'>{data.text}</p>

                </div>
            ))}



        </div>
      
    </div>
  )
}

export default Hero3
