import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  EventCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/EventCarousel";
import { PreEvents } from "../../constants";
import UnderLine from "../UnderLine";

const Events = () => {
  const [isActive, setIsActive] = useState("pre");
  return (
    <section id="events">
      <div className="flex w-full flex-col items-center bg-zinc-900/70 p-4 py-10 sm:p-10 lg:px-16">
        <h5 className="econo-light text-4xl font-semibold max-md:text-center md:text-5xl">
          Events at Lumino
        </h5>
        <UnderLine />
        <p className="econo-light mt-4 text-center text-neutral-300 md:text-lg">
          Explore our lineup of events designed to inspire, educate, and connect
          future innovators.
        </p>
        <div className="z-40 mt-4 flex overflow-hidden rounded-[0.6rem] bg-zinc-800 shadow-inner shadow-black">
          <button
            onClick={() => setIsActive("pre")}
            className={`arial-font p-2 px-6 tracking-wider md:px-16 ${
              isActive === "pre"
                ? "rounded-r-[0.5rem] bg-zinc-700 shadow-md"
                : "text-white/70"
            }`}
          >
            PRE EVENTS
          </button>
          <button
            onClick={() => setIsActive("main")}
            className={`arial-font p-2 px-6 tracking-wider md:px-16 ${
              isActive === "main"
                ? "rounded-l-[0.5rem] bg-zinc-700 shadow-md"
                : "text-white/70"
            }`}
          >
            MAIN EVENTS
          </button>
        </div>
        <div className="mt-5 flex w-full justify-center px-8 md:mt-8 md:w-3/4">
          <EventCarousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {PreEvents.map((event) => (
                <CarouselItem key={event.id} className="w-full md:basis-1/3">
                  <div className="flex flex-col items-center gap-4 p-1">
                    <Card className="w-full border-0">
                      <img
                        src={event.url}
                        className="h-auto w-full shadow-md shadow-neutral-700"
                        alt=""
                      />
                    </Card>
                    <button className="arial-font rounded-[0.6rem] bg-white p-2 tracking-wider text-black shadow-md shadow-neutral-700">
                      REGISTER NOW
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </EventCarousel>
        </div>
      </div>
    </section>
  );
};

export default Events;
