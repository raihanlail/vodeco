"use client"
import { sendContactMail } from "@/lib/api";
import Image from "next/image";
import React, { useState } from "react";


const initValues = {
  
  name: "",
  email: "",
  hp: "",
  message: "",
};
const initState = {
  values: initValues,
  errors: {},
  isModalOpen: false,
  modalMessage: "",
};
const Hero2 = () => {
  const [state, setState] = useState(initState);
  const { values, errors, isLoading,isModalOpen, modalMessage } = state;
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validasi setiap field
    Object.keys(values).forEach((key) => {
      if (!values[key]) {
        newErrors[key] = `${key} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setState((prev) => ({ ...prev, errors: newErrors, isModalOpen: true, modalMessage:"Pesan gagal dikirimkan, harap isi form dengan lengkap." }));
    } else {
      // Submit form
      console.log("Form submitted successfully:", values);
      setState((prev) => ({ ...prev,  values: initValues,  // Kosongkan form setelah submit
        errors: {}, isModalOpen: true, modalMessage:"Pesan berhasil dikirimkan!" }));
    }
  };

  const onSubmit =  async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
      isModalOpen: true,
    }));
    await sendContactMail(values)
  }
  const closeModal = () => {
    setState((prev) => ({
      ...prev,
      isModalOpen: false,
    }));
  };
  return (
    <div className={`mx-4 lg:mx-32 mb-32 mt-8 flex flex-col lg:flex-row  `}>
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
          <Image src="/alamat.png" width={100} height={100}/>
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
            <form onSubmit={handleSubmit} className="gap-4 w-full">
                <div className="py-2">
                    <input type="text" placeholder="Nama" id="name"
              name="name"  value={values.name}
              onChange={handleChange} className="border rounded-md border-gray-300 w-full h-8 p-2" />

                </div>
                <div className="py-2">
                    <input type="email" id="email"
                name="email" onChange={handleChange}
                value={values.email} placeholder="E-mail" className="border rounded-md border-gray-300 w-full h-8 p-2" />

                </div>
                <div className="py-2">
                    <input type="text" id="hp"
                name="hp" placeholder="Nomor HP" onChange={handleChange}
                value={values.hp} className="border rounded-md border-gray-300 w-full h-8 p-2" />

                </div>
                <div className="py-2">
                    <input type="text" id="message" name="message" onChange={handleChange}
                value={values.message}  className="border rounded-md border-gray-300 w-full h-40 p-2" />

                </div>
                <div className="py-2">
                    <button onClick={onSubmit} className="w-full bg-blue-800 rounded-md h-8 text-white border border-blue-800 hover:text-black hover:bg-white transition-all">
                        Kirim Pesan
                    </button>

                </div>
            </form>

        </div>


        </div>
        {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4">{modalMessage.includes("berhasil") ? "Pesan Terkirim" : "Pesan Tidak Terkirim"}</h2>
          <p>{modalMessage}</p>
            <button
              className="mt-4 bg-blue-800 text-white py-2 px-4 rounded"
              onClick={closeModal}
            >
              tutup
            </button>
          </div>
        </div>
      )}
      </div>
    
  );
};

export default Hero2;
