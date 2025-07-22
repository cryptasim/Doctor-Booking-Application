import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyAppointments = () => {

    const { backendUrl, token } = useContext(AppContext)
    const navigate = useNavigate()

    const [appointments, setAppointments] = useState([])
    const [payment, setPayment] = useState('')

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_')
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }

    // Getting User Appointments Data Using API
    const getUserAppointments = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })
            setAppointments(data.appointments.reverse())

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // Function to cancel appointment Using API
    const cancelAppointment = async (appointmentId) => {

        try {

            const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                getUserAppointments()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    const initPay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Appointment Payment',
            description: "Appointment Payment",
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {

                console.log(response)

                try {
                    const { data } = await axios.post(backendUrl + "/api/user/verifyRazorpay", response, { headers: { token } });
                    if (data.success) {
                        navigate('/my-appointments')
                        getUserAppointments()
                    }
                } catch (error) {
                    console.log(error)
                    toast.error(error.message)
                }
            }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    // Function to make payment using razorpay
    const appointmentRazorpay = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { appointmentId }, { headers: { token } })
            if (data.success) {
                initPay(data.order)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // Function to make payment using stripe
    const appointmentStripe = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/payment-stripe', { appointmentId }, { headers: { token } })
            if (data.success) {
                const { session_url } = data
                window.location.replace(session_url)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }



    useEffect(() => {
        if (token) {
            getUserAppointments()
        }
    }, [token])

    return (
<div>
  <p className="pb-3 mt-12 text-2xl font-semibold text-gray-800 border-b">My appointments</p>
  <div>
    {appointments.map((item, index) => (
      <div
        key={index}
        className="p-4 mb-4 bg-white shadow-md rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div className="flex gap-4 items-start flex-1">
          <img
            className="w-20 h-20 rounded object-cover bg-[#EAEFFF]"
            src={item.docData.image}
            alt=""
          />
          <div className="text-sm text-[#444] space-y-1">
            <p className="text-xl font-semibold text-[#222]">{item.docData.name}</p>
            <p className="text-l text-gray-600">{item.docData.speciality}</p>
            <p className="pt-1 text-[#333]">
              <span className="font-medium">Address:</span> {item.docData.address.line1}, {item.docData.address.line2}
            </p>
            <p className="pt-1 text-[#333]">
              <span className="font-medium">Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm text-center sm:min-w-48 w-full sm:w-auto">
          {!item.cancelled && !item.payment && !item.isCompleted && payment !== item._id && (
            <button
              onClick={() => setPayment(item._id)}
              className="py-2 border rounded text-[#333] hover:bg-blue-600 hover:text-white transition"
            >
              Pay Online
            </button>
          )}
          {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && (
            <>
              <button
                onClick={() => appointmentStripe(item._id)}
                className="py-2 border rounded hover:bg-blue-50 flex justify-center transition"
              >
                <img className="max-w-20 max-h-5" src={assets.stripe_logo} alt="" />
              </button>
              <button
                onClick={() => appointmentRazorpay(item._id)}
                className="py-2 border rounded hover:bg-blue-50 flex justify-center transition"
              >
                <img className="max-w-20 max-h-5" src={assets.razorpay_logo} alt="" />
              </button>
            </>
          )}
          {!item.cancelled && item.payment && !item.isCompleted && (
            <button className="py-2 border rounded text-[#444] bg-[#EAEFFF] cursor-default">Paid</button>
          )}
          {item.isCompleted && (
            <button className="py-2 border border-green-500 rounded text-green-600 bg-green-50 cursor-default">
              Completed
            </button>
          )}
          {!item.cancelled && !item.isCompleted && (
            <button
              onClick={() => cancelAppointment(item._id)}
              className="py-2 border rounded text-[#333] hover:bg-red-600 hover:text-white transition"
            >
              Cancel appointment
            </button>
          )}
          {item.cancelled && !item.isCompleted && (
            <button className="py-2 border border-red-500 rounded text-red-500 bg-red-50 cursor-default">
              Appointment cancelled
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

    )
}

export default MyAppointments