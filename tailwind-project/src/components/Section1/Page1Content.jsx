import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Page1Content = (props) => {
  console.log(props)
  return (
    <div className='py-3 pt-10 pb-10 flex justify-between gap-10 items-center px-18 h-[90vh]'>
      <LeftSection/>
      <RightSection users={props.users}/>
    </div>
  )
}

export default Page1Content
