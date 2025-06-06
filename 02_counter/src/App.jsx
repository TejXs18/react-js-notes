import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [count,setCount]=useState(0)

// let count=0

const addValue=()=>{
  // count+=1
  // console.log(count)

  if(count<20) setCount(count+1);
  
}

const removeValue=()=>{
  if(count>0) setCount(count-1)
}

  return (
    <>

    <h2>Click Here ! {count}</h2>
    <h3>Counter : {count}</h3>
    <button
    onClick={addValue}
    >Increase : {count} </button>
    <br /><br />
    <button
    onClick={removeValue}
    >Decrease : {count}</button>
    </>
  )
}

export default App
