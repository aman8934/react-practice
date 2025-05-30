import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Image from './components/image'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 username="welcome!">
      Hello world!
    </h1>
    
    <Image username="welcome!"/>
    </>
  )
}

export default App
