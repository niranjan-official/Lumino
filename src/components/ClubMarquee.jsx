import React from "react";
import Marquee from "react-fast-marquee";
import { GiDiamonds } from "react-icons/gi";

const ClubMarquee = () => {
  return (
    <div className="w-full bg-black/60 py-5">
      <Marquee speed={120}>
        <div className="flex w-full items-center gap-5 md:gap-10">
          <img
            src="/clubs/ieee-sb.png"
            className="ml-10 h-8 w-auto sm:h-10 md:h-12"
            alt=""
          />
          <GiDiamonds size={25} className="text-white" />
          <img
            src="/clubs/mulearn.png"
            className="h-8 w-auto sm:h-10 md:h-12"
            alt=""
          />
          <GiDiamonds size={25} />
          <img
            src="/clubs/ipl.png"
            className="h-8 w-auto sm:h-10 md:h-12"
            alt=""
          />
          <GiDiamonds size={25} />
          <img
            src="/clubs/iedc.png"
            className="h-8 w-auto sm:h-10 md:h-12"
            alt=""
          />
          <GiDiamonds size={25} />
          <img
            src="/clubs/ksm.png"
            className="h-8 w-auto sm:h-10 md:h-12"
            alt=""
          />
          <GiDiamonds size={25} />
          <img
            src="/clubs/ieee.png"
            className="h-8 w-auto sm:h-10 md:h-12"
            alt=""
          />
          <GiDiamonds size={25} />
          <img
            src="/clubs/gdsc.png"
            className="h-8 w-auto sm:h-10 md:h-12"
            alt=""
          />
          <GiDiamonds size={25} />
        </div>
      </Marquee>
    </div>
  );
};

export default ClubMarquee;
