import React, { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../Components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlot([]);

    // getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      //getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // settings end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(today.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        //add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        //increment current time by 30 mins
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }


      setDocSlot(prev => ([...prev, timeSlots]))

    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(()=>{
    console.log(docSlot);
  },[docSlot])

  return (
    docInfo && (
      <div>
        {/*-----------------DOCTOR DETAIL SECTION ----------------*/}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>

          <div className="flex-1 border border-cyan-700 rounded-lg p-8 py-7 bg-teal-50 mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/*-------------Doc Info: name, degree, experiemce, speciality -------------*/}
            <p className="flex items-center gap-2 text-2xl font-bold text-cyan-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-cyan-900">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            {/*-------------Doc About -------------*/}
            <div>
              <p className="flex items-center gap-1 text-sm font-bold text-cyan-900 mt-3 ">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-cyan-700 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-cyan-800 font-medium mt-4">
              Appointment Fee:{" "}
              <span className="text-cyan-900">PKR {docInfo.fees}</span>
            </p>
          </div>
        </div>
        {/*-----------------Booking SLOT SECTION ----------------*/}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-bold text-cyan-900">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {
              docSlot.length && docSlot.map((item, index)=>(
                <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? "bg-primary text-white" : "border border-cyan-900"}`} key={index}>
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))
            }
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {
              docSlot.length && docSlot[slotIndex].map((item, index)=>(
                <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? "bg-primary text-white" : "border border-cyan-900"} `} key={index}>
                  {item.time.toLowerCase()}
                </p>
              ))
            }
          </div>
          <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">Book an appointment</button>
        </div>

        {/*-----------------Listing related doctors ----------------*/}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
        <Footer />
      </div>
    )
  );
};

export default Appointment;
