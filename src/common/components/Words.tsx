import React, { useState } from 'react';
import { Paginator } from 'common/components/Paginator';
import { basePath } from 'common/config/env.config';
import { IWord } from 'common/interfaces/interfaces';
import { Presentation } from 'common/components/Presentation';

interface IComponentProps {
  words: IWord[];
  group: number;
  page: number;
  setPage: (page: number) => void;
  totalCount: number | null;
  content: string;
  isVisibleTranslation: boolean;
  filter: string;
}

export const Words: React.FC<IComponentProps> = (props) => {
  const { words, group, page, setPage, totalCount, content, isVisibleTranslation, filter } = props;
  const [word, setWord] = useState<IWord>(words[0]);
  const [audio, setAudio] = useState<HTMLAudioElement[]>([
    new Audio(`${basePath}/${word.audio}`),
    new Audio(`${basePath}/${word.audioMeaning}`),
    new Audio(`${basePath}/${word.audioExample}`),
  ]);
  const pageSize = content === 'textbook' ? 30 : totalCount ? Math.ceil(totalCount / 20) : 1;
  const bg = `bg-${group}`;

  const changeWord = (wd: IWord) => {
    setWord(wd);
    setAudio([
      new Audio(`${basePath}/${wd.audio}`),
      new Audio(`${basePath}/${wd.audioMeaning}`),
      new Audio(`${basePath}/${wd.audioExample}`),
    ]);
  };

  return (
    <div className="words">
      <p className="page__subtitle">Слова</p>
      <div className="words__wrapper">
        <div>
          <div className="words__section">
            {words.map((wd, index) => {
              return (
                <div key={index} className={`words__item ${wd.word === word.word && bg}`} onClick={() => changeWord(wd)}>
                  {wd.word}
                </div>
              );
            })}
          </div>
          <Paginator currentPage={page} totalCount={words.length * pageSize} pageSize={words.length} onPageChange={setPage} />
        </div>
        <Presentation
          group={group}
          word={word}
          isVisibleTranslation={isVisibleTranslation}
          audio={audio}
          content={content}
          filter={filter}
        />
      </div>
    </div>
  );
};
