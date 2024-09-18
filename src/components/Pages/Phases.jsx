import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import onj from "../../assets/bg/phase.png";

const Phases = () => {
  const array = [1, 2, 3];
  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className=" text-4xl">Phases of Lumino</h1>

      <Carousel>
        <CarouselContent className="">
          {array.map(() => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 relative">
              <div className="">
                <img src={onj} alt="qwe" className=" relative" />
                <div className="absolute top-1/4 left-1/2 flex flex-col justify-center items-center">
                  <h1 className="text-3xl">Phase</h1>
                  <h1>01</h1>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Phases;
