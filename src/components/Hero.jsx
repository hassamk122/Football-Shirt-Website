import React from 'react'
import { ArrowRight } from 'lucide-react';
import HeroImage from "../assets/hero.webp";
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <div>

        <div className='relative overflow-hidden font-Dm-Sans'>
            <img src={HeroImage} className='w-screen' ></img>

            <div className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex items-center justify-center flex-col '>
                <h1 className='text-5xl lg:text-9xl drop-shadow-xl  drop-shadow-[rgba(0,0,0,0.4)]   text-center p-2 mb-2  lg:mb-10 text-white'>
                Welcome to<br></br> <span className='font-black '>FootyShirts!</span></h1>
                <Link to="/allProducts" className='hidden lg:flex bg-[#2f7eff] text-white px-4 py-2 text-xl items-center justify-center gap-x-2 group cursor-pointer rounded-md'>
                    See Collection<ArrowRight className='group-hover:translate-x-1 transition-all duration-75 ease-in' size={20}  strokeWidth={1.5}  absoluteStrokeWidth={true} /></Link>
            </div>
            
        </div>
        
    </div>
  )
}

export default Hero