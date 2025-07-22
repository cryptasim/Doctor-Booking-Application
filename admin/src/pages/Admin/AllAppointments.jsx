import React, { useEffect } from 'react'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const AllAppointments = () => {

  const { aToken, appointments, cancelAppointment, getAllAppointments } = useContext(AdminContext)
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getAllAppointments()
    }
  }, [aToken])

  return (
    <div className='w-full max-w-6xl m-5'>

      <p className='mb-3 text-2xl font-bold text-primary'>All Appointments</p>

      <div className='bg-white rounded-xl shadow-md text-sm max-h-[80vh] overflow-y-scroll border border-gray-100'>
        <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-4 px-8 border-b rounded-t-2xl bg-[#f7fafc] font-semibold text-primary text-base sticky top-0 z-10'>
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {
          appointments.map((item, index) => (
            <div className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-700 py-4 px-8 border-b hover:bg-[#f7fafc] transition-all' key={index}>
              <p className='max-sm:hidden font-medium'>{index + 1}</p>

              <div className='flex items-center gap-2'>
                <img src={item.userData.image} className='w-9 h-9 rounded-full border-2 border-primary bg-white object-cover' alt="" /> <p className='font-semibold'>{item.userData.name}</p>
              </div>

              <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
              <p className='font-medium'>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>

              <div className='flex items-center gap-2'>
                <img src={item.docData.image} className='w-9 h-9 rounded-full border-2 border-primary bg-white object-cover' alt="" /> <p className='font-semibold'>{item.docData.name}</p>
              </div>

              <p className='font-semibold'>{currency}{item.amount}</p>
              {
                item.cancelled
                  ? <p className='text-red-500 text-xs font-bold bg-red-50 px-3 py-1 rounded-full'>Cancelled</p>
                  : item.isCompleted
                    ? <p className='text-green-600 text-xs font-bold bg-green-50 px-3 py-1 rounded-full'>Completed</p>
                    : <img onClick={() => cancelAppointment(item._id)} className='w-10 cursor-pointer hover:scale-110 transition-all' src={assets.cancel_icon} alt="" />
              }
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default AllAppointments;

