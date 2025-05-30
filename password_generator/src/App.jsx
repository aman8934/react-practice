import { useState,useCallback ,useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] =useState(false);
  const [char,setChar]  =useState(false)
  const [Password,setPassword] =useState("")

  const passwordref=useRef(null)
  const copypasswordtoclipboard = useCallback(() => {
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,9)
    window.navigator.clipboard.writeText(Password)
  },[Password])

  const PasswordGenerator = useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+="0123456789"
    if(char) str+="!@#$%^&*()_+{}"
    for (let i = 0; i <length; i++) {
      let char=Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(char)
    } 
    setPassword(pass)
  },[length,number,char,setPassword]

)
  useEffect(() => 
    {
      PasswordGenerator()
    },[length,number,char,PasswordGenerator])
  return (
    <>
      
      <div className="w-full max-w-md shadow-md bg-sky-500 rounded-lg mx-auto my-4 text-center px-4">
        <h1 className="text-4xl text-center text-white py-5">Password generator</h1>
        <div className='flex  mb-4 ' >
          <div id="input_text" className="w-full flex shadow outline-none rounded-lg overflow-hidden  h-full">
          <input 
          type="text" 
          value={Password}
          className="outline-none w-full py-2 px-3 rounded-md"
          placeholder='password'
          ref={passwordref}
          readOnly
        />
        </div>
        <div>
        <button 
        onClick={copypasswordtoclipboard}
        className='outline-none bg-purple-400 text-white px-3 py-0.5 shrink-0 rounded-md h-full'>copy</button>
        </div>
          </div>
        <div className="flex text-center justify-center items-center text-sm">
          <div className="flex">
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label className='flex text-center my-3 px-2'>Length:{length}</label>
          </div>
           <div className="flex  mx-4 rounded-md h-7 text-center my-2">
            <input
            type="checkbox"
            defaultChecked={number}
            id="Numberinput"
            onChange={ () => {
              setNumber( (prev) => !prev)
            }}
            ></input>
            <label className='flex mx-2 my-1' htmlFor='numberInput'>Numbers</label>

            </div>

          <div className="flex  mx-4 rounded-md h-7 text-center items-center my-2">
            <input
            type="checkbox"
            defaultChecked={char}
            id="charinput"
            onChange={ () => {
              setChar( (prev) => !prev)
            }}
            ></input>
            <label className="px-2" htmlFor="charInput"> Characters </label>
          </div>
          
        </div>
          
        </div>
      
    </>
  )
}

export default App
