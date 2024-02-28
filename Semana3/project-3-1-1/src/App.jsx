import { useEffect, useState, useRef } from 'react'
import './App.css'
import axios from 'axios';
import UserCard from './components/UserCard';

function App() {
  const [users, setUsers] = useState();
  const [search, setSearch] = useState(1)

  useEffect(() => {
    const url = `https://randomuser.me/api/?results=${search}`

    axios
      .get(url)
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err))
  }, [search]);

  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(textInput.current.value.trim());
  }

  return (
    <main className="text-white">
      <h1>Despliegue dinámico con map</h1>

      <form action="" onSubmit={handleSubmit}>
        <input className='text-black' type="number" ref={textInput}/>
        <button className='text-white'>Search</button>
      </form>

      {
        users?.results.map(user => (
          <UserCard
            key={user.id.value}
            user={user}
          />
        ))
      }
    </main>
  )
}

export default App
