import React from 'react'
import { useParams } from 'react-router'

function User() {
    const{userid}=useParams()
  return (
    <div className='bg-gray-600 p-4 text-white-600 text-3xl'>User: {userid}</div>
  )
}

export default User