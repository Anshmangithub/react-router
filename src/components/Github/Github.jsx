import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
  
    const data  = useLoaderData();
    // useEffect(()=>{
    // fetch('https://api.github.com/users/Anshmangithub').then((data) => data.json())
    //  .then((res )=>{
    //     console.log(res)
    //     setdata(res)
    //  })
    // },[] )

  return (
    <div className='bg-gray-200 text-center m-4 p-4 text-3xl'  >
        
    <h3>Github bio : <small>{data.bio}</small></h3>
    <img src={data.avatar_url} alt="ansh pic"  className='mt-5 width-300'/>
    </div>
  )
}

export default Github

export const gihubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/Anshmangithub')
    return response.json();
}