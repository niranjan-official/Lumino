import React from "react";

const Clubs = () => {
  return (
    <div className="w-full h-max flex flex-col items-center p-4 py-10 sm:p-10 lg:px-16">
      <p className="text-2xl font-light text-neutral-300">
        Explore endless possibilities with
      </p>
      <div className="flex flex-col-reverse md:flex-col gap-6 items-center mt-8 md:mt-16">
        <div className="w-full flex flex-wrap items-center justify-center gap-10">
          <img src="/clubs/ieeesbprc.svg" className="h-8 sm:h-10 md:h-12 w-auto" alt="" />
          <img src="/clubs/mulearn.svg" className="h-8 sm:h-10 md:h-12 w-auto" alt="" />
          <img src="/clubs/ipl.svg" className="h-8 sm:h-10 md:h-12 w-auto" alt="" />
          <img src="/clubs/iedc_prc.svg" className="h-8 sm:h-10 md:h-12 w-auto" alt="" />
          <img src="/clubs/ksm.svg" className="h-8 sm:h-10 md:h-12 w-auto" alt="" />
          <img src="/clubs/ieee.svg" className="h-8 sm:h-10 md:h-12 w-auto" alt="" />
        </div>
        <img src="/clubs/gdsc.svg" className="h-10 w-auto" alt="" />
      </div>
    </div>
  );
};

export default Clubs;
