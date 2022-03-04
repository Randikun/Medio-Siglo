import React from "react";
import { useState } from "react";
import "./style/countdown.css";

const getRemainTime = (deadline) => {
  let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    seconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
    minutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
    hours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
    days = Math.floor(remainTime / (3600 * 24));

  return {
    seconds,
    minutes,
    hours,
    days,
    remainTime,
  };
};

export default function Countdown() {
  const [remainTime, setRemainTime] = useState(
    getRemainTime("Apr 03 2022 00:00:00 GMT-0500")
  );
  setInterval(() => {
    setRemainTime(getRemainTime("Apr 03 2022 00:00:00 GMT-0500"));
  });

  return (
    <div className="countdown">
      <div className="timePortion">
        <h2>{`${remainTime.days}`} </h2>
        <h4 className="h4">Días</h4>
      </div>
      <span>:</span>
      <div className="timePortion">
        <h2>{`${remainTime.hours}`}</h2>
        <h4 className="h4">Horas</h4>
      </div>
      <span>:</span>
      <div className="timePortion">
        <h2>{`${remainTime.minutes}`} </h2>
        <h4 className="h4">Minutos</h4>
      </div>
      <span>:</span>
      <div className="timePortion">
        <h2>{`${remainTime.seconds}`}</h2>
        <h4 className="h4">Segundos</h4>
      </div>
    </div>
  );
}
