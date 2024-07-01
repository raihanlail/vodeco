import React from 'react'
import { intern } from '../lib/data'
import Image from 'next/image'

const Hero2 = () => {
  return (
    <div className='lg:mx-32 mx-4 my-8 flex flex-col items-center justify-center'>
        <div className='flex flex-col text-center gap-4 my-8'>
            <h1 className='font-semibold text-3xl'>
            3 Langkah Mudah Daftar Internship di Vodeco
            </h1>
            <p className='text-sm font-light lg:px-96'>
            Tertarik menjadi bagian dari tim Vodeco? Berikut adalah 3 langkah mudah
            untuk mendaftar magang di Vodeco
            </p>

        </div>
         <div className='grid grid-cols-1 lg:grid-cols-3 my-8 gap-6 '>
            {intern.map((data, i) => (
                <div className='rounded-lg bg-gray-100'>
                    <div className='flex flex-col px-8 py-2 gap-4 items-center justify-center'>
                        <h1 className='font-semibold text-lg'>{data.no}</h1>
                        <Image src={data.img} width={60} height={60}/>
                        <h1 className='font-semibold text-xl'>{data.title}</h1>
                        <p className='text-center text-sm font-light'>{data.text}</p>

                    </div>

                </div>
            ))}

        </div>
      
    </div>
  )
}

export default Hero2
