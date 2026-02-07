import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className="flex gap-10 justify-center py-4">
        <Link className='text-xl font-semibold' to="/product/men">Men</Link>
        <Link className='text-xl font-semibold' to="/product/women">women</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Product