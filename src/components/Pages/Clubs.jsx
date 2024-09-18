import React from "react";

const Clubs = () => {
  return (
    <div className="w-full flex flex-col items-center p-4 sm:px-10 lg:px-16">
      <p className="text-2xl font-light text-neutral-300">
        Explore endless possibilities with
      </p>
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-wrap items-center gap-10 h-12 mt-16">
          <img src="/clubs/ieeesbprc.svg" className="h-full w-auto" alt="" />
          <img src="/clubs/mulearn.svg" className="h-full w-auto" alt="" />
          <img src="/clubs/ipl.svg" className="h-full w-auto" alt="" />
          <img src="/clubs/iedc_prc.svg" className="h-full w-auto" alt="" />
          <img src="/clubs/ksm.svg" className="h-full w-auto" alt="" />
          <img src="/clubs/ieee.svg" className="h-full w-auto" alt="" />
        </div>
        <img src="/clubs/gdsc.svg" className="h-10 w-auto mt-10" alt="" />
      </div>
    </div>
  );
};

export default Clubs;
