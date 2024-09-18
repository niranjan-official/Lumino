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
  { name: "DESIGN", phase: "03", option: "COMMING SOON", date: "." },
  {
    name: "IDEATHON",
    phase: "01",
    option: "REGISTER",
    date: "28 SEPTEMBER 2024",
  },
  { name: "DEVELOPMENT", phase: "02", option: "COMMING SOON", date: "." },
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
    <div className=" flex flex-col items-center gap-5">
      <h1 className=" text-4xl">Phases of Lumino</h1>

      <div className="flex flex-col md:flex-row my-10">
        {sortedArray.map((obj, index) => (
          <div
            key={index}
            className="md:basis-1/2 lg:basis-1/3 px-3 flex  flex-col"
          >
            <Card
              className={` mt-10 flex flex-col justify-center items-center  phase border-none transform transition-transform duration-300 md:${
                index === 1 ? "scale-110" : ""
              }`}
            >
              <CardHeader className=" flex flex-col justify-center items-center text-5xl py-12">
                <CardTitle>PHASE</CardTitle>
                <CardDescription className="text-4xl">
                  {obj.phase}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-2xl font-bold py-3">
                <p>{obj.name}</p>
              </CardContent>
              <CardFooter className="flex flex-col justify-center items-center rounded-lg   pt-5 ">
                <p className="text-xs mb-2 ">{obj.date}</p>
                <Button
                  variant="outline"
                  className="w-56 rounded-xl border-none  bg-white/40 text-black"
                >
                  {obj.option}
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phases;
