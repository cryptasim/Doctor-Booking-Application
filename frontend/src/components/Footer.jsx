import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='md:mx-10 bg-[#f7fafc] rounded-xl shadow-inner px-6 pt-4 pb-2 mt-24'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm'>

        <div>
          <img onClick={() => {navigate('/'); window.scrollTo(0, 0);}} className='mb-7 w-45' src={assets.new_logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-700 leading-6'>Connect with trusted medical experts across a wide range of specialties—all in one app. Whether you need a general physician for a routine checkup, a gynecologist for women’s health, a dermatologist for skin concerns, or a pediatrician for your child, we’ve got you covered. You can also consult experienced neurologists and gastroenterologists for more specific conditions, without long wait times or referrals.</p>
        </div>

        <div>
          <p className='text-2xl font-semibold mt-1 mb-7 text-[#1a202c]'>COMPANY</p>
          <ul className='flex flex-col gap-2 cursor-pointer'>
            <li className='text-gray-900'>Home</li>
            <li className='text-gray-900'>About us</li>
            <li className='text-gray-900'>Delivery</li>
            <li className='text-gray-900'>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-2xl font-semibold mt-1 mb-7 text-[#1a202c]'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 cursor-pointer text-gray-900'>
            <li className='flex items-center gap-2'><span className='inline-block w-4 h-4 bg-primary rounded-full'></span>+91 12345 67890</li>
            <li className='flex items-center gap-2'><span className='inline-block w-4 h-4 bg-primary rounded-full'></span>customercare@novamed.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr className='border-gray-500' />
        <p className='py-5 text-sm text-center text-gray-800'>Copyright &copy; 2025 NovaMed. All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer;
