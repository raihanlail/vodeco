"use client";

import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLayananClick = (e) => {
    if (!user) {
      e.preventDefault(); // Prevent the default link behavior
      router.push('/login'); // Redirect to the login page
    }
  };

  return (
    <div>
      <header>
        <nav className="text-white">
          <div className="flex flex-col max-w-screen justify-between py-4 md:py-8 mx-8 md:mx-32 md:flex-row">
            <div className="hidden lg:flex">
              <Image src="/nav.png" width={300} height={300} alt="Nav" />
            </div>
            <div className={`flex flex-col md:flex-row gap-4 ${open ? 'flex' : 'hidden md:flex'}`}>
              <ul className="flex flex-col md:flex-row gap-8 pt-4">
                <li>
                  <Link href="/" className="hover:text-blue-300 transition-all">Home</Link>
                </li>
                <li>
                  <Link href="/tentang" className="hover:text-blue-300 transition-all">Tentang</Link>
                </li>
                <li>
                  <Link href={user ? "/layanan" : "/login"} className="hover:text-blue-300 transition-all" onClick={handleLayananClick}>
                    Layanan
                  </Link>
                </li>
                <li>
                  <Link href="/portofolio" className="hover:text-blue-300 transition-all">Portofolio</Link>
                </li>
                <li>
                  <Link href="/aktivitas" className="hover:text-blue-300 transition-all">Aktivitas</Link>
                </li>
                <li>
                  <Link href="/kontak" className="hover:text-blue-300 transition-all">Kontak</Link>
                </li>
              </ul>
              <div></div>
              <Link href="/login">
                <button className="w-full md:w-32 text-blue-800 h-8 bg-white hover:bg-blue-400 hover:text-white transition-all mt-8 md:mt-2 rounded-2xl">
                  Login
                </button>
              </Link>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl transition-all absolute text-color-light right-12 cursor-pointer top-3 md:hidden"
            >
              {open ? <IoMdClose /> : <BiMenu />}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
