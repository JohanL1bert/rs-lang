import React, { useState } from 'react';
import { basePath } from 'common/config/env.config';
import { GameSprintStatistic } from 'common/components/GameSprintStatistic';

export const GameSprintPopup = (props: any) => {
  const { data } = props;

  const wordSound = (sound: string) => {
    console.log(sound);
    const word: HTMLAudioElement = new Audio(`${basePath}/${sound}`);
    word.play();
  };

  return (
    <div className="sprint__popup">
      {
        <div className="sprint__popup__inner">
          <div className="sprint__popup__result">
            <h2 className="sprint__popup__header">Результат игры:</h2>
          </div>
          <div className="sprint__popup__statistic">
            <ul className="sprint__items">
              {data.map((item: any, i: number) => (
                <li key={i} className="sprint__item">
                  <p className="sprint__item__sound" onClick={() => wordSound(item.audio)}></p>
                  <p className="sprint__item__word">{item.word}</p>
                  <p className="sprint__item__transcription">{item.transcription}</p>
                  <p className="sprint__item__translate">{item.wordTranslate}</p>
                  <p className={item.isCorrectChoice ? 'sprint__item__correct' : 'sprint__item__incorrect'}></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      }
    </div>
  );
};
