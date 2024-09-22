import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import UnderLine from "../UnderLine";

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
      <div className="flex w-full flex-col items-center p-6 py-10 sm:p-20 sm:px-10 lg:px-16">
        <h1 className="econo-light text-4xl font-semibold md:text-5xl">
          Phases of Lumino
        </h1>
        <UnderLine />
        <p className="econo-light mt-4 text-center text-neutral-300 md:text-lg">
          Here are the three phases of the bootcamp designed for startup
          success.
        </p>
        <div className="mt-4 flex flex-col max-md:gap-5 md:mt-10 md:flex-row">
          {sortedArray.map((obj, index) => (
            <div
              key={index}
              className="flex flex-col px-3 md:basis-1/2 lg:basis-1/3"
            >
              <Card
                className={`phase flex transform flex-col items-center justify-center border-none transition-transform duration-300 ${
                  obj.active && "md:scale-110"
                }`}
              >
                <CardHeader className="flex flex-col items-center justify-center py-12 text-5xl">
                  <h4 className="phase-font text-6xl">PHASE</h4>
                  <span className="phase-font text-6xl">{obj.phase}</span>
                </CardHeader>
                <CardContent className="py-3 text-2xl">
                  <p className="econo-bold tracking-wider">{obj.name}</p>
                </CardContent>
                <CardFooter className="flex flex-col items-center justify-center rounded-lg pt-5">
                  <p className="arial-fonnt mb-2">{obj.date}</p>
                  <Button
                    disabled={!obj?.active}
                    variant="outline"
                    className="w-56 rounded-[0.6rem] border-none bg-white/30 font-bold text-white hover:bg-white/30 md:font-semibold"
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
