import React from "react";
import ClubMarquee from "../ClubMarquee";

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col">
        <div className="flex w-full flex-col items-center bg-zinc-900/70 p-6 py-10 sm:px-10 lg:px-16">
          <div className="text-center">
            <h5 className="econo-light text-2xl font-semibold tracking-widest">
              AGENDA
            </h5>
            <p className="econo-light mt-5 text-xl text-neutral-300 sm:text-3xl">
              LUMINO Bootcamp is designed as a structured, multi-phase program
              aimed at empowering aspiring professionals. The journey begins
              with a focus on enhancing essential interpersonal and
              communication skills, crucial for any professional setting.
              Participants will progress through workshops, hands-on activities,
              and interactive sessions, each phase building on the previous one
              to develop key competencies necessary for career success. The
              bootcamp emphasizes real-world application of skills, fostering
              growth in leadership, collaboration, and adaptability throughout
              the program.
            </p>
          </div>
        </div>
        <ClubMarquee />
        <div className="flex w-full flex-col items-center bg-zinc-900/70 p-6 py-10 sm:px-10 lg:px-16">
          <div className="text-center">
            <h5 className="econo-light text-2xl font-semibold tracking-widest">
              Why LUMINO ?
            </h5>
            <p className="econo-light mt-5 text-xl text-neutral-300 sm:text-3xl">
              Join Lumino to develop into a well-rounded professional equipped
              with essential soft skills, creative problem-solving abilities,
              and advanced technical expertise. Lumino prepares you for success
              by enhancing your communication, fostering innovative thinking,
              and providing hands-on experience with cutting-edge technologies,
              ensuring you're ready to lead and excel in any field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
