import React, { useState } from 'react';
import correctMusic from 'app/assets/sound/correct.wav';
import failMusic from 'app/assets/sound/fail.wav';

export const GameSprintCard = (props: { audio: boolean }) => {
  const { audio } = props;
  const [score, setScore] = useState(0);

  const isCorrect = () => {
    if (audio) {
      const music = new Audio(correctMusic);
      music.play();
    }
    const point = score + 10;
    setScore(point);
  };

  const changeScore = () => {};

  return (
    <div className="sprint__card">
      <div className="sprint__card__inner">
        <div className="sprint__card__wrapper">
          <div className="sprint__card__points card__point">
            Очки:
            <span className="card__point__info">{score}</span>
            <div className="card__point__strick"></div>
          </div>
          <div className="sprint__card__info card__info">
            <div className="card__info__music"></div>
            <div className="card__info__english">Здесь будет слово</div>
            <div className="card__info__translate">Здесь будет переведенное слово</div>
          </div>
          <div className="sprint__card__btn card__btn">
            <button className="card__btn__no" onClick={() => isCorrect()}>
              Неправильно
            </button>
            <button className="card__btn__yes" onClick={() => isCorrect()}>
              Правильно
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
