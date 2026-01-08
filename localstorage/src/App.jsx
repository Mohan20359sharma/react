import React from 'react'

const App = () => {
  const user={
    name:'Mohan Sharma',
    age:20,
    branch:'computer science'
  }
  localStorage.setItem('user',JSON.stringify(user))
  const users = JSON.parse(localStorage.getItem('user'))
  console.log(users)
  localStorage.setItem('name','mohan');
  localStorage.setItem('age',20)
  console.log(localStorage.getItem('name'));
  console.log(localStorage.getItem('age'));
  localStorage.removeItem('name')
  console.log(localStorage.getItem('name'));

  return (
    <div>


    </div>
  )
}

export default App