import React, { useState } from 'react';
import { levels } from 'common/const/textbook.const';

export const LevelSwitch: React.FC = () => {
  const [level, setLevel] = useState<string>('A1');

  const changeLevel = (lv: string) => setLevel(lv);

  return (
    <div className="level-switch">
      {levels.map((lv, index) => {
        return (
          <div
            key={index}
            className={lv.char === level ? 'level-switch__item' : 'level-switch__item level-switch__item_disabled'}
            onClick={() => changeLevel(lv.char)}
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
