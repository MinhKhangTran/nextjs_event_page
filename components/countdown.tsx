// Countdown app
// https://norbertbm.com/build-a-countdown-timer-using-react-react-hooks/

import React, { useState, useEffect } from "react";
import Clock from "./clock";

const countdownContent = {
  text: "Das Event startet in:",
  targetDate: 1814000000,
};

const Countdown = () => {
  const [timerDays, setTimerDays] = useState<number>();
  const [timerHours, setTimerHours] = useState<number>();
  const [timerMinutes, setTimerMinutes] = useState<number>();
  const [timerSeconds, setTimerSeconds] = useState<number>();
  let interval: any;

  const startTimer = () => {
    const countDownDate = new Date("august 08,2023 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <section className="" id="countdown" aria-label="countdown Abschnitt">
      <h2 className="heading-2 | text-center">{countdownContent.text}</h2>
      <Clock
        timerDays={timerDays!}
        timerHours={timerHours!}
        timerMinutes={timerMinutes!}
        timerSeconds={timerSeconds!}
      />
    </section>
  );
};

export default Countdown;
