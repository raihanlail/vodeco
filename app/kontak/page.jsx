import React from 'react'
import Navbar from '../components/navbar'
import Hero from './hero'
import Hero2 from './hero2'
import Footer from '../components/footer'

const Page = () => {
  return (
    <div>
         <div className='bg-hero bg-cover min-h-3.5'>
            <Navbar/>
            <Hero/>
            
            

        </div>
        <Hero2/>
        <Footer/>
      
    </div>
  )
}

export default Page
