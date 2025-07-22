import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="bg-[#f7fafc] rounded-2xl shadow-lg md:mx-10 px-4 sm:px-8 py-10 mt-10 mb-20">
      
      {/* Header */}
      <div className="text-center text-3xl pt-6 text-[#1a202c] font-bold tracking-wide mb-8">
        <p>
          ABOUT <span className="text-blue-900 font-extrabold">NovaMed</span>
        </p>
      </div>

      {/* About Section */}
      <div className="my-10 flex flex-col md:flex-row items-center justify-center gap-12 text-base">
        <img
          className="w-full max-w-sm rounded-xl shadow-md object-cover"
          src={assets.about_image}
          alt="NovaMed About"
        />
        <div className="flex flex-col items-start gap-6 w-full max-w-xl">
          <p className="font-bold text-lg text-[#1a202c]">OUR STORY</p>
          <p className="text-gray-700">
            Welcome to <span className="font-semibold text-blue-900">NovaMed</span>, 
            where luxury meets world-class healthcare. Experience the pinnacle 
            of comfort, innovation, and personalized care in an environment 
            designed for your wellbeing.
          </p>
          <p className="text-gray-700">
            At NovaMed, we redefine excellence in medical technology and 
            patient experience. Our state-of-the-art facilities and renowned 
            specialists ensure every visit is private, seamless, and tailored to you.
          </p>
          <p className="font-bold text-lg text-[#1a202c] mt-4">OUR VISION</p>
          <p className="text-gray-700">
            NovaMed aims to set the global standard for luxury healthcare, 
            blending advanced medicine with hospitality. You get elite care in 
            a space built for trust, privacy, and peace.
          </p>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="text-2xl my-8 text-center font-bold text-[#1a202c]">
        <p>
          WHY <span className="text-blue-900 font-extrabold">CHOOSE NOVAMED</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "PREMIUM EXPERIENCE",
            desc: "Enjoy private suites, concierge services, and a serene healing environment.",
          },
          {
            title: "ELITE MEDICAL TEAM",
            desc: "Access to internationally acclaimed doctors and advanced treatments.",
          },
          {
            title: "BESPOKE CARE",
            desc: "Personalized health plans and discreet services for every guest.",
          },
        ].map(({ title, desc }) => (
          <div
            key={title}
            className="group border border-[#1a202c] bg-white px-8 py-8 rounded-xl shadow transition-all duration-300 hover:bg-[#1a202c] hover:text-white cursor-pointer"
          >
            <b className="font-bold text-lg text-[#1a202c] group-hover:text-white">
              {title}
            </b>
            <p className="mt-2 text-gray-700 group-hover:text-gray-100">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
