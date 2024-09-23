import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NavbarLinks } from "@/constants";

const MobileNav = ({ activeSection }) => {
  return (
    <section className="sm:hidden">
      <div className="flex flex-col">
        <Sheet>
          <SheetTrigger asChild>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="border-none bg-zinc-950/85 p-0 outline-none"
          >
            <div className="flex flex-col items-start py-6">
              <img src="/lumino.svg" className="ml-5 h-16 w-auto" alt="" />
              <hr className="ml-4 mt-6 w-[calc(100%-2rem)]" />
              <div className="mt-6 flex h-max w-full flex-col gap-2 px-3">
                {NavbarLinks.map((obj, key) => {
                  return (
                    <a
                      key={key}
                      href={obj.route}
                      className="transition-all duration-300 focus:outline-none focus:ring-0"
                    >
                      <SheetClose className="w-full" asChild>
                        <div
                          className={cn(
                            "flex w-full items-center gap-3 p-4 pr-10",
                            {
                              "rounded-xl bg-blue-600/20 shadow-md":
                                activeSection === obj.name,
                            },
                          )}
                        >
                          <span className="econo-light text-lg uppercase tracking-widest text-white">
                            {obj.title}
                          </span>
                        </div>
                      </SheetClose>
                    </a>
                  );
                })}
                <SheetClose>
                  <a
                    href="#registration"
                    className="focus:outline:none flex justify-center border border-blue-400/70 p-2 text-white focus:ring-0"
                  >
                    Register Now
                  </a>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
};

export default MobileNav;
