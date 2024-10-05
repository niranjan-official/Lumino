import React, { useEffect, useState } from "react";
const Counter = () => {
  const [days, setdays] = useState(0);
  const [hours, sethours] = useState(0);
  const [mins, setmins] = useState(0);
  const [secs, setsecs] = useState(0);

  // const deadline = "October, 05, 2024";
  // const getTime = () => {
  //   const time = Date.parse(deadline) - Date.now();
  //   setdays(Math.floor(time / (1000 * 60 * 60 * 24)));
  //   sethours(Math.floor((time / (1000 * 60 * 60)) % 24));
  //   setmins(Math.floor((time / 1000 / 60) % 60));
  //   setsecs(Math.floor((time / 1000) % 60));
  // };
  // useEffect(() => {
  //   const interval = setInterval(() => getTime(deadline), 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col items-center p-6 py-10 text-center sm:px-10 lg:px-16">
      <div className="mb-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      <h4 className="arial-font text-2xl md:text-4xl">Mark Your Calenders</h4>
      <p className="econo-light mt-2 md:mt-4 text-center text-neutral-300 md:text-lg">
        The countdown begins, where every second whispers <br className="max-md:hidden" /> the promise of
        tomorrow.
      </p>

      <div className="flex justify-center text-3xl md:text-4xl lg:text-6xl mt-2">
        <div className="flex flex-col items-center justify-center">
          <div>{days < 10 ? "0" + days : days}</div>
          <p className="text-xs text-neutral-300 text-secondary">Days</p>
        </div>

        <p className="ml-2 mr-2 text-3xl md:text-4xl lg:text-7xl">:</p>

        <div className="flex flex-col items-center justify-center">
          <div>{hours < 10 ? "0" + hours : hours}</div>

          <p className="text-xs text-neutral-300 text-secondary">Hours</p>
        </div>

        <p className="ml-2 mr-2 text-3xl md:text-4xl lg:text-7xl">:</p>

        <div className="flex flex-col items-center justify-center">
          <div>{mins < 10 ? "0" + mins : mins}</div>

          <p className="text-xs text-neutral-300 text-secondary">Minutes</p>
        </div>

        <p className="ml-2 mr-2 text-3xl md:text-4xl lg:text-7xl">:</p>

        <div className="flex flex-col items-center justify-center">
          <div>{secs < 10 ? "0" + secs : secs}</div>

          <p className="text-xs text-neutral-300 text-secondary">Seconds</p>
        </div>
      </div>
      <span className="text-2xl font-semibold mt-4">The Event has begun !</span>
      <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
    </div>
  );
};

export default Counter;
