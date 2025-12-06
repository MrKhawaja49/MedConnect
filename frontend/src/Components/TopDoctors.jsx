import React, { use, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const TopDoctors = () => {

    const navigate = useNavigate();
    const {doctors} = useContext(AppContext)

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-bold text-cyan-900 ">Book Highly Rated Doctors</h1>
      <p className="sm:w-1/3 text-center text-sm text-cyan-900">
        Simply go through our broad list of reliable doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
            className="border border-teal-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img className="bg-cyan-600" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-primary">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-bold">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className="bg-cyan-500 text-cyan-50 hover:text-white hover:bg-cyan-900 px-12 py-3 rounded-full mt-10 font-bold">MORE</button>
    </div>
  );
};

export default TopDoctors;
