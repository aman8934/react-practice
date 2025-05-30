
import './App.css'
import { useState } from 'react'

function App() {
  let [counter,setCounter]= useState(15)
  
  // let counter=15
  const Addvalue = () => {
    console.log("aman",counter)
    counter=counter+1
    if(counter>=0){
    setCounter(counter)
  }}
  const remove_val =() => {
    counter=counter-1
    if(counter>=0){
    setCounter(counter)
  }}

  return (
    <>

      <div className="main">
        <div className="content">
          <h1 className="text">hello! : {counter} </h1>
          <button onClick={Addvalue} className="my-button">Click Me {counter}</button>
          <br />
          <button onClick={remove_val} className="do">do {counter}</button>
         </div>
      </div>
    </>
  )
}

export default App
