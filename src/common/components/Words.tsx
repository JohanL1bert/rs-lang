import { IWord } from 'common/interfaces/interfaces';
import React, { useState } from 'react';

interface IComponentProps {
  group: number;
  words: IWord[];
}

export const Words: React.FC<IComponentProps> = (props) => {
  const { group, words } = props;
  // const [word, setWord] = useState<string>(words[0]);
  // const bgClassName = `bg-${level}`;

  return (
    <div className="words">
      <p className="page__subtitle">Слова</p>
      <div className="words__wrapper">
        <div className="words__section">
          {/* {words.map((word, index) => {
            return (
              <div key={index} className={`words__item ${wd === word && bgClassName}`} onClick={() => setWord(wd)}>
                {wd}
              </div>
            );
          })} */}
        </div>
        {/* <div className="words__presentation">
          <div className="words__presentation_img">img</div>
          <p className="words__presentation_word">{word}</p>
          <p className="words__presentation_translation-word">перевод слова</p>
          <div className="words__presentation_transcription">
            <span>[transcription]</span>
            <button className="words__presentation_play"></button>
          </div>
          <p>Значение</p>
          <p></p>
          <p></p>
        </div> */}
      </div>
    </div>
  );
};
