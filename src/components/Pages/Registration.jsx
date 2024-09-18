import React from "react";

const Registration = () => {
  return (
    <section>
      <div className="w-full flex p-4 sm:px-10 lg:px-16">
        <div className="w-1/2">
          <div className="w-1/2 p-10 shadow-md reg-bg pb-16">
            <p className="text-lg text-neutral-400">Enter your credentials</p>
            <form className="flex flex-col items-start gap-6 mt-8" action="">
              <input type="text" className="w-full" placeholder="Name" />
              <input type="text" className="w-full" placeholder="Email" />
              <input type="text" className="w-full" placeholder="Phone" />
              <button className="border border-blue-400 rounded-3xl p-1 px-3">
                Select phase
              </button>
              <div className="w-full flex justify-end">
                <button type="submit" className="p-2 bg-green-500 px-5 font-extrabold text-lg">
                  Register 
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </section>
  );
};

export default Registration;
