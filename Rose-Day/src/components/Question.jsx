import React from 'react'

const Question = ({date,setDate,submitHandler}) => {
  return (
    <div className='w-full h-screen bg-rose-400'>
      <div className='bg-rose-500  rounded py-5'>
        <h1 id='que' className=' flex text-rose-300 justify-center items-center text-2xl'>IF YOU WRITE OUR FIRST MEETING DATE THEN YOU HAVE A SURPRISE 💖</h1>
      </div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}  className='flex flex-col mt-40 items-start'>
        <input required type="date" value={date} onChange={(e)=>{
          setDate(e.target.value);
        }} className='bg-rose-200 w-70 ml-10  px-2 text-2xl py-3 shadow-2xs shadow-gray-200 shadow-2xl'/>
        <button className='mt-5 bg-rose-600 w-40 ml-22 text-white text-2xl rounded'>Submit</button>
      </form>
    </div>
  )
}

export default Question