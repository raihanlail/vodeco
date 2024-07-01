import Image from 'next/image'
import React from 'react'

const Peta = () => {
  return (
    <div className='md:mx-32 my-20 flex flex-col items-center text-center justify-center'>
        <div className=' mx-12 md:mx-32 flex flex-col '>
            <h1 className='text-xl md:text-4xl font-bold'>
                Penyebaran <span className='text-blue-800'>Klien Vodeco</span>

            </h1>
            <p className='text-xs md:text-sm font-light py-4'>
            Saat Anda bekerja dengan kami, Anda bukan hanya mendapatkan layanan teknologi yang unggul, tetapi juga mitra yang berkomitmen
            untuk memajukan bisnis Anda melalui inovasi dan kualitas tak terkompromi. 

            </p>

        </div>
        <div className='pb-12'>
            <Image src="/peta.png" width={1000} height={500} />

        </div>

      
    </div>
  )
}

export default Peta
