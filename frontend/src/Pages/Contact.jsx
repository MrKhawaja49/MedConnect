import React from "react";
import Footer from "../Components/Footer";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-cyan-800">
        <p>
          CONTACT <span className="text-cyan-950 font-bold">US</span>
        </p>
      </div>

      <div className="flex flex-col my-10 justify-center md:flex-row gap-10 mb-28 text-sm" >
        <img className="w-full max-w-[360px]" src={assets.contact_image} alt="" />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-bold text-lg text-cyan-900">OUR OFFICE</p>
          <p className="text-cyan-800">54709 Willms Station Suite 350,<br />  Washington, USA</p>
          <p className="text-cyan-800">Tel: (415) 555‑0132 <br /> Email: kh.hassanshahid786@gmail.com </p>
          <p className="font-bold text-lg text-cyan-900">Careers at MEDCONNECT</p>
          <p className="text-cyan-800">Learn more about our teams and job openings.</p>
          <button className="border border-primary px-8 py-4 text-sm hover:bg-cyan-900 hover:text-white transition-all duration-500 ">Explore Jobs</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
