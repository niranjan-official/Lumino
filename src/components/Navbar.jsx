import React from "react";
import NavList from "./NavList";
import MobileNav from "./MobileNav";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-4 sm:px-7 py-2 text-white bg-black select-none fixed z-50">
      <div></div>
      <div className="flex items-center ml-10">
        <NavList />
      </div>
      <div className="flex gap-3 items-center">
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
