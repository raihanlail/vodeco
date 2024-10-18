import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FcIdea } from "react-icons/fc";
import { FaRegLightbulb } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const Herolayanan3 = () => {
  return (
    <div className="h-full bg-gradient-to-t   from-blue-950 via-blue-800 to-blue-700 flex flex-col">
      <div className="flex flex-col text-white items-center ">
        <Image src="/layanan.png" width={2000} height={200} />
        <div className="flex flex-col md:flex-row  mx-12 md:mx-32">
          <div className=" flex flex-col w-full md:w-1/2  py-12 text-white gap-2">
            <p className="text-sm">Harga Paket Website </p>
            <h1 className="text-xl md:text-4xl font-semibold pr-20">
              Start Building Your Professional Website Now{" "}
            </h1>
            <p className="text-sm pt-2 font-light pr-20">
              Dapatkan harga paket pembuatan website dan landing page untuk
              semua kebutuhan bisnis maupun perusahaan dan pribadi Anda yang
              terbaik
            </p>
            <div className=" bg-gradient-to-tr from-[#5728DC] to-[#5A2BDE] rounded-xl max-w-full h-20 my-4 flex flex-row items-center justify-center">
              <div className="pr-4 text-lg font-bold ">
                <FaRegLightbulb />
              </div>
              <div className="flex flex-col text-sm ">
                <h1 className="font-semibold">Smart Creative Ideas</h1>
                <p>Solusi website menarik, inovatif, dan sesuai kebutuhan</p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="/oranglampu.png"
              width={300}
              height={300}
              className="md:-mt-24 mx-16"
            />
          </div>
        </div>
        <div className=" bg-gradient-to-tr from-[#5728DC] to-[#5A2BDE] rounded-xl max-w-full mx-8 px-8 md:px-56 md:-mt-8 h-20 my-4 flex flex-row items-center justify-center">
          <div className="pr-4 text-lg font-bold ">
            <IoSettings />
          </div>
          <div className="flex flex-col text-sm ">
            <h1 className="font-semibold">Useful Development</h1>
            <p>Desain website kami pasti trendi, resposive, & SEO friendly</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 mx-4 lg:mx-32 my-12  ">
          <div className="  bg-gradient-to-b from-[#29213c] via-[#452d68] rounded-2xl to-[#29213c]">
            <div className="px-4 py-4 flex flex-col text-white text-center ">
              <h1 className="py-4 text-lg">Paket Startup</h1>
              <h1 className="text-2xl font-bold py-4 text-center">
                Rp. 649.000-,
              </h1>
              <div className="bg-white rounded-t-2xl text-black text-center text-xs h-28">
                <p className="py-4 px-4">
                  Paket desain website ini cocok untuk Anda yang baru memulai
                  bisnis dan membutuhkan website sederhana yang mudah diakses.
                </p>
              </div>
              <div className="-mt-4">
                <Link href="https://wa.me/082138985146">
                <button className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 p-3 text-center rounded-full w-40">
                  Booking Now
                </button>
                </Link>
                
              </div>
              <div className="py-4">
                <h1>
                  Perpanjangan <span className="font-bold"> 500rb</span>
                </h1>
              </div>
              <div className="py-4">
                <button className="bg-blue-800 w-full rounded-md font-semibold h-8">
                  Fitur Paket
                </button>
              </div>
            </div>
          </div>
          <div className="  bg-gradient-to-tr from-blue-900 via-blue-800 border border-blue-700 rounded-2xl to-blue-700">
            <div className="px-4 py-4 flex flex-col text-white text-center ">
              <h1 className="py-4 text-lg">Paket Ekonomis</h1>
              <h1 className="text-2xl font-bold py-4 text-center">
                Rp. 1.500.000-,
              </h1>
              <div className="bg-white rounded-t-2xl text-black text-center text-xs h-28">
                <p className="py-4 px-4">
                  Paket desain website ini sangat cocok untuk Anda yang
                  membutuhkan website dengan fitur tambahan seperti e-commerce,
                  blog, dan lainnya.
                </p>
              </div>
              <div className="-mt-4">
                <Link href=" https://wa.me/082138985146">
                
                <button className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 p-3 text-center rounded-full w-40">
                  Booking Now
                </button>
                </Link>
              </div>
              <div className="py-4">
                <h1>
                  Perpanjangan <span className="font-bold"> 600rb</span>
                </h1>
              </div>
              <div className="py-4">
                <button className="bg-blue-800 w-full rounded-md font-semibold h-8 border border-blue-950">
                  Fitur Paket
                </button>
              </div>
            </div>
          </div>
          <div className="  bg-gradient-to-b from-[#29213c] via-[#452d68] rounded-2xl to-[#29213c]">
            <div className="px-4 py-4 flex flex-col text-white text-center ">
              <h1 className="py-4 text-lg">Paket Business</h1>
              <h1 className="text-2xl font-bold py-4 text-center">
                Rp. 2.000.000-,
              </h1>
              <div className="bg-white rounded-t-2xl text-black text-center text-xs h-28">
                <p className="py-4 px-4">
                  Paket desain website ini cocok untuk Anda yang membutuhkan
                  website sebagai profil bisnis guna meningkatkan online
                  presence.
                </p>
              </div>
              <div className="-mt-4">
                <Link href="https://wa.me/082138985146">

                <button className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 p-3 text-center rounded-full w-40">
                  Booking Now
                </button>
                </Link>
              </div>
              <div className="py-4">
                <h1>
                  Perpanjangan <span className="font-bold"> 700rb</span>
                </h1>
              </div>
              <div className="py-4">
                <button className="bg-blue-800 w-full rounded-md font-semibold h-8 ">
                  Fitur Paket
                </button>
              </div>
            </div>
          </div>
          <div className="  bg-gradient-to-b from-[#29213c] via-[#452d68] rounded-2xl to-[#29213c]">
            <div className="px-4 py-4 flex flex-col text-white text-center ">
              <h1 className="py-4 text-lg">Paket Expert</h1>
              <h1 className="text-2xl font-bold py-4 text-center">
                Rp. 3.000.000-,
              </h1>
              <div className="bg-white rounded-t-2xl text-black text-center text-xs h-28">
                <p className="py-4 px-4">
                  Paket desain website ini cocok untuk Anda yang membutuhkan
                  website dengan fitur khusus yang lebih kompleks dan desain
                  yang unik.
                </p>
              </div>
              <div className="-mt-4">
                <Link href="https://wa.me/082138985146">
                
                <button className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 p-3 text-center rounded-full w-40">
                  Booking Now
                </button>
                </Link>
              </div>
              <div className="py-4">
                <h1>
                  Perpanjangan <span className="font-bold"> 50%</span>
                </h1>
              </div>
              <div className="py-4">
                <button className="bg-blue-800 w-full rounded-md font-semibold h-8">
                  Fitur Paket
                </button>
              </div>
            </div>
          </div>

          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Herolayanan3;
