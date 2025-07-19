import React from 'react'

import Hero from '../components/Hero'
import Product from "../components/Product"
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <Hero/>
     <Product title="Featured Products" category="all" length={12} />
     <div className='flex items-center justify-center mt-5 mb-10'>
        <Link to="/allProducts"  className=' font-Dm-Sans text-sm cursor-pointer  bg-[#2f7eff] text-white py-3 px-6 hover:scale-105 duration-100 transition-transform ease-in'> View all</Link>
     </div>
     
    </>
  )
}

export default Home