import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/getusers').then((users) => {
      setUsers(users.data)
    }).catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h3>Surya Pratap</h3>
      <h3>Maisha infotech 123</h3>
    </div>
    // <div>
    //   {
    //     users.map(user => {
    //       return <div>
    //         <h3>{user.name}</h3>
    //         <h3>{user.position}</h3>
    //       </div>
    //     })
    //   }
    // </div>
  )
}

export default App
