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

        // Calculate the visible portion of the section
        const visibleHeight =
          Math.min(windowBottom, sectionTop + sectionHeight) -
          Math.max(scrollPosition, sectionTop);

        // Calculate the percentage of section visibility
        const visibilityPercentage = (visibleHeight / sectionHeight) * 100;

        // Set a threshold for visibility percentage (adjust as needed)
        const visibilityThreshold = 50; // At least 50% visible

        if (visibilityPercentage >= visibilityThreshold) {
          setActiveSection(section.id);
          console.log("Section changed");
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
    <div className={`w-screen flex justify-between items-center px-4 sm:px-7 py-2 text-white select-none fixed z-50 ${!isHome && "bg-black"}`}>
      <div></div>
      <div className="flex items-center ml-10">
        <NavList activeSection={activeSection} />
      </div>
      <div className="flex gap-3 items-center">
        <MobileNav activeSection={activeSection} />
      </div>
    </div>
  );
};

export default Navbar;
