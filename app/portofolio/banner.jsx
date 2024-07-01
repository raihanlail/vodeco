import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="md:mx-32 mx-4 mb-28 mt-24 rounded-t-3xl bg-gradient-to-tr from-blue-800 via-blue-700 lg:h-72 to-blue-600  ">
        <div className="flex flex-col lg:flex-row mx-8 py-24">

      <div className="lg:w-3/4 flex flex-col text-white gap-2 ">
        <h1 className="text-3xl font-semibold">Let's discover us!</h1>
        <p className="text-sm font-extralight">
          Kami pastikan memberikan pelayanan terbaik untuk kepuasan Anda. Vodeco
          siap menjadi solusi terbaik untuk Anda
        </p>
      </div>
      <div className="lg:w-1/4 hidden lg:block">
        <Image src="/phone.png" width={200} height={200} className="-mt-[11.3rem] ml-[8.2rem]" />
      </div>
        </div>
    </div>
  );
};

export default Banner;
