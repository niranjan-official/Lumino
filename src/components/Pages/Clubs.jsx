import React from "react";

const Clubs = () => {
  return (
    <div className="flex h-max w-full flex-col items-center bg-neutral-800/70 p-4 sm:p-6 lg:px-16">
      <p className="econo-light text-2xl text-neutral-300">
        Our Club Collaborators
      </p>
      <div className="mt-6 flex flex-col items-center gap-8 md:mt-12 md:flex-col">
        <div className="flex w-full flex-wrap items-center justify-center gap-10">
          <img
            src="/clubs/ieee-sb.png"
            className="h-8 w-auto sm:h-10 md:h-12"
            alt=""
          />
          <img
            src="/clubs/mulearn.png"
            className="h-8 w-auto sm:h-10 md:h-12"
            alt=""
          />
          <img
            src="/clubs/ipl.png"
            className="h-8 w-auto sm:h-10 md:h-12"
            alt=""
          />
          <img
            src="/clubs/iedc.png"
            className="h-8 w-auto sm:h-10 md:h-12"
            alt=""
          />
          <img
            src="/clubs/ksm.png"
            className="h-8 w-auto sm:h-10 md:h-12"
            alt=""
          />
          <img
            src="/clubs/ieee.png"
            className="h-8 w-auto sm:h-10 md:h-12"
            alt=""
          />
        </div>
        <img src="/clubs/gdsc.png" className="h-8 w-auto md:h-10" alt="" />
      </div>
    </div>
  );
};

export default Clubs;
