import Image from 'next/image'
import React from 'react'
import { linkPorto1, linkPorto2, linkPorto3 } from '../lib/data'


const Hero4 = () => {
  return (
    <div className='min-h-screen bg-gradient-to-tl from-blue-900 to-[#8C35D1] flex flex-col py-8 '>
        <div className='flex items-center justify-center lg:-mt-36'>
            <Image src="/laptop2.png" width={1000} height={1000}/>

        </div>
        <div className='flex flex-col items-center justify-center text-center text-white lg:mx-72 mx-4 gap-2 '>
            <div className='border border-white rounded-lg h-8 w-56 text-sm text-center flex items-center justify-center my-6 '>
                <p>Portofolio Project Vodeco  </p>

            </div>
            <h1 className='text-2xl font-semibold'> Portofolio Project Website </h1>
            <p className='text-sm font-light'>
            Berikut klien puas dengan layanan yang telah diberikan oleh tim Vodeco.

            </p>

        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 lg:mx-32 mx-4  my-20'>
            <div className='bg-gradient-to-tr from-[#6f22ad] to-[#9835e9] rounded-tr-3xl'>
                <div className='px-8 py-8 flex flex-col '>
                    <div className='w-64 h-12 bg-white rounded-full flex items-center justify-center flex-row gap-4'>
                        <Image src="/target.png" width={40} height={40}/>
                        <h1 className='font-semibold'>Kota Jakarta</h1>

                    </div>
                    <ul className='text-white text-sm font-light py-4 '>
                        {linkPorto1.map((data, i) => (
                            <li className='py-2 px-4'>
                                {data.link}
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
            <div className='bg-gradient-to-tr from-[#6f22ad] to-[#9835e9] rounded-tr-3xl'>
                <div className='px-8 py-8 flex flex-col '>
                    <div className='w-64 h-12 bg-white rounded-full flex items-center justify-center flex-row gap-4'>
                        <Image src="/target.png" width={40} height={40}/>
                        <h1 className='font-semibold'>Kota Jakarta</h1>

                    </div>
                    <ul className='text-white text-sm font-light py-4 '>
                        {linkPorto2.map((data, i) => (
                            <li className='py-2 px-4'>
                                {data.link}
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
            <div className='bg-gradient-to-tr from-[#6f22ad] to-[#9835e9] rounded-tr-3xl'>
                <div className='px-8 py-8 flex flex-col '>
                    <div className='w-64 h-12 bg-white rounded-full flex items-center justify-center flex-row gap-4'>
                        <Image src="/target.png" width={40} height={40}/>
                        <h1 className='font-semibold'>Kota Jakarta</h1>

                    </div>
                    <ul className='text-white text-sm font-light py-4 '>
                        {linkPorto3.map((data, i) => (
                            <li className='py-2 px-4'>
                                {data.link}
                            </li>
                        ))}
                    </ul>

                </div>

            </div>

        </div>
        <div className='flex flex-col lg:flex-row mt-2'>
            <div className='lg:w-3/5 hidden lg:block -mb-8'>
            <div className=''>
                <Image src="/laptop3.png" width={900} height={900}/>
            </div>

            </div>
            <div className='lg:w-2/5 flex flex-col my-12 gap-4 items-center justify-center '>
            <Image src="/internet.png" width={200} height={200} />
            <h1 className='text-6xl font-bold text-white '>2387<span className='text-xl text-blue-500 '>+</span> </h1>
            <p className='text-xl font-light text-white'>PROJECT WEBSITE</p>


            </div>


        </div>
      
    </div>
  )
}

export default Hero4
