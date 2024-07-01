import Image from 'next/image'
import React from 'react'


const Hero = () => {
  return (
    <div className="mx-12 lg:mx-32  my-12 md:my-20 flex flex-col lg:flex-row justify-between lg:h-96">
        <div className='flex flex-col w-full lg:w-1/3 justify-between'>
        <div className='border border-white rounded-full p-1 md:p-2 text-center text-sm md:text-base text-white my-6 md:my-0'>
            <h1> Kami Telah Dipercaya Oleh Ratusan Klien</h1>

        </div>
        <div className='flex flex-col gap-2 my-12  '>
            <p className='text-white text-sm font-light'>
            Berikut kumpulan project sukses yang telah dikerjakan oleh Vodeco. website personal, website bisnis, website perusahaan, website instansi, website pendidikan, website berita, company profile, website toko online telah sukses kami kerjakan dengan sempurna.

            </p>
            <div className='flex flex-row py-6 gap-4'>
                <button className='w-48 bg-blue-700 text-white text-center border border-blue-700 rounded-lg h-12 hover:text-black hover:bg-white transition-all'>
                    <a href="">
                        Konsultasi Proyek

                    </a>

                </button>
                <button className='w-36 bg-white text-center h-12 hover:bg-blue-700 hover:text-white transition-all rounded-lg'>
                    <a href="">
                        Tim Support
                    </a>

                </button>
            </div>

        </div>

        </div>
        <div className='lg:w-2/3 w-full hidden lg:block'>
        <Image src="/laptop1.png" width={1000} height={500} className='-mt-32'/>

        </div>
      
    </div>
  )
}

export default Hero
