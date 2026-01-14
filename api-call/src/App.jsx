import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    
    setUsers(response.data);
    console.log(response.data);
    
  };

  return (
    <div>
      <button onClick={getData}>Click me</button>

      {
        users.map((user,idx) => (
         <div key={idx}>
          <h1>{user.id}</h1>
          <h3>{user.title}</h3>
         </div>
        ))
      }
    </div>
  );
};

export default App;
