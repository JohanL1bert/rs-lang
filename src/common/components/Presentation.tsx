import React, { useEffect, useState } from 'react';
import { IWord } from 'common/interfaces/interfaces';
import { basePath } from 'common/config/env.config';
import { PresentationBtn } from 'common/components/PresentationBtn';
import { useLoaderBgImage } from 'common/hooks/useLoaderBgImage';
import { SkeletonTextBookImg } from 'common/skeleton/SkeletonTextBookImg';
import { useStateWords } from 'entities/words/stateWords';
import { useStateAuth } from 'entities/auth/stateAuth';

interface IComponentProps {
  group: number;
  word: IWord;
  isVisibleTranslation: boolean;
  audio: HTMLAudioElement[];
  content: string;
  filter: string;
  loaderImg: any;
}

export const Presentation: React.FC<IComponentProps> = (props) => {
  const { group, word, isVisibleTranslation, audio, content, loaderImg } = props;
  const { user, token, isAuth } = useStateAuth();
  const { addToDifficulty, addToRemote } = useStateWords();

  const play = (idx: number) => {
    audio.forEach((item) => {
      item.pause();
    });

    audio[idx].play();
  };

  const addToDifficult = () => {
    const params = { difficulty: 'difficult', optional: { isDeleted: false } };

    if (user) {
      addToDifficulty(user.id, word.id, params, token);
    }
  };

  const addWordToRemote = () => {
    const params = { difficulty: 'studied', optional: { isDeleted: false } };

    if (user) {
      addToRemote(user.id, word.id, token, params);
    }
  };

  return (
    <div className="presentation">
      <div className="presentation__border">
        <div className="presentation__header">
          <div>
            <p className="presentation__word">{word.word}</p>
            <p className={`presentation__translate ${!isVisibleTranslation && 'unvisible'}`}>{word.wordTranslate}</p>
            <div className="presentation__transcription">
              <button className="presentation__play" onClick={() => play(0)}></button>
              <span>{word.transcription}</span>
            </div>
          </div>
          {loaderImg ? (
            <div className="presentation__img" style={{ backgroundImage: `url(${loaderImg})` }}></div>
          ) : (
            <SkeletonTextBookImg></SkeletonTextBookImg>
          )}
        </div>
        {isAuth && content === 'textbook' && (
          <div className="presentation__btns">
            <PresentationBtn group={group} title="в складні слова" onClick={addToDifficult} />
            <PresentationBtn group={group} title="видалити слово" onClick={addWordToRemote} />
          </div>
        )}
        <p className="presentation__meaning">Значення</p>
        <div className="presentation__transcription">
          <button className="presentation__play" onClick={() => play(1)}></button>
          {/* eslint-disable-next-line */}
          <span dangerouslySetInnerHTML={{ __html: word.textMeaning }}></span>
        </div>
        <p className={!isVisibleTranslation ? 'unvisible' : ''}>{word.textMeaningTranslate}</p>
        <p className="presentation__meaning">Переклад</p>
        <div className="presentation__transcription">
          <button className="presentation__play" onClick={() => play(2)}></button>
          {/* eslint-disable-next-line */}
          <span dangerouslySetInnerHTML={{ __html: word.textExample }}></span>
        </div>
        <p className={!isVisibleTranslation ? 'unvisible' : ''}>{word.textExampleTranslate}</p>
      </div>
    </div>
  );
};
