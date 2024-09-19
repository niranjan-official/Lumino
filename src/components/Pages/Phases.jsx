import React from "react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const array = [
  {
    name: "DEVELOPMENT",
    phase: "03",
    option: "COMING SOON",
    date: "To be Announced",
    active: false,
  },
  {
    name: "IDEATHON",
    phase: "01",
    option: "REGISTER",
    date: "28 SEPTEMBER 2024",
    active: true,
  },
  {
    name: "DESIGN",
    phase: "02",
    option: "COMING SOON",
    date: "To be Announced",
    active: false,
  },
];

const Phases = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sortedArray = isMobile
    ? [...array].sort((a, b) => a.phase - b.phase)
    : array;

  return (
    <section id="phases">
      <div className="w-full flex flex-col items-center p-6 py-10 sm:p-20 sm:px-10 lg:px-16">
        <h1 className=" text-4xl econo-light font-semibold">
          Phases of Lumino
        </h1>
        <p className="mt-4 econo-light text-neutral-300 md:text-lg text-center">
          Here are the three phases of the bootcamp designed for startup
          success.
        </p>
        <div className="flex flex-col max-md:gap-5 md:flex-row mt-4 md:mt-10">
          {sortedArray.map((obj, index) => (
            <div
              key={index}
              className="md:basis-1/2 lg:basis-1/3 px-3 flex  flex-col"
            >
              <Card
                className={`flex flex-col justify-center items-center phase border-none transform transition-transform duration-300 ${
                  obj.active && "md:scale-110"
                }`}
              >
                <CardHeader className=" flex flex-col justify-center items-center text-5xl py-12">
                  <h4 className="phase-font text-6xl">PHASE</h4>
                  <span className="text-6xl phase-font">{obj.phase}</span>
                </CardHeader>
                <CardContent className="text-2xl py-3">
                  <p className="econo-bold tracking-wider">{obj.name}</p>
                </CardContent>
                <CardFooter className="flex flex-col justify-center items-center rounded-lg   pt-5 ">
                  <p className=" mb-2 arial-fonnt">{obj.date}</p>
                  <Button
                    disabled={!obj?.active}
                    variant="outline"
                    className="w-56 rounded-xl border-none font-bold md:font-semibold bg-white/30 text-white hover:bg-white/30"
                  >
                    {obj.option}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Phases;
