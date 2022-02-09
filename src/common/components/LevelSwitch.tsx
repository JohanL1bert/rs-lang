import React, { MouseEvent } from 'react';
import { levels } from 'common/const/textbook.const';

interface IComponentProps {
  group: number;
  setGroup: (value: number) => void;
}

export const LevelSwitch: React.FC<IComponentProps> = (props) => {
  const { group, setGroup } = props;

  const changeLevel = (e: MouseEvent<HTMLDivElement>) => {
    setGroup(Number(e.currentTarget.id));
  };

  return (
    <div className="level-switch">
      {levels.map((lv, index) => {
        return (
          <div
            key={index}
            className={index === group ? 'level-switch__item' : 'level-switch__item level-switch__item_disabled'}
            id={`${index}`}
            onClick={changeLevel}
          >
            <div className="level-switch__item_circle"></div>
            <span className="level-switch__item_char">{lv.char}</span>
            <span className="level-switch__item_title">{lv.title}</span>
          </div>
        );
      })}
    </div>
  );
};
