import React, { useEffect, useState } from 'react';
import { GameSprintCard } from 'common/components/GameSprintCard';
import { GameSprintSetting } from 'common/components/GameSprintSetting';
import { GameSprintTimer } from 'common/components/GameSprintTimer';
import { GameSprintPopup } from 'common/components/GameSprintPopup';
import { IWord } from 'common/interfaces/interfaces';
import { useSprinStateWords } from 'entities/sprintWords/sprintStateWords';

export const GameSprintBoard = ({ lvlValue }: { lvlValue: number }) => {
  const [audio, setAudio] = useState<boolean>(true);
  const [correctWords, setCorrectWords] = useState<string>('');
  const [stateOfData, setStateofData] = useState<number[]>([]);

  const [visiblePopup, setVisiblePopup] = useState<boolean>(false);

  const randomPageChoice = (max = 6, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const randomNumber = () => {};

  useEffect(() => {
    const randomPage = randomPageChoice();
    const value: Promise<IWord[]> = useSprinStateWords(lvlValue, randomPage);
    value.then((value) => {
      const getLen = value.length;
    });
    /*     [audio,
      audioExample,
      AudioMeaning,
      group,
      id,
      image,
      page,
      textExample,
      textExamplteTranslate,
      textMeaning,
      textMeaningTranstlate,
      transcription,
      words,
      wordTranslate;] */
  });

  return (
    <div className="game__board">
      {visiblePopup && <GameSprintPopup />}
      <div className="game__board__inner">
        <div className="game__board__setting">
          <GameSprintSetting
            {...{
              audio: audio,
              setAudio: setAudio,
            }}
          />
        </div>
        <div className="game__board__timer">
          <GameSprintTimer changeVisibilityPopup={setVisiblePopup} />
        </div>
        <GameSprintCard audio={audio} />
      </div>
    </div>
  );
};
