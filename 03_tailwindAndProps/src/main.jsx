import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Card  username='Tejas K' btnName='click Me' />
    { <Card  username='Abc XYZ'  /> /*if the button name is not specified */}
  </StrictMode>,
)
