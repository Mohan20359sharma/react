import React from 'react'
import RightCard from './RightCard'

const RightSection = (props) => {
  console.log(props.users)
  return (
    <div id='right' className='h-full w-2/3 p-6 flex flex-nowrap gap-5 overflow-x-auto rounded-4xl'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>;
      })}
    </div>
  )
}

export default RightSection
