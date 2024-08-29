"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const Hero2 = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  
  const handleLogin = (e) => {
    e.preventDefault();
    
      localStorage.setItem('user', JSON.stringify({ email }));
      router.push('/layanan');
   
  };


  return (
    <div className='flex items-center justify-center mb-36 mt-12'>
        <div className='border shadow-md rounded-lg '>
            <div className='flex flex-col gap-4 items-center justify-center px-12 py-4'>
                <h1 className='text-blue-800 font-bold text-xl'>
                    Login
                </h1>
                <form onSubmit={handleLogin} className='gap-'>
                    <div className='flex flex-col my-2'>
                        <label htmlFor="email" className='text-sm py-2 font-light'>Email</label>
                        <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-72 border-b rounded-md h-8 p-4 text-sm' placeholder='Input your email' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label htmlFor="password" className='text-sm py-2 font-light'>Password</label>
                        <input type="password" name="password" id="password"  value={password}
          onChange={(e) => setPassword(e.target.value)} className='w-72 border-b rounded-md h-8 p-4 text-sm' placeholder='Type your password' />
                    </div>
                    <div className='flex items-center justify-center py-4'>
                        <button type='submit' className='w-48 bg-blue-800 h-8 rounded-2xl text-white'>
                            LOGIN


                        </button>
                    </div>
                </form>
                {error && <p>{error}</p>}

            </div>

        </div>
      
    </div>
  )
}

export default Hero2
