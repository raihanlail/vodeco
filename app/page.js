import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./hero/page";
import Hero2 from "./hero-2/page";
import Hero3 from "./hero-3/page";
import Hero4 from "./hero-4/page";
import About from "./components/about";
import LogoList from "./logo/page";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="">
      <div className="bg-hero bg-center bg-cover bg-no-repeat min-h-screen m-0 p-0  ">
        

      <Navbar />
      <Hero />
      </div>
      <Hero2/>
      <Hero3/>
      <About/>
      <Hero4/>
      <LogoList/>
      <Footer/>

      


    </main>
  )
}
