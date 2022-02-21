import React, { useState } from 'react';
import { basePath } from 'common/config/env.config';
import { GameSprintStatistic } from 'common/components/GameSprintStatistic';
import { ISprintPopup, IStateOfPopupData } from 'common/interfaces/interfaces';

export const GameSprintPopup = (props: ISprintPopup) => {
  const [isToggled, setIsToggled] = useState<boolean>(true);
  const { data } = props;

  const wordSound = (sound: string) => {
    const word: HTMLAudioElement = new Audio(`${basePath}/${sound}`);
    word.play();
  };

  const toggled = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="sprint__popup">
      {
        <div className="sprint__popup__inner">
          <div className="sprint__popup__result">
            <h2 className="sprint__popup__header">Результат игры:</h2>
            <div className="sprint__popup__toggle">
              <label className="sprint__popup__switch">
                <input type="checkbox" className="sprint__popup__checkbox" />
                <span className="sprint__popup__slider" onClick={toggled}></span>
              </label>
            </div>
          </div>
          {isToggled ? (
            <div className="sprint__popup__statistic">
              <ul className="sprint__items">
                {data.length > 0
                  ? data.map((item: IStateOfPopupData, i: number) => (
                      <li key={i} className="sprint__item">
                        <p className="sprint__item__sound" onClick={() => wordSound(item.audio)}></p>
                        <p className="sprint__item__word">{item.word}</p>
                        <p className="sprint__item__transcription">{item.transcription}</p>
                        <p className="sprint__item__translate">{item.wordTranslate}</p>
                        <p className={item.isCorrectChoice ? 'sprint__item__correct' : 'sprint__item__incorrect'}></p>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          ) : (
            <GameSprintStatistic dataOfStats={data} />
          )}
        </div>
      }
    </div>
  );
};
