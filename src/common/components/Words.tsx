import React, { useState } from 'react';

const words = [
  'well',
  'also',
  'play',
  'small',
  'end',
  'put',
  'home',
  'read',
  'hand',
  'port',
  'large',
  'spell',
  'follow',
  'why',
  'change',
  'light',
  'neneed',
  'need',
  'act',
  'went',
];

interface IComponentProps {
  level: string;
}

export const Words: React.FC<IComponentProps> = (props) => {
  const { level } = props;
  const [word, setWord] = useState<string>(words[0]);
  const bgClassName = `bg-${level}`;

  return (
    <div className="words">
      <p className="page__subtitle">Слова</p>
      <div className="words__wrapper">
        <div className="words__section">
          {words.map((wd, index) => {
            return (
              <div key={index} className={`words__item ${wd === word && bgClassName}`} onClick={() => setWord(wd)}>
                {wd}
              </div>
            );
          })}
        </div>
        <div className="words__presentation"></div>
      </div>
    </div>
  );
};
