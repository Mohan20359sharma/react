import React, { useState } from 'react'
import Question from './components/Question';
import Surprise from './components/Surprise';
import { Route, Routes, useNavigate } from "react-router-dom"
import Wrong from './components/Wrong';

const App = () => {
  const [date, setDate] = useState('')
  const navigate = useNavigate();
  const submitHandler=(e)=>{
  e.preventDefault();
  if(date==="2025-07-23"){
    navigate('/suprise');
  }else{
    navigate('/wrong');
  }
  
  }
  return (
    <Routes>
      <Route path='/' element={<Question date={date} setDate={setDate} submitHandler={submitHandler} />} />
      <Route path='/suprise' element={<Surprise/>}/>
      <Route path='/wrong' element={<Wrong/>} />
    </Routes>
  )
}

export default App