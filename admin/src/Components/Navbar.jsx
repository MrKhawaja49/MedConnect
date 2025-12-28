import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../Context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { doctorContext } from '../Context/doctorContext'

const Navbar = () => {

    const {aToken, setAToken} = useContext(AdminContext)
    const {dToken, setDToken} = useContext(doctorContext)

    const navigate = useNavigate()

    const logout = () => {

        navigate('/')
        setAToken && setAToken ('')
        aToken && localStorage.removeItem('aToken')
        dToken && setDToken('')
        dToken && localStorage.removeItem('dToken')

    }


  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs'>
        <img src={assets.medconnect_admin} className="w-40 h-auto cursor-pointer sm:w-44" alt="" />
        <p className='border px-2.5 py-0.5 rounded-full border-cyan-700 text-cyan-800'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full hover:bg-teal-900 hover:text-white'>Logout</button>
    </div>
  )
}

export default Navbar
