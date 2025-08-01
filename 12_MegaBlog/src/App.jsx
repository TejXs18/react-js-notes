import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading,setLoading]=useState(true)
  const dispatch = useDispatch()  

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])


  return (
    <>
      <div className='min-h-screen flex flex-wrap'>
        <div className='w-full block'>
          <Header/>
          <main>
         Todo <Outlet/>
          </main>

          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
