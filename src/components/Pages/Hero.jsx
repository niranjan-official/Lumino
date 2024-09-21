import React from "react";
import { Spotlight } from "../ui/Spotlight";

const Hero = () => {
  return (
    <section id="home" className="hero-bg h-screen">
      <div className="h-screen w-full p-4 pt-20">
        <div className="w-full">
          <Spotlight
            className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
            fill="white"
          />
          <Spotlight
            className="left-full top-10 h-[80vh] w-[50vw]"
            fill="white"
          />
          <Spotlight
            className="left-80 top-28 h-[80vh] w-[50vw]"
            fill="white"
          />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <img src="/lumino.png" className="h-auto w-full sm:w-1/2" alt="" />
          <p className="econo-light mt-2 text-center text-neutral-200 md:w-1/2 md:text-xl">
            Idea to impact: Master communication, design, and development for
            startup success.
          </p>
          <button className="duration-400 mt-4 transform rounded-[0.6rem] border border-white bg-transparent px-6 py-2 font-bold text-white shadow-[0_0_0_3px_#000000_inset] transition hover:-translate-y-1">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
