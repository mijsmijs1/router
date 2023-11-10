import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
export default function List() {
    const goToHome = useNavigate()
  return (
    <div>
        <button onClick={()=>{
           goToHome("/") 
        }}>Go Home</button>
        <Link to={'mirosoft'}>Microsoft</Link>
        <Link to={'linux'}>Linux</Link>
        <Link to={'mamcos'}>MacOS</Link>
        ...
        <Outlet />
    </div>
  )
}
