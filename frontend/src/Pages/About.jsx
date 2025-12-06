import React from "react";
import { assets } from "../assets/assets";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-cyan-800">
        <p>
          ABOUT <span className="text-cyan-950 font-bold">MEDCONNECT</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full max-w-[360px]" src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-cyan-900">
          <p>
            Welcome to MedConnect, your go-to platform for streamlined
            healthcare access. We’re focused on simplifying how people discover
            trusted doctors, book appointments, and manage their health
            interactions. MedConnect is built for anyone who wants healthcare to
            feel less complicated and more connected.
          </p>
          <p>
            At MedConnect, we stay committed to elevating the digital healthcare
            experience. We continuously optimize our platform, leveraging smart
            technology to deliver quick, intuitive, and reliable appointment
            booking. Whether you're scheduling a consultation for the first time
            or coordinating ongoing care, MedConnect keeps your journey smooth
            end to end.
          </p>
          <b className="text-cyan-950">Our Aim</b>
          <p>
            Our aim is to create a fully connected healthcare ecosystem where
            finding care feels effortless. We want to remove the traditional
            barriers between patients and healthcare providers by offering a
            clean, transparent, and accessible experience. With MedConnect, you
            get the right care, at the right time, without the usual friction.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-cyan-950 font-bold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-cyan-900 cursor-pointer">
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-cyan-900 cursor-pointer">
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-cyan-900 cursor-pointer">
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
