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
      <div className="mt-8 flex w-full flex-col items-center bg-zinc-900/70 p-4 py-10 max-md:gap-6 sm:p-10 lg:px-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h5 className="econo-light text-4xl font-semibold max-md:text-center md:text-5xl">
            Meet our inspiring <br className="max-md:hidden" /> Speakers at
            Lumino!
          </h5>
          <UnderLine />
          <p className="econo-light mt-6 text-neutral-300 max-md:text-center md:text-lg">
            Thses industry experts and entrepeneurial leaders will share
            valuable <br className="max-md:hidden" /> insights practical
            knowledge and their personal journeys to kickstart and grow your
            ventures
          </p>
        </div>
        <div className="mt-4 w-full px-5 md:mt-8 md:w-2/3 md:px-10">
          <SpeakerCarousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/3">
                <div className="flex h-64 w-full items-center justify-center rounded-3xl border border-white bg-slate-950/50">
                  <p className="phase-font text-center text-5xl leading-8">
                    Coming <br /> Soon
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3">
                <div className="flex h-64 w-full items-center justify-center rounded-3xl border border-white bg-slate-950/50">
                  <p className="phase-font text-center text-5xl leading-8">
                    Coming <br /> Soon
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3">
                <div className="flex h-64 w-full items-center justify-center rounded-3xl border border-white bg-slate-950/50">
                  <p className="phase-font text-center text-5xl leading-8">
                    Coming <br /> Soon
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3">
                <div className="flex h-64 w-full items-center justify-center rounded-3xl border border-white bg-slate-950/50">
                  <p className="phase-font text-center text-5xl leading-8">
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
