import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" mx-12 md:mx-32  my-12 md:my-24 flex flex-col md:flex-row justify-between md:h-96 ">
      <div className="flex flex-col justify-between w-full md:w-1/2 gap-8 md:gap-0 ">
        <Image src="/jumbotron2.png" width={300} height={200} />
        <Image src="/jumbotron.png" width={700} height={700} />
        <div className="text-white text-base text-justify">
          <p>
            Telah dipercaya lebih dari 2300+ klien yang terdaftar dari seluruh
            Indonesia. Kami siap memberikan yang terbaik untuk memberikan
            teknologi terbaik sesuai visi kami untuk digitalisasi jutaan bisnis
            di Indonesia. Bergabunglah dan temukan kemudahan menciptakan website
            dan kebutuhan branding digital bisnis Anda bersama Vodeco!
          </p>
        </div>
        <div className="text-white text-lg md:text-2xl">
          <h2>#bisnishebatdariwebsite #tumbuhbersama</h2>
        </div>
      </div>
      <div className="w-full md:w-1/2 ml-0 md:ml-32 flex items-center">
        <Image
          src="/robot.png"
          width={500}
          height={700}
          className="hover:scale-105 transition-all"
        />
      </div>
    </div>
  );
};

export default Hero;
