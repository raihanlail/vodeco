import Image from "next/image";
import React from "react";

const Jumbotron = () => {
  return (
    <div className="mx-12 md:mx-32  my-12 md:my-20 flex flex-col md:flex-row justify-between md:h-72">
      <div className="flex flex-col mb-20 justify-between w-full md:w-2/3 gap-8 md:gap-0">
        <Image src="/tentang.png" width={800} height={800} />
        <div className="text-white text-lg md:text-2xl">
          <h2>#bisnishebatdariwebsite #tumbuhbersama</h2>
        </div>
      </div>
      <div className="flex flex-col  w-full md:w-1/2 text-white font-extralight text-sm md:text-base">
        <p className="pb-6">
          Berdiri pada tahun 2022, Vodeco adalah penyedia layanan jasa pembuatan
          website, digital marketing, branding dan SEO. Vodeco berfokus pada
          kualitas layanan dan optimalisasi berkelanjutan. Kami akan terus
          memberikan layanan yang terbaik untuk semua pelanggan kami. Sampai
          saat ini Vodeco telah melayani ribuan pelanggan dari dalam negeri
          maupun luar negeri.
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
