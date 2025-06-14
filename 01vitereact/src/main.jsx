import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Tejas from './Tejas.jsx'
import React from 'react'



function MyApp(){
  return (
    <>
        <h2>Chai aur react</h2>

    </>
  )
}

// const ReactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'clickme to visit google'
// }

const anotherElement= (
  <a href='https//:google.com' target='_blank'>Visit google</a>

)

const anotherUser="  Chai aur react  " //evaluated expression

const reactElement2=React.createElement( //injected by Babel
  'a',{href:'https://google.com',target:'_blank'},
  "Click me to visit google",anotherUser 
)

createRoot(document.getElementById('root'))
.render(

  // <MyApp/>
  // MyApp()
  // <ReactElement/> it is not function fuction was expected 
  // ReactElement // we are defining our own property as it was our custom react
  // anotherElement // it works because we are doing by the rules
  reactElement2 // using with syntax
  // <App/>
)
