import Image from "next/image";
import React from "react";
import { footer1, footer2, footer3, footer4 } from "../lib/data";
import { FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className=" mx-4 md:mx-32 -mt-12 flex h-48 rounded-lg z-10  flex-col md:absolute md:flex-row bg-banner bg-cover bg-no-repeat">
        <div className=" mx-2 md:mx-16 my-12 flex flex-row md:flex-row justify-between">
          <div className=" flex text-white flex-col  md:justify-between">
            <h1 className=" font-bold text-base md:text-2xl">Butuh Bantuan?</h1>
            <p className="pb-4 pt-2 md:pt-0 text-xs md:text-base">
              Jangan ragu untuk menghubungi ketika anda membutuhkan bantuan
            </p>
          </div>
          <div className="w-1/2 flex items-center gap-12 text-white flex-col  md:flex-row md:justify-between">
            <div className="border-2 border-solid h-12 w-40 md:w-72 text-xs md:text-base flex items-center gap-2 flex-row justify-center border-white rounded-full">
              <FaWhatsapp /> <p>+62 878-9992-1200</p>
            </div>
            <div className="border-2 border-solid h-12 w-40 md:w-72 text-xs md:text-base flex items-center flex-row gap-2 justify-center border-white rounded-full">
              <IoMail /> <p>hello@vodeco.co.id</p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[40rem] -z-10 bg-[#1A1E42]  -mt-6  ">
        <div className=" mx-2 md:mx-32 pt-12 md:pt-48 flex flex-col text-white text-xs md:text-base justify-between h-full">
          <div className="flex flex-row justify-between w-full">
            <div className=" hidden md:block ">
              <Image src="/nav.png" width={300} height={300} />
              <div className="flex flex-row gap-2 w-full  my-2 text-base">
                <div className="border-2 rounded-full p-2">
                  <a href="">
                    <FaInstagram />
                  </a>
                </div>
                <div className="border-2 rounded-full p-2">
                  <a href="">
                    <TiSocialFacebook />
                  </a>
                </div>
                <div className="border-2 rounded-full p-2">
                  <a href="">
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="border-2 rounded-full p-2">
                  <a href="">
                    <FaYoutube />
                  </a>
                </div>
              </div>
              <div className="py-2">
                <h1 className="font-semibold">CV Vodeco Digital Mediatama</h1>
                <p>(Vodeco Media Group)</p>
                <p className="font-bold text-sm py-2">
                  Dibuat sepenuh ❤️ di Bandung, Jawa Barat.
                </p>
              </div>
            </div>
            <div>
              <h1 className="font-semibold">Perusahaan</h1>
              <div className="flex flex-col py-8 gap-2 font-light">
                <ul className="flex flex-col gap-2 font-light text-xs md:text-sm">
                  {footer1?.map((data, i) => (
                    <li>
                      <a href={data.link}> {data.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h1 className="font-semibold">Layanan Kami</h1>
              <div className="flex flex-col py-8 gap-2 font-light">
                <ul className="flex flex-col gap-2 font-light text-xs md:text-sm">
                  {footer2?.map((data, i) => (
                    <li>
                      <a href={data.link}> {data.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h1 className="font-semibold">Program Vodeco</h1>
              <div className="flex flex-col py-8 gap-2 font-light">
                <ul className="flex flex-col gap-2 font-light text-xs md:text-sm">
                  {footer3?.map((data, i) => (
                    <li>
                      <a href={data.link}> {data.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h1 className="font-semibold">Bantuan</h1>
              <div className="flex flex-col py-8 gap-2 font-light">
                <ul className="flex flex-col gap-2 font-light text-xs md:text-sm">
                  {footer4?.map((data, i) => (
                    <li>
                      <a href={data.link}> {data.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/footer.png"
              width={1000}
              height={200}
              className="w-full"
            />
          </div>
          <div className="py-4 text-xs font-extralight flex flex-row justify-between">
            <div className="w-1/3">
            <p>
            Hak cipta dilindungi undang-undang. Semua materi di situs ini memiliki hak cipta dan tidak dapat digunakan kecuali diizinkan oleh Vodeco Media Group / CV. Vodeco Digital Mediatama.

            </p>

            </div>
            <div className="w-1/2 flex flex-row justify-between ">
            <p>
                <a href="">Syarat dan Ketentuan</a>
            </p>
            |
            <p>
                <a href="">Kebijakan dan Privasi</a>
            </p>
            |
            <p>
                Telah dipercaya lebih dari 2300+ klien
            </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
