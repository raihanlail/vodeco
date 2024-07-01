import React from 'react'
import { card1 } from '../lib/data'
import Image from 'next/image'


const Hero3 = () => {
  return (
    <div className=''>
      <div className='flex flex-col w-full'>
        <div className='flex items-center justify-center text-center px-12 md:px-80 '>
          <h1 className=' text-lg md:text-3xl font-bold '>
          Vodeco solusi nomor 1 kebutuhan Digital Marketing bisnis Anda Melalui <span className='text-blue-800 font-extrabold'>Strategi Kreatif dan Efektif</span>           

          </h1>
        </div>
        <div className='grid grid-cols 1  lg:grid-cols-3 gap-6 mx-4  md:mx-32 my-6 '>
          {card1.map ((data, i) => (
            <div className='flex flex-col border shadow-lg '>
              <div className=' bg-gradient-to-tr rounded-2xl  from-blue-800 to-blue-600 flex items-center justify-center text-center'>
                <div className='flex flex-col gap-6 my-4 items-center justify-center'>

              <Image src={data.image} width={80} height={80} />
              <h1 className='text-white font-bold'> {data.title}</h1>
                </div>


              </div>
              <div className='flex items-center justify-center bg-blue-400 text-white mx-[11.8rem]  rounded-full -mt-3'>
                {data.number}
              </div>
              <div className='text-center my-8 px-8 font-light '>
                <p>{data.text}</p>
                
              </div>

            </div>

          ))}

        </div>

      </div>
      
    </div>
  )
}

export default Hero3
