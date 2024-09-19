import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  EventCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/EventCarousel";
import { PreEvents } from "../../constants";

const Events = () => {
  const [isActive, setIsActive] = useState("pre");
  return (
    <section id="events">
      <div className="w-full poster-bg bg-stone-800/50 flex flex-col items-center p-4 py-10 sm:p-10 lg:px-16">
        <h5 className="text-4xl md:text-5xl font-semibold max-md:text-center econo-light">
          Events at Lumino
        </h5>
        <p className="mt-4 econo-light text-neutral-300 md:text-lg text-center">
          Explore our lineup of events designed to inspire, educate, and connect
          future innovators.
        </p>
        <div className="flex rounded-[0.5rem] overflow-hidden shadow-inner mt-4 md:mt-8 shadow-black bg-zinc-800">
          <button
            onClick={() => setIsActive("pre")}
            className={`p-2 px-6 md:px-16 tracking-wider arial-font ${
              isActive === "pre"
                ? "bg-zinc-700 rounded-r-[0.5rem] shadow-md"
                : "text-white/70"
            }`}
          >
            PRE EVENTS
          </button>
          <button
            onClick={() => setIsActive("main")}
            className={`p-2 px-6 md:px-16 tracking-wider arial-font ${
              isActive === "main"
                ? "bg-zinc-700 rounded-l-[0.5rem] shadow-md"
                : "text-white/70"
            }`}
          >
            MAIN EVENTS
          </button>
        </div>
        <div className="w-full md:w-3/4 flex justify-center mt-5 md:mt-8 px-8">
          <EventCarousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {PreEvents.map((event) => (
                <CarouselItem key={event.id} className="md:basis-1/3 w-full">
                  <div className="flex flex-col items-center gap-4 p-1">
                    <Card className="w-full border-0">
                      <img
                        src={event.url}
                        className="w-full h-auto shadow-md shadow-neutral-700"
                        alt=""
                      />
                    </Card>
                    <button className="p-2 bg-white text-black shadow-md shadow-neutral-700 rounded-[0.4rem] arial-font tracking-wider">
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
