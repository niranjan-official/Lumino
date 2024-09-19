import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Speakers = () => {
  return (
    <section>
      <div className="w-full flex flex-col max-md:gap-6 md:flex-row p-4 py-10 sm:p-10 lg:px-16 md:pt-20">
        <div className="w-full md:w-1/3 flex flex-col justify-center">
          <h5 className="text-4xl md:text-5xl font-semibold max-md:text-center econo-light">
            Meet our inspiring Speakers at Lumino!
          </h5>
          <p className="text-neutral-300 mt-6 max-md:text-center econo-light">
            Thses industry experts and entrepeneurial leaders will share
            valuable insights practical knowledge and their personal journeys to
            kickstart and grow your ventures
          </p>
        </div>
        <div className="w-full md:w-2/3 px-5 md:px-10">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="md:basis-1/2">
                <div className="w-full h-64 bg-slate-950/50 border border-white rounded-3xl"></div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <div className="w-full h-64 bg-slate-950/50 border border-white rounded-3xl"></div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <div className="w-full h-64 bg-slate-950/50 border border-white rounded-3xl"></div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
