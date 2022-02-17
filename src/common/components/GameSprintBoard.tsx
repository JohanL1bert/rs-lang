import React, { useEffect, useState } from 'react';
import { GameSprintCard } from 'common/components/GameSprintCard';
import { GameSprintSetting } from 'common/components/GameSprintSetting';
import { GameSprintTimer } from 'common/components/GameSprintTimer';
import { GameSprintPopup } from 'common/components/GameSprintPopup';
import { IWord } from 'common/interfaces/interfaces';
import { basePath } from 'common/config/env.config';
import { useSprinStateWords } from 'entities/sprintWords/sprintStateWords';

export const GameSprintBoard = ({ lvlValue }: { lvlValue: number }) => {
  /*   const { sprintWords, getSprintWords } = useSprinStateWords(); */
  const [audioV, setAudioV] = useState<boolean>(true);
  const [correctWords, setCorrectWords] = useState<string>('');
  const [stateOfData, setStateofData] = useState<{}>({});

  const [visiblePopup, setVisiblePopup] = useState<boolean>(false);

  const randomPageChoice = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const fetcherWords = async (group: number, page: number) => {
    const response = await fetch(`${basePath}/words?group=${group}&page=${page}`, {
      method: 'GET',
      cache: 'no-cache',
    });
    return await response.json();
  };

  const callback = (result: Promise<IWord[]>) => {
    result.then((value: IWord[]) => {
      const choiceWord: number = randomPageChoice(value.length - 1, 0);
      const fakeWord: number = randomPageChoice(value.length - 1, 0);
      const valueOfTrue = randomPageChoice(1, 0);
      const wordTrue: IWord = value[choiceWord];
      console.log(wordTrue, ' true');
      const wordFalse: IWord = value[fakeWord];
      if (valueOfTrue === 1) {
        const { audio, word, wordTranslate }: { audio: string; word: string; wordTranslate: string } = wordTrue;
        setStateofData({
          audio: audio,
          word: word,
          wordTranslate: wordTranslate,
          truthy: 1,
        });
      } else {
        const { audio, word, wordTranslate }: { audio: string; word: string; wordTranslate: string } = wordTrue;
        console.log(wordFalse, 'false');
        const falseWord = wordFalse.wordTranslate;
        setStateofData({
          audio: audio,
          word: word,
          wordTranslate: falseWord,
          truthy: 0,
        });
      }
    });
  };

  const renderComponentData = () => {
    const randomPage = randomPageChoice(6, 1);
    const result: Promise<IWord[]> = fetcherWords(lvlValue, randomPage);
    callback(result);
  };

  useEffect(() => {
    renderComponentData();
  }, []);

  return (
    <div className="game__board">
      {visiblePopup && <GameSprintPopup />}
      <div className="game__board__inner">
        <div className="game__board__setting">
          <GameSprintSetting
            {...{
              audioV: audioV,
              setAudioV: setAudioV,
            }}
          />
        </div>
        <div className="game__board__timer">
          <GameSprintTimer changeVisibilityPopup={setVisiblePopup} />
        </div>
        <GameSprintCard audioV={audioV} wordObj={stateOfData} funData={renderComponentData} />
      </div>
    </div>
  );
};
