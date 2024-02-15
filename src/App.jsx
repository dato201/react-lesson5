import { useContext } from 'react'
import './App.css'
import { UserContext } from './context/UserContext/UserContext'

function App() {
  let deta = useContext(UserContext);
  deta.name = 'lasha'

  console.log(deta);

  return (
    <>
      <div>
        <input type="text" placeholder='name' />
        <input type="text" placeholder='lastName' />
        <input type="email" placeholder='email' />
        <input type="number" placeholder='age' />
        <input type="text" placeholder='gender' />
        <button></button>
      </div>
    </>
  )
}

export default App
