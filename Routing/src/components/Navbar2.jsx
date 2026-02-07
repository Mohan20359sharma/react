import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let navigate=useNavigate();
  return (
    <div>
    <button onClick={()=>{
        navigate('/')
      }} className='bg-amber-900 px-4 py-2 mt-2 rounded cursor-pointer active:scale-90'>Return to Home</button>
      <button onClick={()=>{
        navigate(-1)
      }} className='bg-amber-900 px-4 py-2 m-2 rounded cursor-pointer active:scale-90'>Back</button>
      <button onClick={()=>{
        navigate(+1)
      }} className='bg-amber-900 px-4 py-2 m-2 rounded cursor-pointer active:scale-90'>Back</button>
      
    </div>
  )
}

export default Navbar2