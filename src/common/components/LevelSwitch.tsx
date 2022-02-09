import React from 'react';
import { levels } from 'common/const/textbook.const';

interface IComponentProps {
  level: string;
  setLevel: (value: string) => void;
}

export const LevelSwitch: React.FC<IComponentProps> = (props) => {
  const { level, setLevel } = props;

  return (
    <div className="level-switch">
      {levels.map((lv, index) => {
        return (
          <div
            key={index}
            className={lv.char === level ? 'level-switch__item' : 'level-switch__item level-switch__item_disabled'}
            onClick={() => setLevel(lv.char)}
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
