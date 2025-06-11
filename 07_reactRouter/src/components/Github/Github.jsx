import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    const data=useLoaderData()
//     const [data,setData]=useState([])
//    useEffect(()=>{
//     fetch('https://api.github.com/users/hiteshchoudhary')
//     .then(response =>response.json())
//     .then(data => setData(data))
//    },[])
    



  return (
    <div className='  align-middle text-center m-4 bg-gray-400'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="Git Picture"   
    
    width={300} />
    </div>
  )
}

export default Github;


export const GithubInfoLoader=async ()=> {
    const response =await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}