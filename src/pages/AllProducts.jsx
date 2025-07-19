import React from 'react'
import Product from '../components/Product'
function AllProducts() {
  return (
      <main className='min-h-screen'>
             <Product title="All Products" category="all" length={100} />
    </main>
  )
}

export default AllProducts