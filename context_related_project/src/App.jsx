import { useEffect, useState } from 'react'

import './App.css'

import { TodoProvider } from './context/context'
import TodoForm from './components/todoform.jsx'
import TodoItem from './components/Todoitem.jsx'

function App() {
  const [todos,setTodos] = useState([])
  
  const addTodo = (todo) => {
    setTodos( (prev) => [{
      id : Date.now(), ...todo
    }, ...prev])
    
  }
  const updatetodo = (id,todo)  => {
    setTodos( (prev) =>
        prev.map((prevtodo) => (
          prevtodo.id===id ? todo : prevtodo
        ))
    )
  }

  const deletetodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) =>{
       setTodos((prev) => prev.map((prevtodo) => 
        prevtodo.id === id ? {...prevtodo, completed : !prevtodo.completed}:prevtodo))
  }

useEffect(() => {
    console.log("hii");
    
    const todos=JSON.parse(localStorage.getItem("todos"))
    
    if(todos && todos.length>0) {
      setTodos(todos)
      
      
     
    }
    // else{
    //   console.log("error")
    // }
},[])

useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos))
}, [todos])

  return (
    <TodoProvider value={{todos,addTodo,updatetodo,deletetodo,toggleComplete}}>
        <h1 className="text-center text-3xl bg-gray-50">Welcome</h1>
        <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      
                      

                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        
                        {todos.map((todo) =>(
                          
                          <div className='w-full' key = {todo.id}>
                            <TodoItem todo={todo}/>
                          </div>

                        )) }
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
