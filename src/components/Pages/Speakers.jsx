import React from "react";
import {
  SpeakerCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/SpeakerCarousel";
import UnderLine from "../UnderLine";

const Speakers = () => {
  return (
    <section id="speakers">
      <div className="w-full bg-zinc-900/70 flex flex-col items-center max-md:gap-6 p-4 py-10 sm:p-10 lg:px-16 mt-8">
        <div className=" flex flex-col justify-center items-center text-center">
          <h5 className="text-4xl md:text-5xl font-semibold max-md:text-center econo-light">
            Meet our inspiring <br className="max-md:hidden" /> Speakers at
            Lumino!
          </h5>
          <UnderLine />
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
                <div className="w-full h-64 flex justify-center items-center bg-slate-950/50 border border-white rounded-3xl">
                  <p className="text-center phase-font text-5xl leading-8">
                    Coming <br /> Soon
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3">
                <div className="w-full h-64 flex justify-center items-center bg-slate-950/50 border border-white rounded-3xl">
                  <p className="text-center phase-font text-5xl leading-8">
                    Coming <br /> Soon
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3">
                <div className="w-full h-64 flex justify-center items-center bg-slate-950/50 border border-white rounded-3xl">
                  <p className="text-center phase-font text-5xl leading-8">
                    Coming <br /> Soon
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3">
                <div className="w-full h-64 flex justify-center items-center bg-slate-950/50 border border-white rounded-3xl">
                  <p className="text-center phase-font text-5xl leading-8">
                    Coming <br /> Soon
                  </p>
                </div>
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
