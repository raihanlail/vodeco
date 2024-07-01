import Image from "next/image";
import React from "react";

const Hero2 = () => {
  return (
    <div className="mx-4 lg:mx-32 mb-32 mt-8 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
            <p className="text-blue-900 font-bold text-sm">
                Hubungi Kami
            </p>
            <h1 className="text-4xl font-bold">
                CV Vodeco Digital Mediatama
            </h1>
            <p className="text-sm font-light">
            Jika Anda mempunyai pertanyaan, silakan menghubungi kami melalui formulir kontak.

            </p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <Image src="/wa.png" width={80} height={80}/>
            <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-lg">Whatsapp</h1>
                <p className="text-sm font-light">0878-9992-1200 </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
          <Image src="/email.png" width={80} height={80}/>
            <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-lg">Email</h1>
                <p className="text-sm font-light">hello@vodeco.co.id</p>
            </div>

            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
          <Image src="/alamat.png" width={80} height={80}/>
            <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-lg">Alamat</h1>
            <p className="text-sm font-light">Jl. Cibiru Tonggoh, Pasir Biru, Kec. Cibiru, Kota Bandung, Provinsi Jawa Barat 40615, Indonesia.</p>

            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3  gap-4 mx-4 my-4 lg:my-0 lg:mx-0 border shadow-md rounded-lg ">
        <div className="flex flex-col px-6 py-4">
            <p className="font-semibold text-gray-500">Tinggalkan Pesan Anda</p>
            <p className="font-extralight py-2">Pesan yang anda kirim akan masuk ke email</p>
            <form action="" className="gap-4 w-full">
                <div className="py-2">
                    <input type="text" placeholder="Nama" className="border rounded-md border-gray-300 w-full h-8 p-2" />

                </div>
                <div className="py-2">
                    <input type="email" placeholder="E-mail" className="border rounded-md border-gray-300 w-full h-8 p-2" />

                </div>
                <div className="py-2">
                    <input type="number" placeholder="Nomor HP" className="border rounded-md border-gray-300 w-full h-8 p-2" />

                </div>
                <div className="py-2">
                    <input type="text"  className="border rounded-md border-gray-300 w-full h-40 p-2" />

                </div>
                <div className="py-2">
                    <button className="w-full bg-blue-800 rounded-md h-8 text-white border border-blue-800 hover:text-black hover:bg-white transition-all">
                        Kirim Pesan
                    </button>

                </div>
            </form>

        </div>

        </div>
      </div>
    
  );
};

export default Hero2;
