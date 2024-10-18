"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const Porto = () => {
  
  return (
    <div className='min-h-3.5 my-20 flex flex-col items-center justify-center text-center mx-4 md:mx-32'>
        <h1 className='text-3xl text-blue-950'>
        Portofolio Jasa <span className='font-bold'>Pembuatan Website</span> Vodeco
        </h1>
        <p className='md:text-sm text-xs font-light py-4 px-4 md:px-40'>
        Berikut adalah daftar project dari klien yang telah bekerjasama dengan Vodeco. Kami menampilkan beberapa project dari klien yang mengizinkan untuk di
publish di halaman portofolio kami. Tertarik dengan layanan kami? ayo hubungan kami sekarang untuk
konsultasi gratis mengenai layanan yang kami tawarkan
        </p>

        <div className=''>
            <Image src="/porto.png" width={2500} height={500}/>
        </div>
        <div className='flex flex-col my-4 '>
            <h1 className='text-xl font-semibold'> 2350+ Portofolio Lainnya</h1>
           

        </div>
        <button className='w-full bg-blue-800 text-white rounded-lg h-10 hover:bg-white border border-blue-800 hover:text-black transition-all mb-16'>
                <a href="/portofolio">
                Cek Portofolio Selengkapnya

                </a>
               
            </button>
            <div className='flex items-center justify-center text-white -mt-12 '>

        <button className='text-blod text-base w-36 h-12 rounded-full hover:bg-white hover:text-black transition-all bg-blue-700 flex items-center justify-center' onClick={() => {
        localStorage.removeItem('user');
        router.push('/login');
      }}>Logout</button>
        </div>
      
    </div>
  )
}

export default Porto
