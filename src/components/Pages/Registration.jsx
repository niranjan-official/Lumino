import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const Registration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "https://forms.gle/bYtspEc4xos4wyCv8";
  };
  return (
    <section id="registration">
      <div className="flex w-full flex-col gap-8 p-4 py-10 sm:p-10 md:flex-row lg:px-16">
        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="econo-light flex flex-col text-neutral-300 max-md:items-center max-md:text-center md:text-lg">
            <span className="text-4xl font-bold text-white md:text-5xl">
              Register Now
            </span>
            <p className="mt-4 md:mt-8">
              Join us at Providence College of Engineering for an exclusive
              event designed to ignite your entrepreneurial journey :
            </p>
            <ol className="mt-3 max-md:hidden md:mt-6">
              <li>◦ Keynote address and panel discussion</li>
              <li>◦ Interactive workshops and one-on-one metorig sessions</li>
              <li>
                ◦ Networkig oppertuities with idustry experts ad like-minded
                indivituals
              </li>
            </ol>
          </div>
        </div>
        <div className="flex w-full justify-center md:w-1/2">
          <div className="z-40 w-full rounded-2xl border border-neutral-500 bg-black p-5 md:w-3/4 lg:w-1/2">
            <h2 className="text-xl font-bold text-neutral-200">
              Register to Lumino
            </h2>
            <form onSubmit={handleSubmit} className="mb-4 mt-8">
              <LabelInputContainer className="z-50 mb-4">
                <Label htmlFor="firstname">Full Name</Label>
                <Input id="firstname" placeholder="Tyler" type="text" required />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  placeholder="projectmayhem@fc.com"
                  type="email"
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="phone">Phone No</Label>
                <Input
                  id="number"
                  placeholder="+91 9876543222"
                  type="numeric"
                  required
                />
              </LabelInputContainer>

              <button
                className="relative mt-4 h-10 w-full rounded-[0.6rem] bg-zinc-900 font-medium text-white shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Register Now &rarr;
              </button>

              <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default Registration;
