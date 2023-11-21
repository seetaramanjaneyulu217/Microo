import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { User2, XCircle } from 'lucide-react'
import menuBtn from '../assets/menu_btn.png'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const pathname = useLocation()
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()

  return (
    <>
      <div className={`h-screen w-2/12 fixed bg-[#8317cf] ${open ? 'translate-x-0' : '-translate-x-full'} transition-all duration-500 transform flex flex-col gap-5 pl-8 pt-12 text-white text-xl`}>
        <div className='flex justify-end mr-7'>
          <XCircle strokeWidth={1} className='cursor-pointer' onClick={() => setOpen(false)} />
        </div>
        <NavLink to='/' className={({ isActive }) => isActive ? 'text-red-500' : ''}>Home</NavLink>
        <NavLink to='/about#top' className={({ isActive }) => isActive ? 'text-red-500' : ''}>About</NavLink>
        <NavLink to='/services#top' className={({ isActive }) => isActive ? 'text-red-500' : ''}>Services</NavLink>
        <NavLink to='/shop#top' className={({ isActive }) => isActive ? 'text-red-500' : ''}>Shop</NavLink>
        <NavLink to='/contact#top' className={({ isActive }) => isActive ? 'text-red-500' : ''}>Contact</NavLink>
      </div>

      <div id='top' className={`${pathname.pathname === '/' ? '' : 'bg-[#8f100a] mb-20'} flex justify-between items-center p-5 md:p-11`}>
        {/* For logo */}
        <div className='cursor-pointer w-36 md:w-full'>
          <img src={logo} onClick={ () => navigate('/') } />
        </div>

        <div className='flex items-center gap-16'>
          {/* For login */}
          <div className='hidden md:visible md:flex gap-2 items-center text-white cursor-pointer'>
            <User2 size={28} strokeWidth={2} />
            <p className='font-bold'>Login</p>
          </div>

          <div onClick={() => setOpen(prev => !prev)}>
            <img src={menuBtn} className='cursor-pointer md:w-24' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header