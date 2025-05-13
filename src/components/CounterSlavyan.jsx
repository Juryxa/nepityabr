import React, {useEffect, useState} from 'react';


const CounterSlavyan = () => {
  const targetDate = 	1746991980;
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now() / 1000;
      const difference = now - targetDate;
      setElapsedTime(difference);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (time) => {
    let years = Math.floor(time / (60 * 60 * 24 * 365));
    let days = Math.floor(time % ( 60 * 60 * 24 * 365) / (60 * 60 * 24)).toString().padStart(2, "0");
    let hours = Math.floor((time % (60 * 60 * 24)) / ( 60 * 60)).toString().padStart(2, "0");
    let minutes = Math.floor((time % (60 * 60)) / (60)).toString().padStart(2, "0");
    let seconds = Math.floor((time % (60))).toString().padStart(2, "0");

    return `${years}:${days}:${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>Я не бухаю уже</h1>
      <div className="frame">
        <span className="time">
          {formatTime(elapsedTime)}
        </span>
      </div>
    </div>
  );
};

export default CounterSlavyan;
