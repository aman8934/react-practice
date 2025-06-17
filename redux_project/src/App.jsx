import { useState } from 'react'
import Todo from './components/todo'
import Addtodo from './components/Addtodo'
import './App.css'


function App() {

  return (
    <>
     <h1 className='text-3xl font-bold underline h-'>Welcome to Redux</h1>
     <Addtodo/>
     <Todo/>
    </>

  )
}

export default App
