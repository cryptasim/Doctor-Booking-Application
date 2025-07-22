import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Camera } from 'lucide-react'

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState(false)

  const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData()
      formData.append('name', userData.name)
      formData.append('phone', userData.phone)
      formData.append('address', JSON.stringify(userData.address))
      formData.append('gender', userData.gender)
      formData.append('dob', userData.dob)
      if (image) formData.append('image', image)

      const { data } = await axios.post(`${backendUrl}/api/user/update-profile`, formData, {
        headers: { token },
      })

      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  if (!userData) return null

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md transition-shadow hover:shadow-lg border border-gray-100">
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        {isEdit ? (
          <label htmlFor="image" className="relative cursor-pointer group">
            <img
              className="w-32 h-32 object-cover rounded-full border border-gray-200"
              src={image ? URL.createObjectURL(image) : userData.image}
              alt="Profile"
            />
            <div className="absolute bottom-2 right-2 bg-white p-1 rounded-full border shadow-sm group-hover:shadow-md transition">
              <Camera size={18} className="text-gray-600 group-hover:text-black" />
            </div>
            <input type="file" id="image" hidden onChange={(e) => setImage(e.target.files[0])} />
          </label>
        ) : (
          <img
            className="w-32 h-32 object-cover rounded-full border border-gray-200"
            src={userData.image}
            alt="Profile"
          />
        )}
      </div>

      {/* Name */}
      <div className="text-center mb-6">
        {isEdit ? (
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
            className="text-2xl font-semibold text-center w-full bg-gray-50 px-3 py-1.5 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        ) : (
          <p className="text-2xl font-semibold text-gray-800">{userData.name}</p>
        )}
      </div>

      <hr className="mb-6" />

      {/* Contact Info */}
      <div className="space-y-5 text-sm">
        <div>
          <h3 className="text-gray-500 font-semibold mb-2 uppercase tracking-wide">Contact Info</h3>
          <div className="grid grid-cols-[120px_1fr] gap-y-3">
            <span className="text-gray-600 font-medium">Email:</span>
            <span className="text-blue-600 break-words">{userData.email}</span>

            <span className="text-gray-600 font-medium">Phone:</span>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
                className="bg-gray-50 px-3 py-1 rounded-md border border-gray-200 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            ) : (
              <span className="text-blue-600">{userData.phone}</span>
            )}

            <span className="text-gray-600 font-medium">Address:</span>
            {isEdit ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  className="bg-gray-50 px-3 py-1 rounded-md border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  className="bg-gray-50 px-3 py-1 rounded-md border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            ) : (
              <span className="text-gray-500 whitespace-pre-line">
                {userData.address.line1}
                {'\n'}
                {userData.address.line2}
              </span>
            )}
          </div>
        </div>

        {/* Basic Info */}
        <div>
          <h3 className="text-gray-500 font-semibold mb-2 uppercase tracking-wide">Basic Info</h3>
          <div className="grid grid-cols-[120px_1fr] gap-y-3">
            <span className="text-gray-600 font-medium">Gender:</span>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
                className="bg-gray-50 px-3 py-1 rounded-md border border-gray-200 max-w-[160px] focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="Not Selected">Not Selected</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <span className="text-gray-500">{userData.gender}</span>
            )}

            <span className="text-gray-600 font-medium">Birthday:</span>
            {isEdit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
                className="bg-gray-50 px-3 py-1 rounded-md border border-gray-200 max-w-[160px] focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            ) : (
              <span className="text-gray-500">{userData.dob}</span>
            )}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={isEdit ? updateUserProfileData : () => setIsEdit(true)}
          className="px-6 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
        >
          {isEdit ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>
    </div>
  )
}

export default MyProfile
