import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usercontextprovider from './context/Usercontextprovider'
import Profile from './components/profile'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Usercontextprovider>
      <h1>hey there</h1>
      <Login/>
      <Profile/>
    </Usercontextprovider>
  )
}

export default App
