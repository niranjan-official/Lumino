import React from 'react'
import Marquee from 'react-fast-marquee'
import { GiDiamonds } from 'react-icons/gi'

const ClubMarquee = () => {
  return (
    <div className="w-full py-5 bg-black/60">
        <Marquee speed={120}>
          <div className="w-full flex items-center gap-5 md:gap-10">
            <img
              src="/clubs/ieee-sb.png"
              className="h-8 sm:h-10 md:h-12 w-auto ml-10"
              alt=""
            />
            <GiDiamonds size={25} className="text-white" />
            <img
              src="/clubs/mulearn.png"
              className="h-8 sm:h-10 md:h-12 w-auto"
              alt=""
            />
            <GiDiamonds size={25} />
            <img
              src="/clubs/ipl.png"
              className="h-8 sm:h-10 md:h-12 w-auto"
              alt=""
            />
            <GiDiamonds size={25} />
            <img
              src="/clubs/iedc.png"
              className="h-8 sm:h-10 md:h-12 w-auto"
              alt=""
            />
            <GiDiamonds size={25} />
            <img
              src="/clubs/ksm.png"
              className="h-8 sm:h-10 md:h-12 w-auto"
              alt=""
            />
            <GiDiamonds size={25} />
            <img
              src="/clubs/ieee.png"
              className="h-8 sm:h-10 md:h-12 w-auto"
              alt=""
            />
            <GiDiamonds size={25} />
            <img
              src="/clubs/gdsc.png"
              className="h-8 sm:h-10 md:h-12 w-auto"
              alt=""
            />
            <GiDiamonds size={25} />
          </div>
        </Marquee>
      </div>
  )
}

export default ClubMarquee
