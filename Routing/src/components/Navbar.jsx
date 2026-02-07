import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between px-8 bg-cyan-900 py-3'>
        <h3 className='font-bold text-xl'>Mohan Sharma</h3>
        <div className='flex gap-10'>
          <Link className='font-medium text-lg' to='/'>Home</Link>
          <Link className='font-medium text-lg' to='/about'>About</Link>
          <Link className='font-medium text-lg' to='/product'>Product</Link>
          <Link className='font-medium text-lg' to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar