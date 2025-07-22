import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
            
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-5 px-3 sm:px-0'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div 
                        onClick={() => { 
                            navigate(`/appointment/${item._id}`); 
                            scrollTo(0, 0); 
                        }} 
                        className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300'
                        key={index}
                    >
                        <img className='w-full h-48 object-cover bg-[#EAEFFF]' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className={`flex items-center gap-2 text-sm ${item.available ? 'text-green-500' : 'text-gray-500'}`}>
                                <span className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                                <p>{item.available ? 'Available' : 'Not Available'}</p>
                            </div>
                            <p className='text-[#262626] text-lg font-medium mt-1'>{item.name}</p>
                            <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button 
                onClick={() => { 
                    navigate('/doctors'); 
                    scrollTo(0, 0); 
                }} 
                className='bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10'
            >
                more
            </button>
        </div>
    )
}

export default TopDoctors
