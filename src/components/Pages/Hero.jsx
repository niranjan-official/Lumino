import React from "react";

const Hero = () => {
  return (
    <section id="home">
      <div className="w-full h-screen flex flex-col hero-bg">
        <div className="w-full h-full flex justify-center items-center">
          <img src="/lumino.svg" className="w-5/6 sm:w-1/2 h-auto" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
