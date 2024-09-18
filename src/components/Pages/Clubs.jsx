import React from "react";

const Clubs = () => {
  return (
    <div className="w-full h-max flex flex-col items-center p-4 sm:p-6 lg:px-16 bg-neutral-800/70">
        <p className="text-2xl econo-light text-neutral-300">
          Explore endless possibilities with
        </p>
        <div className="flex flex-col-reverse md:flex-col gap-8 items-center mt-6 md:mt-12">
          <div className="w-full flex flex-wrap items-center justify-center gap-10">
            <img
              src="/clubs/ieeesbprc.svg"
              className="h-8 sm:h-10 md:h-12 w-auto"
              alt=""
            />
            <img
              src="/clubs/mulearn.svg"
              className="h-8 sm:h-10 md:h-12 w-auto"
              alt=""
            />
            <img
              src="/clubs/ipl.svg"
              className="h-8 sm:h-10 md:h-12 w-auto"
              alt=""
            />
            <img
              src="/clubs/iedc_prc.svg"
              className="h-8 sm:h-10 md:h-12 w-auto"
              alt=""
            />
            <img
              src="/clubs/ksm.svg"
              className="h-8 sm:h-10 md:h-12 w-auto"
              alt=""
            />
            <img
              src="/clubs/ieee.svg"
              className="h-8 sm:h-10 md:h-12 w-auto"
              alt=""
            />
          </div>
          <img src="/clubs/gdsc.svg" className="h-8 md:h-10 w-auto" alt="" />
        </div>
    </div>
  );
};

export default Clubs;
