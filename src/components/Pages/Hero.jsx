import React from "react";
import { Spotlight } from "../ui/Spotlight";

const Hero = () => {
  return (
    <section id="home" className="h-screen hero-bg">
      <div className="w-full h-screen p-4 pt-20">
        <div className="w-full">
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw]"
            fill="white"
          />
          <Spotlight
            className="top-28 left-80 h-[80vh] w-[50vw]"
            fill="white"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img src="/lumino.svg" className="w-full sm:w-1/2 h-auto" alt="" />
          <p className="md:w-1/2 md:text-xl text-center mt-2 econo-light text-neutral-200">
            Idea to impact: Master communication, design, and development for
            startup success.
          </p>
          <button className="mt-4 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-white text-white rounded-[0.6rem] font-bold transform hover:-translate-y-1 transition duration-400">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
