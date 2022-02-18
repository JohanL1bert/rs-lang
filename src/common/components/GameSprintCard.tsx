import React, { useEffect, useState } from 'react';
import { basePath } from 'common/config/env.config';
import { IStateOfPopupData } from 'common/interfaces/interfaces';
import correctMusic from 'app/assets/sound/correct.wav';
import failMusic from 'app/assets/sound/fail.wav';

export const GameSprintCard = (props: any) => {
  const { audioV, wordObj, funData, setStateOfPopup } = props;
  const { audio, word, wordTranslate, transcription, truthy, isWordReal } = wordObj;
  const [score, setScore] = useState<number>(0);
  const [scoreTrick, setScoreTrick] = useState<number>(0);
  const [scoreCounter, setScoreCounter] = useState<number>(0);
  const [visiblePoint, setVisblePoint] = useState<boolean>(false);

  const playFilter = (music: string) => {
    const isMusic = new Audio(music);
    isMusic.play();
  };

  const poinStore = (isCorrectChoice: boolean) => {
    if (isCorrectChoice) {
      let scoreCount: number = 0;
      const point = score + 10;
      const scorePoint = scoreTrick + 1;

      if (scorePoint < 4) {
        setScoreTrick(scorePoint);
      }

      if (scoreTrick === 3) {
        scoreCount = scoreCounter + 5;
        setScoreCounter(scoreCount);
        setVisblePoint(true);
      }

      const pointToSetScore: number = point + scoreCount;
      setScore(pointToSetScore);
    } else {
      setScoreTrick(0);
      setScoreCounter(0);
    }
  };

  const isCorrect = (clicked: boolean) => {
    let music;
    let isCorrectChoice: boolean;

    if ((!!clicked && !!truthy) || (clicked === false && truthy === 0)) {
      music = correctMusic;
      isCorrectChoice = true;
    } else {
      music = failMusic;
      isCorrectChoice = false;
    }

    if (audioV) {
      playFilter(music);
    }

    poinStore(isCorrectChoice);

    setStateOfPopup((prev: any) => {
      return [
        ...prev,
        {
          audio: audio,
          word: word,
          wordTranslate: wordTranslate,
          transcription: transcription,
          isCorrectChoice: isCorrectChoice,
        },
      ];
    });

    funData();
  };

  const playWord = () => {
    const wordAudio = new Audio(`${basePath}/${audio}`);
    wordAudio.play();
  };

  useEffect(() => {
    setTimeout(() => {
      setVisblePoint(false);
    }, 3000);
  }, [visiblePoint]);

  const getAnimationPoint = () => {
    return <span className="card__point__add__point">+{scoreCounter}</span>;
  };

  return (
    <div className="sprint__card">
      <div className="sprint__card__inner">
        <div className="sprint__card__wrapper">
          <div className="sprint__card__points card__point">
            Очки:
            <span className="card__point__info">{score}</span>
            {scoreCounter > 0 && visiblePoint ? getAnimationPoint() : null}
            <div className="card__point__items">
              {[...Array(scoreTrick)].map((_, i) => (
                <div key={i} className="card__point__strick"></div>
              ))}
            </div>
          </div>
          <div className="sprint__card__info card__info">
            <div className="card__info__music" onClick={playWord}></div>
            <div className="card__info__english">{word}</div>
            <div className="card__info__translate">{isWordReal}</div>
          </div>
          <div className="sprint__card__btn card__btn">
            <button className="card__btn__no" onClick={() => isCorrect(false)}>
              Неправильно
            </button>
            <button className="card__btn__yes" onClick={() => isCorrect(true)}>
              Правильно
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
