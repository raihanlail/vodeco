import React from 'react'
import Navbar from '../components/navbar'
import Hero from './hero'
import Hero2 from './hero2'
import Hero3 from './hero3'
import Hero4 from './hero4'
import Hero5 from './hero5'
import Banner from './banner'
import Footer from '../components/footer'

const Page = () => {
  return (
    <div>
        <div className='bg-hero bg-cover min-h-3.5'>
            <Navbar/>
            <Hero/>
        </div>
        <Hero2/>
        <Hero3/>
        <Hero4/>
        <Hero5/>
        <Banner/>
        <Footer/>
      
    </div>
  )
}

export default Page
