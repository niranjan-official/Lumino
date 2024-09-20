import React from "react";

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
          <div className="w-full md:w-3/4 lg:w-1/2 p-5 shadow shadow-neutral-500 reg-bg pb-6">
            <p className="text-lg text-neutral-400">Enter your credentials</p>
            <form className="flex flex-col items-start gap-6 mt-8" action="">
              <input type="text" className="w-full" placeholder="Name" />
              <input type="text" className="w-full" placeholder="Email" />
              <input type="text" className="w-full" placeholder="Phone" />
              <button className="bg-black border border-blue-400 rounded-3xl p-1 px-3">
                Select phase
              </button>
              <div className="w-full flex justify-end">
                <button
                  type="submit"
                  className="p-2 bg-green-600 rounded-[0.4rem] px-5 arial-font text-lg"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
