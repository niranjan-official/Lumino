// import FadeUp from "@/Animations/FadeUp";
import { NavbarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";

const NavList = ({ activeSection }) => {
  return (
    <div className="econo-light flex items-center gap-8 text-xl text-neutral-300 max-sm:hidden lg:gap-16 lg:text-2xl">
      <div
        className={cn(
          "flex items-center gap-1 pb-1 transition-all duration-300",
          {
            "font-semibold text-white": activeSection === "home",
          },
        )}
      >
        {/* <FadeUp delay={key*0.1} > */}
        <a href={"#home"}>HOME</a>
        {/* </FadeUp> */}
      </div>
      <div
        className={cn(
          "flex items-center gap-1 pb-1 transition-all duration-300",
          {
            "font-semibold text-white": activeSection === "info",
          },
        )}
      >
        {/* <FadeUp delay={key*0.1} > */}
        <a href={"#info"}>INFO</a>
        {/* </FadeUp> */}
      </div>
      <div
        className={cn(
          "flex items-center gap-1 pb-1 transition-all duration-300",
          {
            "font-semibold text-white": activeSection === "speakers",
          },
        )}
      >
        {/* <FadeUp delay={key*0.1} > */}
        <a href={"#speakers"}>SPEAKERS</a>
        {/* </FadeUp> */}
      </div>
      <img src="/lumino.svg" className="h-12 w-auto" alt="" />
      <div
        className={cn(
          "flex items-center gap-1 pb-1 transition-all duration-300",
          {
            "font-semibold text-white": activeSection === "phases",
          },
        )}
      >
        {/* <FadeUp delay={key*0.1} > */}
        <a href={"#phases"}>PHASES</a>
        {/* </FadeUp> */}
      </div>
      <div
        className={cn(
          "flex items-center gap-1 pb-1 transition-all duration-300",
          {
            "font-semibold text-white": activeSection === "events",
          },
        )}
      >
        {/* <FadeUp delay={key*0.1} > */}
        <a href={"#events"}>EVENTS</a>

        {/* </FadeUp> */}
      </div>
      <div
        className={cn(
          "rounded-3xl border border-blue-400/70 p-1 px-6 transition-all duration-300",
          {
            "font-semibold text-white": activeSection === "registration",
          },
        )}
      >
        {/* <FadeUp delay={key*0.1} > */}
        <a href={"#registration"}>REGISTER</a>
        {/* </FadeUp> */}
      </div>
    </div>
  );
};

export default NavList;
