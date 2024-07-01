import React from 'react'

const Hero2 = () => {
  return (
    <div className='flex flex-col mx-4 md:mx-32 my-8 '>
        <div className='flex flex-col '>
        <div className=" lg:w-80 w-full flex flex-row bg-gray-100 border border-blue-800 shadow-lg h-12 items-center justify-center rounded-3xl">
            <div className="rounded-full w-6 mr-8 text-blue-800 bg-blue-800">
              d
            </div>
            <p className="text-center py-2 text-sm md:text-base text-blue-800">
              CV Vodeco Digital Mediatama
            </p>
          </div>
          <div className='py-8 md:w-96'>
            <h1 className='font-bold text-2xl'> Solusi Nomor 1 Kebutuhan Digital Markerting Bisnis</h1>
          </div>

        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='rounded-lg bg-gradient-to-r text-white from-blue-900 via-blue-700 to-blue-500 '>
                <div className='flex flex-col px-8 py-6 gap-2'>
                    <h1 className='font-semibold text-lg'>
                        Growing Your Business

                    </h1>
                    <hr />
                    <p className='text-sm font-light'>
                    Dengan layanan digital marketing yang dirancang dengan baik, Anda menunjukkan kepada pelanggan bahwa bisnis kamu serius dan dapat dipercaya.

                    </p>

                </div>

            </div>
            <div className='rounded-lg bg-white text-black '>
                <div className='flex flex-col px-8 py-6 gap-2'>
                    <h1 className='font-semibold text-lg'>
                        Professionalism & Trust

                    </h1>
                    <hr />
                    <p className='text-sm font-light'>
                    Digital marketing adalah kartu nama digital yang memberikan identitas bisnis Kamu di seluruh dunia. Menjangkau calon pelanggan yang lebih luas dan berpotensi.

                    </p>

                </div>

            </div>
            <div className='rounded-lg bg-white text-black '>
                <div className='flex flex-col px-8 py-6 gap-2'>
                    <h1 className='font-semibold text-lg'>
                        Accessiblity & Affordability

                    </h1>
                    <hr />
                    <p className='text-sm font-light'>
                    Digital marketing memungkinkan calon pelanggan untuk mencari informasi tentang produk atau layanan Kamu kapan saja dan di mana saja. Ini memberikan kenyamanan dan kepuasan.

                    </p>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Hero2
