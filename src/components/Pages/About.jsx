import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="flex w-full bg-zinc-900/70 flex-col items-center p-6 py-10 sm:px-10 lg:px-16">
        <div className="text-center">
          <h5 className="econo-light font-semibold tracking-widest text-2xl">AGENDA</h5>
          <p className="mt-5 econo-light text-xl sm:text-3xl text-neutral-300">
            LUMINO Bootcamp is designed as a structured, multi-phase program
            aimed at empowering aspiring professionals. The journey begins with
            a focus on enhancing essential interpersonal and communication
            skills, crucial for any professional setting. Participants will
            progress through workshops, hands-on activities, and interactive
            sessions, each phase building on the previous one to develop key
            competencies necessary for career success. The bootcamp emphasizes
            real-world application of skills, fostering growth in leadership,
            collaboration, and adaptability throughout the program.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
