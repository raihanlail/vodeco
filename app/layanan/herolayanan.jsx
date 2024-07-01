import Image from 'next/image'
import React from 'react'

const Herolayanan = () => {
  return (
    <div className='mx-12 md:mx-32  my-12  flex flex-col items-center justify-center text-center text-white md:h-72'>
      <Image src="/layananhero.png" width={600} height={600}/>
      <div className='py-12 lg:mx-48 text-sm md:text-base'>
      <p>Jadikan bisnis Anda lebih menguntungkan dengan jasa pembuatan website murah dan berkualitas yang didukung tim profesional dari Vodeco. Saat ini, lebih dari 500+ perusahaan telah mempercayakan pembuatan websitenya pada kami. Tak hanya itu, dapatkan profesional desain branding dari kami sekarang juga.</p>

      </div>
      
    </div>
  )
}

export default Herolayanan
