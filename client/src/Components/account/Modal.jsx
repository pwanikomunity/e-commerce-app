import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Modal() {
  const navigate = useNavigate();
  return (
    <div className='shadow-lg w-[10rem] h-[7rem] bg-white mt-[-83%] z-[1] float-right mr-[15%] p-[1rem]'>
        <button className='btn-primary  h-[2rem]' onClick={()=>{navigate('/login')}}>Sign In</button>
        <h1 className='text-center'>My Account</h1>
        <h1 className='text-center'>Orders</h1>
    </div>
  )
}
