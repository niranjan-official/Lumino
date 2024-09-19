import React from "react";
import {
  SpeakerCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/SpeakerCarousel";

const Speakers = () => {
  return (
    <section id="speakers">
      <div className="w-full bg-stone-800/50 flex flex-col items-center max-md:gap-6 p-4 py-10 sm:p-10 lg:px-16 mt-8">
        <div className=" flex flex-col justify-center items-center text-center">
          <h5 className="text-4xl md:text-5xl font-semibold max-md:text-center econo-light">
            Meet our inspiring Speakers <br className="max-md:hidden" /> at
            Lumino!
          </h5>
          <p className="text-neutral-300 md:text-lg mt-6 max-md:text-center econo-light">
            Thses industry experts and entrepeneurial leaders will share
            valuable <br className="max-md:hidden" /> insights practical
            knowledge and their personal journeys to kickstart and grow your
            ventures
          </p>
        </div>
        <div className="w-full md:w-2/3 px-5 md:px-10 mt-4 md:mt-8">
          <SpeakerCarousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/3">
                <div className="w-full h-64 bg-slate-950/50 border border-white rounded-3xl"></div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3">
                <div className="w-full h-64 bg-slate-950/50 border border-white rounded-3xl"></div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3">
                <div className="w-full h-64 bg-slate-950/50 border border-white rounded-3xl"></div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3">
                <div className="w-full h-64 bg-slate-950/50 border border-white rounded-3xl"></div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </SpeakerCarousel>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
