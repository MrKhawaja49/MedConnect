import React, { useContext } from "react";
import Login from "./Pages/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./Context/AdminContext";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Admin/Dashboard";
import AllAppointments from "./Pages/Admin/AllAppointments";
import AddDoctor from "./Pages/Admin/AddDoctor";
import DoctorsList from "./Pages/Admin/DoctorsList";
import { doctorContext } from "./Context/doctorContext";
import DoctorDashboard from "./Pages/Doctor/doctorDashboard";
import DoctorAppointment from "./Pages/Doctor/doctorAppointment";
import DoctorProfile from "./Pages/Doctor/doctorProfile";

const App = () => {

  const {aToken} = useContext(AdminContext)
  const {dToken} = useContext(doctorContext)

  return aToken || dToken ? (
    <div className="bg-slate-100">
      <ToastContainer/>
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          {/* ADMIN ROUTE */}
          <Route path="/" element={<></>}/>
          <Route path="/admin-dashboard" element={<Dashboard/>}/>
          <Route path="/all-appointments" element={<AllAppointments/>}/>
          <Route path="/add-doctor" element={<AddDoctor/>}/>
          <Route path="/doctor-list" element={<DoctorsList/>}/>

           {/* DOCTOR ROUTE */}
          <Route path="/doctor-dashboard" element={<DoctorDashboard/>}/>
          <Route path="/doctor-appointments" element={<DoctorAppointment/>}/>
          <Route path="/doctor-profile" element={<DoctorProfile/>}/>
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer/>
    </>
  );
};

export default App;
