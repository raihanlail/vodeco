"use client"
import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import Herolayanan from './herolayanan'
import Herolayanan2 from './herolayanan2'
import Herolayanan3 from './herolayanan3'
import Grid from './grid'
import Porto from './porto'
import Footer from '../components/footer'
import { useRouter } from 'next/navigation'



const Page = () => {
  
 
  return (
    <div>
        <div className='bg-hero bg-cover min-h-3.5'>
            <Navbar/>
            <Herolayanan/>
            

        </div>
        <Herolayanan2/>
        <Herolayanan3/>
        <Grid/>
        <Porto/>
        
        <Footer/>
      
    </div>
  )
}

export default Page
