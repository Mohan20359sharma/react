import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Herotext from './Herotext'
import Arrow from './Arrow'

const LeftSection = () => {
  return (
    <div className=' h-full w-1/3 flex flex-col justify-between'>
      <Herotext/>
      <Arrow/>
     
    </div>
  )
}

export default LeftSection
