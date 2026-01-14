import React from 'react'

const Card = (props) => {
    console.log(props);
    
  return (
    <div>
        <a href={props.elem.url} target="_blank" rel="noopener noreferrer">

         <div className='h-40 w-44 overflow-hidden  rounded'>
        <img className='h-full w-full object-cover rounded' src={props.elem.download_url} alt="" />
      </div>
      <h3 className='font-bold text-lg'>{props.elem.author}</h3>
        </a>
    </div>
  )
}

export default Card