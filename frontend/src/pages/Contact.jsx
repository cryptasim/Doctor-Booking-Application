import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="bg-[#f7fafc] rounded-2xl shadow-lg md:mx-10 px-4 sm:px-8 py-10 mt-10 mb-20">
      <div className='text-center text-3xl pt-6 text-primary font-bold tracking-wide mb-8'>
        <p>CONTACT <span className='text-blue-900 font-extrabold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-12 md:gap-20 items-center mb-10 text-base'>
        <img className='w-full md:max-w-[340px] rounded-xl shadow-md' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6 w-full max-w-md'>
          <p className='font-bold text-lg text-primary'>OUR OFFICE</p>
          <p className='text-gray-600'>Salt Lake, Kolkata <br /> <span className='text-gray-400'>West Bengal, India</span></p>
          <p className='text-gray-600'>Tel: <span className='font-semibold'>+91 12345 67890</span> <br /> Email: <span className='font-semibold'>doctorappointment@gmail.com</span></p>
          <p className='font-bold text-lg text-primary mt-4'>CAREERS AT PRESCRIPTO</p>
          <p className='text-gray-600'>Learn more about our teams and job openings.</p>
          <button className='border border-primary text-primary px-8 py-3 rounded-full text-base font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow'>
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact;
