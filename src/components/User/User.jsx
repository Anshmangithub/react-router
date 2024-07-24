import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
    const {userid} = useParams();
  return (
    <div className='w-full bg-green-300 text-red-400' >User : {userid}</div>
  )
}

export default User