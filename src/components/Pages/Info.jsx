import React from "react";
import BgParticles from "../BgParticles";

const Info = () => {
  return (
    <section id="info">
      <BgParticles />
      <div className="flex w-full justify-center p-4 py-10 text-center sm:p-20 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center">
          <button className="rounded-[0.6rem] border border-neutral-500 bg-slate-950/70 p-2 px-5">
            Don't miss out!!!
          </button>
          <h3 className={`arial-font mt-6 text-4xl md:text-6xl lg:text-7xl`}>
            Ignite your <br /> Entrepeneurial Journey!!
          </h3>
          <p className="econo-light mt-4 text-neutral-300 sm:text-lg max-sm:px-4">
            lumino is a bootcamp for aspiring entrepreneurs offering practical
            insights, <br /> essential skills and valuable networking
            oppertunities.
          </p>
          <a href="#about" className="mt-4 rounded-[0.6rem] bg-white p-3 font-bold text-black shadow-md md:mt-6 md:text-xl md:font-semibold">
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Info;
