import Image from 'next/image'
import React from 'react'



const Hero = () => {
  return (
    <div className='mx-4 lg:mx-32 mb-16 mt-12 flex items-center flex-col justify-center text-white'>
        <div className='py-4'>
            <Image src="/aktivitas.png" width={600} height={600}/>
        </div>
        <div className='lg:mx-80 mt-4 mb-12'>
            <p className='text-sm font-extralight text-center'>
            Ikuti program internship khusus dari Vodeco dan dapatkan berbagai pengalaman dan pengetahuan baru. Siapkan berkasmu dan segera daftarkan ke Vodeco Internship Program (vodipro) sekarang juga!
            </p>
        </div>
       
      
    </div>
  )
}

export default Hero
