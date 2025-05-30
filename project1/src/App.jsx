import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState('olive')

  return (
    
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl gap-3">

            <button onClick={() => setColor("red")} className="outline-none px-3 py-1 rounded-3xl text-white shadow-lg" 
            style={{backgroundColor:"red"}}
            >Red</button>

            <button onClick={() => setColor("green")} className="outline-none px-3 py-1 rounded-3xl text-white shadow-lg" 
            style={{backgroundColor:"green"}}
            >Green</button>

            <button onClick={() => setColor("blue")} className="outline-none px-3 py-1 rounded-3xl text-white shadow-lg" 
            style={{backgroundColor:"Blue"}}
            >Blue</button>
            <button onClick={() => setColor("black")} className="outline-none px-3 py-1 rounded-3xl text-white shadow-lg" 
            style={{backgroundColor:"black"}}
            >Blue</button></div>

            
        </div>
      </div>
    
  )
}

export default App
