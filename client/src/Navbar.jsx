import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex'>
        <div className="h-screen w-[6rem] border-r shadow-2xl fixed">
        
        <ul className='mt-[4rem] flex flex-col space-y-[2rem] ' >
            <li className='m-3 w-[3.4rem] ml-5 h-[3.4rem] '>
                <NavLink to='products'>Products</NavLink>
            </li>
            <li className='m-3 w-[3.4rem] ml-5 h-[3.4rem] '>
            <NavLink to='orders'>Orders</NavLink>
            </li>
            <li className='m-3 w-[3.4rem] ml-5 h-[3.4rem] '><NavLink to='transactions'>Transactions</NavLink></li>
            <li className='m-3 w-[3.4rem] ml-5 h-[3.4rem] '><NavLink to='profile'>Profile</NavLink></li>
            <li className='m-3 w-[3.4rem] ml-5 h-[3.4rem] '><NavLink to='settings'>Settings</NavLink></li>
        </ul>
    </div>
    <div>
        
    </div>
    
    </div>
  )
}
