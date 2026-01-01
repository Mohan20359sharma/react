import React from 'react'
import Cart from './Cart'

const Container = (props) => {
  return (
    <div className='container'>
      <Cart title='Road trip' img='https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg' />
      <Cart title='flower' img='https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg' />
      <Cart title='Rose pink' img='https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg' />
      <Cart title='Hot air ballon' img='https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg' />
    </div>
  )
}

export default Container
