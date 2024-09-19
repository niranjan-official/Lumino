import React from "react";
import BgParticles from "../BgParticles";

const Info = () => {
  return (
    <section className="z-10">
      <BgParticles />
      <div className="w-full flex justify-center p-4 py-10 sm:p-20 sm:px-10 lg:px-16 text-center">
        <div className="flex flex-col items-center">
          <button className="bg-slate-950/70 p-2 px-5 rounded-2xl border border-neutral-500">
            Don't miss out!!!
          </button>
          <h3 className={`text-4xl md:text-6xl lg:text-7xl mt-6 arial-font`}>
            Ignite your <br /> Entrepeneurial Journey!!
          </h3>
          <p className="sm:text-lg text-neutral-300 mt-4 econo-light" >
            lumino is a bootcamp for aspiring entrepreneurs offering practical
            insights, <br /> essential skills and valuable networking oppertunities.
          </p>
          <button className="bg-blue-500 text-white p-3 text-2xl shadow-md mt-8 font-semibold rounded-xl">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Info;
