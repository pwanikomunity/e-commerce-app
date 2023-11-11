import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className='flex'>
        <div><Navbar /></div>
        <div className='ml-[7rem] mt-[4rem]'>
            <Outlet />
        </div>
        
    </div>
  )
}
