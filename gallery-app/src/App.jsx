import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const getData=async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`);
    setUserData(response.data);
    console.log(response.data)
  }

  useEffect(function(){
    getData();
  },[index])

  let printUserData=(<h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>)

  if(userData.length>0){
    printUserData=userData.map(function(elem){
      return <div key={elem.id}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <h1 className='fixed bg-red-500 px-2 rounded-2xl text-2xl'>{index}</h1>
      <div className='flex flex-wrap gap-4 justify-center'>
      {printUserData}
      </div>
      <div className='flex justify-center gap-5 m-5'>
        <button className='bg-amber-500 px-3 py-2 rounded' onClick={()=>{
          if(index>1){
            setIndex(index-1)
          }
        }}>prev</button>
        <p className='text-lg relative top-2'>Page - {index}</p>
        <button className='bg-amber-500 px-3 py-2 rounded' onClick={()=>{
          setIndex(index+1)
        }}>next</button>
      </div>
    </div>
  )
}

export default App