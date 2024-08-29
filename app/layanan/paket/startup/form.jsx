"use client"
import { sendContactForm } from "@/lib/api";
import React, { useState } from "react";

const initValues = {
  type: "Startup",
  name: "",
  email: "",
  hp: "",
  types: "",
  ref: "",
  desc: "",
  price: "Rp. 649.000",
};

const initState = {
  values: initValues,
  errors: {},
  isModalOpen: false,
  modalMessage: "",
};

const Form = () => {
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
      setState((prev) => ({ ...prev, errors: newErrors, isModalOpen: true, modalMessage:"Pemesanan gagal, harap isi form dengan lengkap." }));
    } else {
      // Submit form
      console.log("Form submitted successfully:", values);
      setState((prev) => ({ ...prev, isModalOpen: true, modalMessage:"Pemesanan berhasil!, proses pembayaran akan dilanjutkan via WA" }));
    }
  };

  const onSubmit =  async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
      isModalOpen: true,
    }));
    await sendContactForm(values)
  }
  const closeModal = () => {
    setState((prev) => ({
      ...prev,
      isModalOpen: false,
    }));
  };

  return (
    <div className="min-h-full my-28">
      <div
        className="flex flex-col mx-12 md:mx-24 lg:mx-48
         my-12 items-center justify-center"
      >
        <h1>
          Silahkan isi form berikut. Pembayaran akan dilakukan setelah
          pemesanan.
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
          <div className="py-2 hidden">
            <label htmlFor="type">Tipe</label>
            <input
              type="text"
              name="type"
              id="type"
              className="border h-12 p-4 rounded-xl w-full"
              value={values.type}
              onChange={handleChange}
            />
            {errors.type && (
              <span className="text-red-500">{errors.type}</span>
            )}
          </div>

          <div className="py-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border h-12 p-4 rounded-xl w-full"
              placeholder="Masukkan Nama"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name}</span>
            )}
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="py-2 w-full lg:w-1/2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border h-12 p-4 rounded-xl w-full"
                placeholder="Masukkan Alamat Email Aktif"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
            </div>
            <div className="py-2 w-full lg:w-1/2">
              <label htmlFor="hp">No Telepon Aktif</label>
              <input
                type="text"
                id="hp"
                name="hp"
                className="border h-12 p-4 rounded-xl w-full"
                placeholder="Masukkan Nomor Telepon Aktif"
                onChange={handleChange}
                value={values.hp}
              />
              {errors.hp && <span className="text-red-500">{errors.hp}</span>}
            </div>
          </div>

          <div className="py-2">
            <label htmlFor="types">Pilih Jenis Website</label>
            <select
              id="types"
              name="types"
              className="border h-14 p-4 rounded-xl w-full"
              onChange={handleChange}
              value={values.types}
            >
              <option value="Toko Online">Toko Online</option>
              <option value="Company Profile">Company Profile</option>
              <option value="Profil Usaha">Profil Usaha</option>
              <option value="Sales Marketing">Sales Marketing</option>
              <option value="Portal Berita">Portal Berita</option>
              <option value="Lainnya">Lainnya</option>
            </select>
            {errors.types && (
              <span className="text-red-500">{errors.types}</span>
            )}
          </div>

          <div className="py-2">
            <label htmlFor="ref">Referensi Website (Contoh)</label>
            <input
              type="text"
              id="ref"
              name="ref"
              className="border h-12 p-4 rounded-xl w-full"
              placeholder="Masukkan URL"
              onChange={handleChange}
              value={values.ref}
            />
            {errors.ref && <span className="text-red-500">{errors.ref}</span>}
          </div>

          <div className="py-2">
            <label htmlFor="desc">Deskripsi</label>
            <input
              type="text"
              id="desc"
              name="desc"
              className="border h-40 p-4 rounded-xl w-full"
              placeholder="Berikan deskripsi lebih lanjut tentang website yang anda inginkan"
              onChange={handleChange}
              value={values.desc}
            />
            {errors.desc && (
              <span className="text-red-500">{errors.desc}</span>
            )}
          </div>

          <div className="py-2">
            <label htmlFor="price">Total Harga</label>
            <input
              type="text"
              id="price"
              name="price"
              className="border h-12 p-4 rounded-xl w-full"
              onChange={handleChange}
              value={values.price}
            />
            {errors.price && (
              <span className="text-red-500">{errors.price}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full h-14 bg-blue-800 text-white rounded-lg hover:text-black border border-blue-800 hover:bg-white transition-all"
            
            onClick={onSubmit}
           
          >
            Pesan Sekarang
          </button>
        </form>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4">{modalMessage.includes("berhasil") ? "Pemesanan berhasil" : "Pemesanan gagal"}</h2>
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

export default Form;
