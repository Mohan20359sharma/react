import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div id='right-card' className='h-full relative overflow-hidden w-80 rounded-4xl shrink-0'>
      <img className='h-full w-full object-cover' src={props.img}  alt="" />
      <RightCardContent color={props.color} id={props.id} tag={props.tag}/>
    </div>
  )
}
export default RightCard
