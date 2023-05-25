
import React, { useEffect, useState } from "react";

// const targetTime = new Date("2035-01-01").getTime();
var today = new Date()
const targetTime = new Date().setDate(today.getDate()+20);

export const Countdown = () => {
  // const [currentTime, setCurrentTime] = useState(Date.now());
  const [currentTime, setCurrentTime] = useState(new Date(new Date().setDate(today.getDate() + 30)));

  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>Deadline comes in</p>
      <p className="counter text-white">
        <span>{days}d </span>
        <span>{hours}h </span>
        <span>{minutes}min </span>
        <span>{seconds}s</span>
      </p>
    </>
  );
};

export default Countdown;