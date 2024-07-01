import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mt-32">
      <div className="mx-8 md:mx-32 my-6 md:my-1 bg-gradient-to-br from-blue-900 h-full md:h-96 via-blue-700 to-blue-500 items-center rounded-md flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image
            src="/about.png"
            width={500}
            height={500}
            className="z-10 -mt-20 mx-12 w-64 md:w-[30rem] "
          />
        </div>
        <div className="md:w-1/2 text-justify mx-1 md:mx-4">
          <div className="mt-2 flex flex-col justify-between text-white gap-2 w-full px-12 md:px-2">
            <h1 className="text-2xl font-bold">
              Your Partner in Digital Success
            </h1>
            <h2 className="font-bold text-lg">Profil Perusahaan</h2>
            <p>
              <span className="font-bold">CV. Vodeco Digital Mediatama</span>{" "}
              adalah sebuah perusahaan creative agency yang berfokus pada jasa
              pembuatan website dan desain branding. Tim kreatif kami terdiri
              dari profesional yang berpengalaman dan memiliki visi yang sama
              dalam menciptakan desain yang menarik dan website yang mudah
              digunakan dan efisien.
            </p>
            <h2 className="font-bold text-lg">Legalitas</h2>
            <p>Kemenkumham : AHU-009044-AH05.30.TAHUN 2022</p>
            <p>NPWP : 61.472.235.3-501.000</p>
            <p>NIB : 0311220094774</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
