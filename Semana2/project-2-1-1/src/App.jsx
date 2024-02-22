import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  
  const [user, setUser] = useState();

  useEffect(() => {
    const url = 'https://randomuser.me/api/';
    
    axios
      .get(url)
      .then(({ data }) => setUser(data.results[0]))
      .catch((err) => console.log(err))
  }, []);

  return (
    <div>
      <h1>Random User API</h1>
      <h3>{user?.name.title} {user?.name.first} {user?.name.last}</h3>
      <h3>{user?.email}</h3>
    </div>
  )
}

export default App
