import React from 'react'
import Navbar from '../components/navbar'
import Jumbotron from '../components/jumbotron'
import Jumbotron2 from '../components/jumbotron2'
import About from '../components/about'
import Peta from '../components/peta'
import Footer from '../components/footer'

const Page = () => {
  return (
    <div>
          <div className='bg-hero bg-cover min-h-3.5'>
      <Navbar/> 
      <Jumbotron/>
    </div>
    <Jumbotron2/>
    <About/>
    <Peta/>
    <Footer/>

    </div>


  
  )
}

export default Page
