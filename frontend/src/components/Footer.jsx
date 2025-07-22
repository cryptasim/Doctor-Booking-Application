import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 bg-[#f7fafc] rounded-xl shadow-inner px-6 py-10 mt-24'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Connect with trusted medical experts across a wide range of specialties—all in one app. Whether you need a general physician for a routine checkup, a gynecologist for women’s health, a dermatologist for skin concerns, or a pediatrician for your child, we’ve got you covered. You can also consult experienced neurologists and gastroenterologists for more specific conditions, without long wait times or referrals.</p>
        </div>

        <div>
          <p className='text-xl font-semibold mb-5 text-primary'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:text-primary cursor-pointer transition-colors'>Home</li>
            <li className='hover:text-primary cursor-pointer transition-colors'>About us</li>
            <li className='hover:text-primary cursor-pointer transition-colors'>Delivery</li>
            <li className='hover:text-primary cursor-pointer transition-colors'>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-semibold mb-5 text-primary'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='flex items-center gap-2'><span className='inline-block w-4 h-4 bg-primary rounded-full'></span>+91 12345 67890</li>
            <li className='flex items-center gap-2'><span className='inline-block w-4 h-4 bg-primary rounded-full'></span>doctorappointment@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr className='border-gray-300' />
        <p className='py-5 text-sm text-center text-gray-500'>Copyright 2025 @ Prescripto.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer;
