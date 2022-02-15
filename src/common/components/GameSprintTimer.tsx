import React, { useState, useEffect } from 'react';
import { IVisiblePopup } from 'common/interfaces/interfaces';

export const GameSprintTimer: React.FC<IVisiblePopup> = ({ changeVisibilityPopup }) => {
  // Возможно лучше переписать через дженерик

  const [time, setTime] = useState<number | string>(60);

  const returnTimeProgress = () => {
    const timer = Number(time) - 1;
    if (typeof timer === 'number' && timer > 0) {
      setTime(timer);
    } else {
      setTime('Timeout');
      changeVisibilityPopup(true);
    }
  };

  useEffect(() => {
    const timerId = setTimeout(returnTimeProgress, 1000);
    if (time === 0) {
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [time]);

  return (
    <div className="sprint__timer">
      <div className="sprint__timer__outer">
        <div className="sprint__timer__inner">
          <div className="sprint__timer__clock">{time}</div>
        </div>
      </div>
      <svg className="sprint__timer__svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" strokeLinecap="round" />
      </svg>
    </div>
  );
};
