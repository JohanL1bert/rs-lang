import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GameSprintBoard } from 'common/components/GameSprintBoard';

interface IComponentProps {
  group: number;
}

export const GameSprintSelectLvl: React.FC = () => {
  const [visibleSetting, setVisibleSetting] = useState(false);
  const [lvlDifficulty, setLevelDifficulty] = useState<number>(0);
  const location = useLocation();
  const state = location.state as IComponentProps;
  const group = state ? state.group : undefined;

  const goToGame = (value: number) => {
    setVisibleSetting(true);
    setLevelDifficulty(value);
  };

  return (
    <section className="sprint__level">
      {group !== undefined ? (
        !visibleSetting ? (
          <div className="sprint__level__inner">
            <div className="sprint__level__wrapper">
              <p className="sprint__level__description">Игра начнется с текущими словами из словаря</p>
              <div className="sprint__level__items">
                <button className="sprint__level__btn" onClick={() => goToGame(group)}>
                  Начать
                </button>
              </div>
            </div>
          </div>
        ) : (
          <GameSprintBoard lvlValue={lvlDifficulty} />
        )
      ) : !visibleSetting ? (
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
