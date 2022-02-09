import React, { useState } from 'react';
import { Paginator } from 'common/components/Paginator';
import { basePath } from 'common/config/env.config';
import { IWord } from 'common/interfaces/interfaces';

interface IComponentProps {
  words: IWord[];
  page: number;
  setPage: (page: number) => void;
}

export const Words: React.FC<IComponentProps> = (props) => {
  const { words, page, setPage } = props;
  const [word, setWord] = useState<IWord>(words[0]);
  const pageSize = 30;

  return (
    <div className="words">
      <p className="page__subtitle">Слова</p>
      <div className="words__wrapper">
        <div className="words__section">
          {words.map((wd, index) => {
            return (
              <div key={index} className="words__item" onClick={() => setWord(wd)}>
                {wd.word}
              </div>
            );
          })}
          <Paginator currentPage={page} totalCount={words.length * pageSize} pageSize={words.length} onPageChange={setPage} />
        </div>
        <div className="words__presentation">
          <div className="words__presentation_img" style={{ backgroundImage: `url(${basePath}/${word.image})` }}></div>
          <p className="words__presentation_word">{word.word}</p>
          <p className="words__presentation_translation-word">{word.wordTranslate}</p>
          <div className="words__presentation_transcription">
            <span>{word.transcription}</span>
            <button className="words__presentation_play"></button>
          </div>
          <p>Значение</p>
          <p>{word.textMeaning}</p>
          <p>{word.textMeaningTranslate}</p>
          <p>Перевод</p>
          <p>{word.textExample}</p>
          <p>{word.textExampleTranslate}</p>
        </div>
      </div>
    </div>
  );
};
