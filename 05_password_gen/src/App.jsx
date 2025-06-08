import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
const [length,setLength]=useState(1)
const [number,setNumber]=useState(false)
const [symbol,setSymbol]=useState(false)
const[password,setPassword]=useState('')

const passRef=useRef(null)

const passGen = useCallback(()=>{

  let pass=''
  let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(setNumber) str+="0123456789"
  if(setSymbol) str+="{}[]!@#$%^&*()+=-`~<>:;'"

  for (let i = 0; i < length; i++) {
    let char=Math.floor(Math.random()*str.length+1)
    
    pass+=str.charAt(char)
    
  }
  setPassword(pass)
},[length,symbol,number,setPassword])

  const copyToClipBoard=useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,50)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passGen()
  },[length,number,symbol,passGen])

  return (
    <>
   <div id="main"
   className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500"
   ><h1 className='text-white text-center my-3'>Password Generator</h1>
   <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input 
    type="text" 
    value={password}
    className='outline-none w-full py-1 px-3 border-2 rounded-xl'
    placeholder='Password'
    readOnly
    ref={passRef}
    />
    <button
    onClick={copyToClipBoard}
    className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
    >Copy</button>
   </div>
   
   <div
   className='flex text-sm gap-x-2'>
    <div
    className='flex items-center gap-x-1'
    >
<input type="range" 
min={6}
max={50}
className='cursor-pointer'
onChange={(e)=>{setLength(e.target.value)}}
/>
<label > length : {length}</label>

</div>
<div className="flex items-center gap-x-1">
            <input type="checkbox" 
            onChange={()=>{setNumber((prev)=>!prev)}}
            />
            <label >Numbers: </label>
</div>
<div className="flex items-center gap-x-1">
            <input type="checkbox" 
            onChange={()=>{setSymbol((prev)=> !prev)}}
            />
            <label >Symbols </label>
</div>
   </div>
   
   </div> 
    </>
  )
}

export default App
