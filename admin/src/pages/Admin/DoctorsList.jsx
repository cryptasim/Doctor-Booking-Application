import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {

  const { doctors, changeAvailability, aToken, getAllDoctors } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-2xl font-bold text-primary mb-2'>All Doctors</h1>
      <div className='w-full flex flex-wrap gap-6 pt-5'>
        {
          doctors.map((item, index) => (
            <div
              className='bg-white border border-[#C9D8FF] rounded-2xl shadow-md max-w-56 w-56 min-h-[320px] flex flex-col items-center overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg hover:border-primary'
              key={index}
            >
              <img className='bg-[#EAEFFF] group-hover:bg-primary transition-all duration-500 w-full h-36 object-cover' src={item.image} alt="" />
              <div className='p-4 flex flex-col items-center flex-1 w-full'>
                <p className='text-[#262626] text-lg font-semibold text-center'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm mb-2 text-center'>{item.speciality}</p>
                <div className='mt-auto flex items-center gap-2 text-sm w-full justify-center'>
                  <input onChange={() => changeAvailability(item._id)} type="checkbox" checked={item.available} className='accent-primary scale-110' />
                  <p className={item.available ? 'text-green-600 font-medium' : 'text-gray-400'}>Available</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DoctorsList;
