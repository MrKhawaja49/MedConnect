import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import MyProfile from './Pages/MyProfile'
import Navbar from './Components/Navbar'
import Doctors from './Pages/Doctors'
import About from './Pages/About'
import Login from './Pages/Login'
import MyAppointments from './Pages/MyAppointments'
import Appointment from './Pages/Appointment'
import Contact from './Pages/Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> {/* Define your routes here */}
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
      </Routes>
    </div>
  )
}

export default App
