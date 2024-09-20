import React from "react";

const Clubs = () => {
  return (
    <div className="w-full h-max flex flex-col items-center p-4 sm:p-6 lg:px-16 bg-neutral-800/70">
      <p className="text-2xl econo-light text-neutral-300">
        Our Club Collaborators
      </p>
      <div className="flex flex-col md:flex-col gap-8 items-center mt-6 md:mt-12">
        <div className="w-full flex flex-wrap items-center justify-center gap-10">
          <img
            src="/clubs/ieee-sb.png"
            className="h-8 sm:h-10 md:h-12 w-auto"
            alt=""
          />
          <img
            src="/clubs/mulearn.png"
            className="h-8 sm:h-10 md:h-12 w-auto"
            alt=""
          />
          <img
            src="/clubs/ipl.png"
            className="h-8 sm:h-10 md:h-12 w-auto"
            alt=""
          />
          <img
            src="/clubs/iedc.png"
            className="h-8 sm:h-10 md:h-12 w-auto"
            alt=""
          />
          <img
            src="/clubs/ksm.png"
            className="h-8 sm:h-10 md:h-12 w-auto"
            alt=""
          />
          <img
            src="/clubs/ieee.png"
            className="h-8 sm:h-10 md:h-12 w-auto"
            alt=""
          />
        </div>
        <img src="/clubs/gdsc.png" className="h-8 md:h-10 w-auto" alt="" />
      </div>
    </div>
  );
};

export default Clubs;
