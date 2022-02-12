import React, { useState } from 'react';
import { Paginator } from 'common/components/Paginator';
import { basePath } from 'common/config/env.config';
import { IWord } from 'common/interfaces/interfaces';

interface IComponentProps {
  group: number;
  words: IWord[];
  page: number;
  setPage: (page: number) => void;
  isVisibleTranslation: boolean;
}

export const Words: React.FC<IComponentProps> = (props) => {
  const { group, words, page, setPage, isVisibleTranslation } = props;
  const [word, setWord] = useState<IWord>(words[0]);
  const pageSize = 30;
  const bg = `bg-${group}`;

  return (
    <div className="words">
      <p className="page__subtitle">Слова</p>
      <div className="words__wrapper">
        <div>
          <div className="words__section">
            {words.map((wd, index) => {
              return (
                <div key={index} className={`words__item ${wd.word === word.word && bg}`} onClick={() => setWord(wd)}>
                  {wd.word}
                </div>
              );
            })}
          </div>
          <Paginator currentPage={page} totalCount={words.length * pageSize} pageSize={words.length} onPageChange={setPage} />
        </div>
        <div className="words__presentation">
          <div className="words__presentation_header">
            <div>
              <p className="words__presentation_word">{word.word}</p>
              <p className={`words__presentation_translate ${!isVisibleTranslation && 'unvisible'}`}>{word.wordTranslate}</p>
              <div className="words__presentation_transcription">
                <span>{word.transcription}</span>
                <button className="words__presentation_play"></button>
              </div>
            </div>
            <div className="words__presentation_img" style={{ backgroundImage: `url(${basePath}/${word.image})` }}></div>
          </div>
          <p className="words__presentation_meaning">Значение</p>
          <p>{word.textMeaning}</p>
          <p className={!isVisibleTranslation ? 'unvisible' : ''}>{word.textMeaningTranslate}</p>
          <p className="words__presentation_meaning">Перевод</p>
          <p>{word.textExample}</p>
          <p className={!isVisibleTranslation ? 'unvisible' : ''}>{word.textExampleTranslate}</p>
        </div>
      </div>
    </div>
  );
};
