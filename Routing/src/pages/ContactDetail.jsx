import React from 'react'
import { useParams } from 'react-router-dom'

const ContactDetail = () => {
    const param=useParams();
    console.log(param.id)
  return (
    <div>
        <h1>{param.id} Contact Details</h1>
    </div>
  )
}

export default ContactDetail