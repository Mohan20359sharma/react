import React from 'react'

const Cart = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="" />
        <h1>{props.title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, modi.</p>
        <button>Add Now</button>
    </div>
  )
}

export default Cart
