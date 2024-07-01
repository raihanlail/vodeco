import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Hero2 = () => {
  return (
    <div className="flex min-h-3.5">
      <div className="grid grid-cols-1 xl:grid-cols-3 mx-12 md:mx-32 gap-12  my-12 md:my-24">
        <div className="flex flex-col justify-between gap-12 xl:gap-0">
          <div className="lg:w-full flex flex-row bg-gray-100 border border-blue-800 shadow-lg h-12 items-center justify-center rounded-3xl">
            <div className="rounded-full w-6 mr-8 text-blue-800 bg-blue-800">
              d
            </div>
            <p className="text-center py-2 text-sm md:text-base text-blue-800">
              CV Vodeco Digital Mediatama
            </p>
          </div>
          <div className="w-full text-3xl md:text-4xl text-center md:text-left font-bold">
            <h1> We Transform Your Online Presence</h1>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-4">

            <a href="">
              <button className="w-32 shadow-2xl h-10 rounded-full bg-blue-800 border border-blue-800 hover:bg-white hover:text-blue-800 transition-all text-white">
                <p>Get Started</p>
              </button>
            </a>
            <a href=" ">
              <button className="w-10 h-10  shadow-2xl rounded-full flex items-center justify-center border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white transition-all">
                <FaWhatsapp />
              </button>
            </a>
            </div>
            <div className="flex flex-col justify-between text-sm pl-2 md:pl-0 md:text-base">
              <div className="font-bold">
                <p>0878-9992-1200 </p>
              </div>
              <div className="font-light">
                <p>Call Us 24/7</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/hero2.png"
            width={400}
            height={400}
            className="hover:scale-105 transition-all"
          />
        </div>
        <div className=" flex flex-col gap-4 font-light">
          <hr className="flex bg-blue-800 h-2" />
          <p>
            Selamat datang di CV Vodeco Digital Mediatama, sebuah tempat para
            anak kreatif yang berdedikasi untuk memberikan solusi digital
            marketing berkualitas tinggi kepada para pelaku bisnis. Kami bangga
            menjadi bagian penting dari industri yang terus berkembang…
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
