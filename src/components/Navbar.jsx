import React, { useEffect, useState } from "react";
import NavList from "./NavList";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const windowBottom = scrollPosition + windowHeight;

        const visibleHeight =
          Math.min(windowBottom, sectionTop + sectionHeight) -
          Math.max(scrollPosition, sectionTop);

        const visibilityPercentage = (visibleHeight / sectionHeight) * 100;

        const visibilityThreshold = 50;

        if (visibilityPercentage >= visibilityThreshold) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (activeSection === "home") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [activeSection]);

  return (
    <div
      className={`fixed z-50 flex w-screen select-none items-center justify-center px-4 py-2 text-white sm:px-7 ${!isHome && "sm:bg-black"}`}
    >
      <div className="flex items-center md:ml-10">
        <NavList activeSection={activeSection} />
      </div>
      <div
        className={`hidden w-full items-center justify-between gap-3 rounded-3xl border border-neutral-500/70 transition-all duration-300 ease-in-out ${
          !isHome
            ? "bg-neutral-800/20 backdrop-blur-lg"
            : "mt-4 bg-white/5 backdrop-blur-sm"
        } p-3 max-sm:flex`}
      >
        <img src="/lumino.svg" className={`h-8 w-auto`} alt="" />
        <MobileNav activeSection={activeSection} />
      </div>
    </div>
  );
};

export default Navbar;
