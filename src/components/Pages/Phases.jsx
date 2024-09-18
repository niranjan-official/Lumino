import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import onj from "../../assets/bg/phase.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Phases = () => {
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
  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className=" text-4xl">Phases of Lumino</h1>

      <Carousel className="my-10 ">
        <CarouselContent className="p-10">
          {array.map((obj, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 px-3"
            >
              {/* <div className="">
                <img src={onj} alt="qwe" className=" relative" />
                <div className="absolute top-1/4 left-1/2 flex flex-col justify-center items-center">
                  <h1 className="text-3xl">Phase</h1>
                  <h1>01</h1>
                </div>
              </div> */}
              <Card
                className={`flex flex-col justify-center items-center  phase border-none transform transition-transform duration-300 ${
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
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Phases;
