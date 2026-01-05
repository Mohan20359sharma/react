import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='h-10 w-10 bg-white rounded-full items-center flex justify-center text-2xl font-semibold'>{props.id+1}</h2>
        <div>
          <p className='text-lg leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel placeat nemo quia sapiente velit impedit.</p>
          <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className='text-xl  text-white font-semibold px-5 py-1 rounded-full mt-2'>{props.tag}</button>
            <button style={{backgroundColor:props.color}} className='text-xl  text-white font-semibold px-5 py-1 rounded-full mt-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={14} height={14} fill="white"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
