import React from 'react'
import { card2 } from '../lib/data'
import { FaLongArrowAltRight } from "react-icons/fa";


const Hero4 = () => {
  return (
    <div className='min-h-screen mt-12 md:mt-28 px-4 '>
        <div className='flex flex-col  items-center justify-center w-full text-center py-6 '>
            <h1 className='font-bold text-2xl md:text-4xl'>
                <span className='text-blue-800'>The Best Quality</span> Services for you
            </h1>
            <div className='mx-12'>

            <p className='font-light py-4 '>Kami pastikan memberikan pelayanan terbaik untuk kepuasan Anda. Vodeco siap menjadi solusi terbaik untuk Anda</p>
            </div>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 md:mx-32 mx-2 gap-10'>
            { card2.map((data, i) => (
                <div className='w-full shadow-xl flex flex-col justify-between'>
                    <div className='bg-gradient-to-r from-blue-900 to-blue-500 w-1/2 h-12 text-white rounded-full flex items-center justify-center'>
                        <h1 className='px-2 font-bold'>

                    {data.title}
                        </h1>
                       

                    </div>
                    <div className='py-4 px-4'>
                            <h2 className='text-blue-800 font-bold text-sm'>
                                {data.price}
                            </h2>
                        </div>
                        <div className='px-4 py-6 font-light text-sm'>
                            {data.text}

                        </div>
                        <div className='mx-4 my-6'>
                            <button className='rounded-full bg-gradient-to-r border border-blue-800 hover:font-bold gap-2 transition-all from-blue-900 text-sm flex flex-row items-center justify-center w-40 h-8 to-blue-600 text-white '>
                                <p>Selengkapnya</p> <FaLongArrowAltRight/>
                            </button>

                        </div>
                </div>
            ))}


        </div>
      
    </div>
  )
}

export default Hero4
