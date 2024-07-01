import React from 'react'
import { porto } from '../lib/data'
import Image from 'next/image'



const Hero5 = () => {
  return (
    <div className='mx-4 lg:mx-32 flex flex-col my-8'>
        <div className='flex flex-col items-center justify-center text-center text-black lg:mx-72 mx-4 gap-2 '>
            <div className='border border-black rounded-lg h-8 w-56 text-sm text-center flex items-center justify-center my-6 '>
                <p>Portofolio Project Vodeco  </p>

            </div>
            <h1 className='text-2xl font-semibold'> Portofolio Project Website </h1>
            <p className='text-sm font-light'>
            Berikut klien puas dengan layanan yang telah diberikan oleh tim Vodeco.

            </p>

        </div>
        <div className='my-8 grid grid-cols-1 md:grid-cols-2 mx-16 lg:mx-20 lg:grid-cols-3 gap-8'>
            {porto.map((data, i) => (
                <div className='flex flex-col gap-2' >
                   <Image src={data.img} width={350} height={200}/>
                   <h1 className='text-center font-semibold'>{data.title}</h1>
                   <a href="" className='text-center font-light'>Company Profile</a>

                </div>
            ))}

        </div>

      
    </div>
  )
}

export default Hero5
