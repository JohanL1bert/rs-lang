import React, { useState } from 'react';
import { GameSprintBoard } from 'common/components/GameSprintBoard';

export const GameSprintSelectLvl = () => {
  const [visibleSetting, setVisibleSetting] = useState(false);
  const [lvlDifficulty, setLevelDifficulty] = useState<number>(0);

  const goToGame = (value: number) => {
    setVisibleSetting(true);
    setLevelDifficulty(value);
  };

  return (
    <section className="sprint__level">
      {!visibleSetting ? (
        <div className="sprint__level__inner">
          <div className="sprint__level__wrapper">
            <h3 className="sprint__level__header">Выберите сложность</h3>
            <p className="sprint__level__description">Описание: уровень влияет на сложность слов, которые попадаются</p>
            <div className="sprint__level__items">
              <button className="sprint__level__btn" onClick={() => goToGame(0)}>
                1 Уровень
              </button>
              <button className="sprint__level__btn" onClick={() => goToGame(1)}>
                2 Уровень
              </button>
              <button className="sprint__level__btn" onClick={() => goToGame(2)}>
                3 Уровень
              </button>
              <button className="sprint__level__btn" onClick={() => goToGame(3)}>
                4 Уровень
              </button>
              <button className="sprint__level__btn" onClick={() => goToGame(4)}>
                5 Уровень
              </button>
              <button className="sprint__level__btn" onClick={() => goToGame(5)}>
                6 Уровень
              </button>
            </div>
          </div>
        </div>
      ) : (
        <GameSprintBoard lvlValue={lvlDifficulty} />
      )}
    </section>
  );
};
