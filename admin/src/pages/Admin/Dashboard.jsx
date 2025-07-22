import React, { useContext, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const Dashboard = () => {

  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])

  return dashData && (
    <div className='m-5'>

      <div className='flex flex-wrap gap-5'>
        <div className='flex items-center gap-3 bg-white p-5 min-w-52 rounded-xl shadow-md border border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src={assets.doctor_icon} alt="" />
          <div>
            <p className='text-2xl font-bold text-primary'>{dashData.doctors}</p>
            <p className='text-gray-400 font-medium'>Doctors</p>
          </div>
        </div>

        <div className='flex items-center gap-3 bg-white p-5 min-w-52 rounded-xl shadow-md border border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src={assets.appointments_icon} alt="" />
          <div>
            <p className='text-2xl font-bold text-primary'>{dashData.appointments}</p>
            <p className='text-gray-400 font-medium'>Appointments</p>
          </div>
        </div>

        <div className='flex items-center gap-3 bg-white p-5 min-w-52 rounded-xl shadow-md border border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src={assets.patients_icon} alt="" />
          <div>
            <p className='text-2xl font-bold text-primary'>{dashData.patients}</p>
            <p className='text-gray-400 font-medium'>Patients</p></div>
        </div>
      </div>

      <div className='bg-white rounded-xl shadow-md mt-10'>
        <div className='flex items-center gap-2.5 px-6 py-5 rounded-t-xl border-b'>
          <img src={assets.list_icon} alt="" />
          <p className='font-bold text-lg text-primary'>Latest Bookings</p>
        </div>
        <div className='pt-2'>
          {
            dashData.latestAppointments.slice(0, 5).map((item, index) => (
              <div className='flex items-center px-8 py-4 gap-4 hover:bg-[#f7fafc] transition-all rounded-lg' key={index}>
                <img className='rounded-full w-12 h-12 border-2 border-primary shadow' src={item.docData.image} alt="" />
                <div className='flex-1 text-base'>
                  <p className='text-gray-800 font-semibold'>{item.docData.name}</p>
                  <p className='text-gray-500'>Booking on {slotDateFormat(item.slotDate)}</p>
                </div>
                {
                  item.cancelled
                    ? <p className='text-red-500 text-xs font-bold bg-red-50 px-3 py-1 rounded-full'>Cancelled</p>
                    : item.isCompleted
                      ? <p className='text-green-600 text-xs font-bold bg-green-50 px-3 py-1 rounded-full'>Completed</p>
                      : <img onClick={() => cancelAppointment(item._id)} className='w-10 cursor-pointer hover:scale-110 transition-all' src={assets.cancel_icon} alt="" />}
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Dashboard;
