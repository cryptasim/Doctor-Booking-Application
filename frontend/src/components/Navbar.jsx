import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD] bg-white rounded-xl shadow-md px-4 md:px-8 sticky top-0 z-30 transition-all'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.new_logo} alt="" />
      <ul className='md:flex items-start gap-5 font-semibold hidden'>
        <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary transition-colors'}>
          <li className='py-1 px-2 rounded-lg transition-all'>HOME</li>
        </NavLink>
        <NavLink to='/doctors' className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary transition-colors'}>
          <li className='py-1 px-2 rounded-lg transition-all'>ALL DOCTORS</li>
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary transition-colors'}>
          <li className='py-1 px-2 rounded-lg transition-all'>ABOUT</li>
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary transition-colors'}>
          <li className='py-1 px-2 rounded-lg transition-all'>CONTACT</li>
        </NavLink>
      </ul>

      <div className='flex items-center gap-4 '>
        {
          token && userData
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 h-8 rounded-full border-2 border-primary shadow-sm' src={userData.image} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-white rounded-lg shadow-lg flex flex-col gap-4 p-4 border border-gray-100'>
                  <p onClick={() => navigate('/my-profile')} className='hover:text-primary cursor-pointer transition-colors'>My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className='hover:text-primary cursor-pointer transition-colors'>My Appointments</p>
                  <p onClick={logout} className='hover:text-red-500 cursor-pointer transition-colors'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block shadow hover:scale-105 transition-all'>Create account</button>
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

        {/* ---- Mobile Menu ---- */}
        <div className={`md:hidden fixed top-0 right-0 bottom-0 z-40 bg-white shadow-lg transition-all duration-300 ${showMenu ? 'w-3/4 max-w-xs px-5' : 'w-0 px-0'} overflow-hidden rounded-l-xl border-l border-gray-200'}`}>
          <div className='flex items-center justify-between py-6'>
            <img src={assets.logo} className='w-36' alt="" />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7 cursor-pointer' alt="" />
          </div>
          <ul className='flex flex-col items-start gap-4 mt-5 text-lg font-semibold'>
            <NavLink onClick={() => setShowMenu(false)} to='/' className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary transition-colors'}><p className='px-4 py-2 rounded-lg'>HOME</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors' className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary transition-colors'}><p className='px-4 py-2 rounded-lg'>ALL DOCTORS</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about' className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary transition-colors'}><p className='px-4 py-2 rounded-lg'>ABOUT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact' className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary transition-colors'}><p className='px-4 py-2 rounded-lg'>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

