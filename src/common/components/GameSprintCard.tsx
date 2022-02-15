import React from 'react';

export const GameSprintCard = () => {
  const isCorrect = () => {};

  return (
    <div className="sprint__card">
      <div className="sprint__card__inner">
        <div className="sprint__card__wrapper">
          <div className="sprint__card__points card__point">
            Очки:
            <span className="card__point__info">0</span>
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
            <button className="card__btn__yes">Правильно</button>
          </div>
        </div>
      </div>
    </div>
  );
};
