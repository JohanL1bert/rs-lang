import React, { useState } from 'react';

export const GameSprintPopup = () => {
  const [isCorrect, setCorrect] = useState<boolean[]>([false]);

  return (
    <div className="sprint__popup">
      <div className="sprint__popup__inner">
        <div className="sprint__popup__result">
          <h2 className="sprint__popup__header">Результат игры:</h2>
        </div>
        <div className="sprint__popup__statistic">
          <ul className="sprint__items">
            <li className="sprint__item">
              <p className="sprint__item__sound">Sound</p>
              <p className="sprint__item__word">English слово</p>
              <p className="sprint__item__transcription">Транскрипция</p>
              <p className="sprint__item__translate">Перевод</p>
              <p className="sprint__item__correct"></p>
            </li>
            <li className="sprint__item">
              <p className="sprint__item__sound">Sound</p>
              <p className="sprint__item__word">English слово</p>
              <p className="sprint__item__transcription">Транскрипция</p>
              <p className="sprint__item__translate">Перевод</p>
              <p className="sprint__item__incorrect"></p>
            </li>
            <li className="sprint__item">
              <p className="sprint__item__sound">Sound</p>
              <p className="sprint__item__word">English слово</p>
              <p className="sprint__item__transcription">Транскрипция</p>
              <p className="sprint__item__translate">Перевод</p>
              <p className="sprint__item__correct"></p>
            </li>
            <li className="sprint__item">
              <p className="sprint__item__sound">Sound</p>
              <p className="sprint__item__word">English слово</p>
              <p className="sprint__item__transcription">Транскрипция</p>
              <p className="sprint__item__translate">Перевод</p>
              <p className="sprint__item__incorrect"></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
