import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const AddDoctor = () => {

    const [docImg, setDocImg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [experience, setExperience] = useState('1 Year')
    const [fees, setFees] = useState('')
    const [about, setAbout] = useState('')
    const [speciality, setSpeciality] = useState('General physician')
    const [degree, setDegree] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')

    const { backendUrl } = useContext(AppContext)
    const { aToken } = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {

            if (!docImg) {
                return toast.error('Image Not Selected')
            }

            const formData = new FormData();

            formData.append('image', docImg)
            formData.append('name', name)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('experience', experience)
            formData.append('fees', Number(fees))
            formData.append('about', about)
            formData.append('speciality', speciality)
            formData.append('degree', degree)
            formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

            // console log formdata            
            formData.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });

            const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                setDocImg(false)
                setName('')
                setPassword('')
                setEmail('')
                setAddress1('')
                setAddress2('')
                setDegree('')
                setAbout('')
                setFees('')
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }

    }

    return (
        <form onSubmit={onSubmitHandler} className='m-5 px-5 py-1 w-full'>

            <p className='mb-3 text-2xl font-bold text-primary'>Add Doctor</p>

            <div className='px-0 py-0 w-full max-w-4xl'>
                <div className='flex items-center gap-4 mb-8 text-gray-500'>
                    <label htmlFor="doc-img">
                        <img className='w-20 h-20 bg-gray-100 rounded-full cursor-pointer object-cover border-2 border-primary shadow' src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setDocImg(e.target.files[0])} type="file" name="" id="doc-img" hidden />
                    <p className='font-medium text-gray-700'>Upload doctor <br /> picture</p>
                </div>

                <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>

                    <div className='w-full lg:flex-1 flex flex-col gap-4'>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p className='font-semibold'>Your name</p>
                            <input onChange={e => setName(e.target.value)} value={name} className='border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-primary outline-none transition-all' type="text" placeholder='Name' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p className='font-semibold'>Doctor Email</p>
                            <input onChange={e => setEmail(e.target.value)} value={email} className='border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-primary outline-none transition-all' type="email" placeholder='Email' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p className='font-semibold'>Set Password</p>
                            <input onChange={e => setPassword(e.target.value)} value={password} className='border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-primary outline-none transition-all' type="password" placeholder='Password' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p className='font-semibold'>Experience</p>
                            <select onChange={e => setExperience(e.target.value)} value={experience} className='border-2 border-gray-200 rounded-lg px-2 py-2 focus:border-primary outline-none transition-all' >
                                <option value="1 Year">1 Year</option>
                                <option value="2 Year">2 Years</option>
                                <option value="3 Year">3 Years</option>
                                <option value="4 Year">4 Years</option>
                                <option value="5 Year">5 Years</option>
                                <option value="6 Year">6 Years</option>
                                <option value="8 Year">8 Years</option>
                                <option value="9 Year">9 Years</option>
                                <option value="10 Year">10 Years</option>
                            </select>
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p className='font-semibold'>Fees</p>
                            <input onChange={e => setFees(e.target.value)} value={fees} className='border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-primary outline-none transition-all' type="number" placeholder='Doctor fees' required />
                        </div>

                    </div>

                    <div className='w-full lg:flex-1 flex flex-col gap-4'>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p className='font-semibold'>Speciality</p>
                            <select onChange={e => setSpeciality(e.target.value)} value={speciality} className='border-2 border-gray-200 rounded-lg px-2 py-2 focus:border-primary outline-none transition-all'>
                                <option value="General physician">General physician</option>
                                <option value="Gynecologist">Gynecologist</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="Pediatricians">Pediatricians</option>
                                <option value="Neurologist">Neurologist</option>
                                <option value="Gastroenterologist">Gastroenterologist</option>
                            </select>
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p className='font-semibold'>Degree</p>
                            <input onChange={e => setDegree(e.target.value)} value={degree} className='border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-primary outline-none transition-all' type="text" placeholder='Degree' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p className='font-semibold'>Address</p>
                            <input onChange={e => setAddress1(e.target.value)} value={address1} className='border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-primary outline-none transition-all' type="text" placeholder='Address 1' required />
                            <input onChange={e => setAddress2(e.target.value)} value={address2} className='border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-primary outline-none transition-all' type="text" placeholder='Address 2' required />
                        </div>

                    </div>

                </div>

                <div>
                    <p className='mt-6 mb-2 font-semibold'>About Doctor</p>
                    <textarea onChange={e => setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-all' rows={5} placeholder='Write about doctor'></textarea>
                </div>

                <button type='submit' className='bg-primary px-10 py-3 mt-6 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition-all'>Add doctor</button>

            </div>

        </form>
    )
}

export default AddDoctor;
