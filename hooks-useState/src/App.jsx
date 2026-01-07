import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [color, setColor] = useState('gray')

  function increase() {
    setNum(prev => prev + 1)
    setColor('red')

    setTimeout(() => {
      setColor('gray')
    }, 1000)
  }

  function decrease() {
    setNum(prev => prev - 1)
    setColor('green')

    setTimeout(() => {
      setColor('gray')
    }, 1000)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      
      {/* Circle */}
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: color,
          margin: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '24px'
        }}
      >
        {num}
      </div>

      <br />

      <button onClick={increase}>Increase</button>
      <button onClick={decrease} style={{ marginLeft: '10px' }}>
        Decrease
      </button>
    </div>
  )
}

export default App
