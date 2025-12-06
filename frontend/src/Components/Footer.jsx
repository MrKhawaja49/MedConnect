import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*-----------------LEFT SECTION FOOTER ----------------*/}
        <div>
          <img
            src={assets.logo}
            alt=""
            className="w-40 h-auto cursor-pointer mb-5"
          />
          <p className="w-full md:w-2/3 text-cyan-900 leading-6">
            MedConnect makes booking doctor appointments very easy. Patients can
            quickly find doctors and set up a time to see them. Doctors and
            clinics can use it to easily manage their daily schedules and
            patients. This system helps hospitals and clinics work better and
            makes the patient's visit much smoother.
          </p>
        </div>

        {/*-----------------CENTER SECTION FOOTER ----------------*/}

        <div>
            <p className="text-xl font-bold mb-5 text-cyan-900">COMPANY</p>
            <ul className="flex flex-col gap-2 text-cyan-900">
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>CONTACT US</li>
                <li>PROVACY POLICY</li>
            </ul>
        </div>

        {/*-----------------RIGHT SECTION FOOTER ----------------*/}

        <div>
            <p className="text-xl font-bold mb-5 text-cyan-900">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-cyan-900">
                <li>+92 3545678767</li>
                <li>kh.hassanshahid786@gmail.com</li>
            </ul>
        </div>
      </div>

        {/*-----------------BOTTOM SECTION FOOTER ----------------*/}    
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-cyan-900">Copyright 2025 @ MedConnect - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
