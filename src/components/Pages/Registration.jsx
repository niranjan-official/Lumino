import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const Registration = () => {
  return (
    <section id="registration">
      <div className="w-full flex flex-col gap-8 md:flex-row p-4 py-10 sm:p-10 lg:px-16">
        <div className="w-full md:w-1/2 flex justify-center items-center ">
          <div className="flex flex-col max-md:items-center md:text-lg text-neutral-300 econo-light max-md:text-center">
            <span className="font-bold text-white text-4xl md:text-5xl">
              Register Now
            </span>
            <p className="mt-4 md:mt-8">
              Join us at Providence College of Engineering for an exclusive
              event designed to ignite your entrepreneurial journey :
            </p>
            <ol className="mt-3 md:mt-6 max-md:hidden">
              <li>◦ Keynote address and panel discussion</li>
              <li>◦ Interactive workshops and one-on-one metorig sessions</li>
              <li>
                ◦ Networkig oppertuities with idustry experts ad like-minded
                indivituals
              </li>
            </ol>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full md:w-3/4 lg:w-1/2 p-5 border border-neutral-500 rounded-2xl z-50 bg-black">
            <h2 className="font-bold text-xl text-neutral-200">
              Register to Lumino
            </h2>
            <form className="mt-8 mb-4">
              <LabelInputContainer className="mb-4 z-50">
                <Label htmlFor="firstname">Full Name</Label>
                <Input id="firstname" placeholder="Tyler" type="text" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  placeholder="projectmayhem@fc.com"
                  type="email"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="phone">Phone No</Label>
                <Input
                  id="number"
                  placeholder="+91 9876543222"
                  type="numeric"
                />
              </LabelInputContainer>

              <button
                className="relative bg-zinc-900 w-full text-white rounded-[0.4rem] mt-4 h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Register Now &rarr;
              </button>

              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-8 h-[1px] w-full" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Registration;
