import React, { useContext } from 'react'
import Footer from '../Components/Footer'
import {AppContext} from '../Context/AppContext'

const MyAppointments = () => {

  const { doctors } = useContext(AppContext);

  return (
    <div>

    <p className='pb-3 mt-12 font-bold text-md text-cyan-700 border-b'>
      My Appointments
    </p>
    <div>
      {doctors.slice(0,3).map((item, index) =>(
        <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
          <div>
            <img className='w-32 bg-cyan-100' src={item.image} alt="" />
          </div>
          <div className='flex-1 text-sm text-cyan-900'>
            <p className='text-cyan-900 font-bold'>{item.name}</p>
            <p>{item.speciality}</p>
            <p className='text-cyan-950 font-medium mt-1'>Address:</p>
            <p className='text-xs'>{item.address.line1}</p>
            <p className='text-xs'>{item.address.line2}</p>
            <p className='text-sm mt-1'><span className='text-sm text-cyan-800 font-bold'>Date & Time:</span> 25 January, 2025 | 8:30 PM</p>
          </div>
          <div></div>
          <div className='flex flex-col gap-2 justify-end'>
            <button className='text-sm text-cyan-600 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
            <button className='text-sm text-cyan-600 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel</button>
          </div>
        </div>
      ))}
    </div>

      <Footer/>
    </div>
  )
}

export default MyAppointments
