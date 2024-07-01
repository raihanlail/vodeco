import React from 'react'
import { intern2 } from '../lib/data'
import Image from 'next/image'
import Faq from './faq'

const Hero3 = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col  '>
       <div className='flex flex-col text-center gap-4 my-16 '>
            <h1 className='font-semibold text-3xl'>
            Kembangkan Skill mu dengan Intership di Vodeco
            </h1>
            <p className='text-sm font-light lg:px-96'>
            Tersedia berbagai posisi magang di Vodeco yang bisa kamu pilih sesuai dengan program studi atau minat yang ingin kamu kembangkan. Sebagai bagian dari program magang kami, Anda akan mendapatkan kesempatan untuk mengerjakan berbagai proyek dan belajar tentang budaya perusahaan kami. Vodeco menyambut Anda untuk tumbuh dan berkembang bersama.
            </p>

        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 my-8 lg:mx-32 mx-4 gap-6'>
            {intern2.map((data, i) => (
                <div className='bg-white rounded-lg '>
                    <div className='px-8 py-4 flex flex-col items-center justify-between gap-6'>
                        <Image src={data.img} width={60} height={60}/>
                        <h1 className='text-lg font-semibold'>{data.title}</h1>
                        <p className='text-xs font-light text-center'>{data.text}</p>
                        <div>
                            <button className='bg-blue-800 w-48 h-8 text-white rounded-xl border border-blue-800 hover:text-black hover:bg-white transition-all'>
                                Apply

                            </button>
                        </div>
                       


                    </div>

                </div>
            ))}

        </div>
        <Faq/>
      
    </div>
  )
}

export default Hero3
