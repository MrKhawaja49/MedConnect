import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../Context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const {aToken, setAToken} = useContext(AdminContext)

    const navigate = useNavigate()

    const logout = () => {

        navigate('/')
        setAToken && setAToken ('')
        aToken && localStorage.removeItem('aToken')

    }


  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs'>
        <img src={assets.medconnect_admin} className="w-40 h-auto cursor-pointer sm:w-44" alt="" />
        <p className='border px-2.5 py-0.5 rounded-full border-cyan-700 text-cyan-800'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar
