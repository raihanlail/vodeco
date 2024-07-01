import React from 'react'
import { faq } from '../lib/data'
import { CiCircleChevDown } from "react-icons/ci";

const Faq = () => {
  return (
    <div className=' mx-4 my-20 lg:mx-32 flex flex-col '>
        <div className='flex flex-col items-center justify-center text-center gap-4 my-4'>
            <h1 className='text-3xl font-semibold'>
            Pertanyaan Umum Tentang Internship di Vodeco

            </h1>
            <p className='text-sm font-light'>
            Kami terbuka dengan pertanyaan apapun terkait internship. Sebelum Anda mengajukan pertanyaan, mungkin Anda bisa menemukan jawabannya di bawah ini.
            </p>

        </div>
        <div className='my-4 '>
            <div className=''>
                {faq.map((data, i) => (
                    <div className='rounded-lg my-2 font-light'>

                    <div className='bg-[#7402BA] rounded-lg h-10 text-sm p-2 text-white flex flex-row gap-4'>
                        <div className='font-bold text-lg'>

                        <CiCircleChevDown/>
                        </div>
                        <p>{data.question}</p>

                    </div>
                    <div className='bg-white h-10 text-sm p-2 text-black'>
                        <p>{data.answer}</p>

                    </div>
                    </div>


                ))}

            </div>

        </div>
      
    </div>
  )
}

export default Faq
