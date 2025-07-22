import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white rounded-xl shadow-md mt-2 mx-2'>
      <div className='flex items-center gap-2 text-xs'>
        <img onClick={() => navigate('/')} className='w-36 sm:w-40 cursor-pointer' src={assets.new_logo} alt="" />
        <p className='border px-2.5 py-0.5 rounded-full border-primary text-primary font-semibold bg-[#f2f3ff] ml-2'>
          {aToken ? 'Admin' : 'Doctor'}
        </p>
      </div>
      <button onClick={() => logout()} className='bg-primary text-white text-sm px-8 py-2 rounded-full shadow hover:bg-blue-700 transition-all font-semibold'>Logout</button>
    </div>
  )
}

export default Navbar;
