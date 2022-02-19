import React, { useEffect, useState } from 'react';
import { GameSprintCard } from 'common/components/GameSprintCard';
import { GameSprintSetting } from 'common/components/GameSprintSetting';
import { GameSprintTimer } from 'common/components/GameSprintTimer';
import { GameSprintPopup } from 'common/components/GameSprintPopup';
import { IWord } from 'common/interfaces/interfaces';
import { basePath } from 'common/config/env.config';
import { Spinner } from 'common/components/Spinner';
import { useSprinStateWords } from 'entities/sprintWords/sprintStateWords';

export const GameSprintBoard = ({ lvlValue }: { lvlValue: number }) => {
  const { sprintWords, getSprintWords, sprintLoading } = useSprinStateWords();
  const [audioV, setAudioV] = useState<boolean>(true);
  const [stateOfData, setStateofData] = useState<{}>({});
  const [stateOfPopup, setStateOfPopup] = useState([]);

  const [visiblePopup, setVisiblePopup] = useState<boolean>(false);
  /*   const [stateOfRepeat, setStateOfRepeat] = useState<string[]>([]);
  const [randomNumber, setStateRandomNumber] = useState<number[]>([]); */

  const randomPageChoice = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const callback = (value: IWord[]) => {
    console.log(value, 'value', '1');
    const choiceWord: number = randomPageChoice(value.length - 1, 0);
    const fakeWord: number = randomPageChoice(value.length - 1, 0);
    const valueOfTrue = randomPageChoice(1, 0);
    const wordTrue: IWord = value[choiceWord];
    const wordFalse: IWord = value[fakeWord];
    const {
      audio,
      word,
      wordTranslate,
      transcription,
    }: { audio: string; word: string; wordTranslate: string; transcription: string } = wordTrue;
    if (valueOfTrue === 1) {
      setStateofData({
        audio: audio,
        word: word,
        wordTranslate: wordTranslate,
        transcription: transcription,
        isWordReal: wordTranslate,
        truthy: 1,
      });
    } else {
      const falseWord = wordFalse.wordTranslate;
      setStateofData({
        audio: audio,
        word: word,
        wordTranslate: wordTranslate,
        transcription: transcription,
        isWordReal: falseWord,
        truthy: 0,
      });
    }
  };

  const renderComponentData = () => {
    callback(sprintWords);
  };

  useEffect(() => {
    const randomPage = randomPageChoice(6, 1);
    getSprintWords(lvlValue, randomPage);
    /*     setStateRandomNumber((prev) => [...prev, randomPage]); */
  }, []);

  useEffect(() => {
    if (!sprintLoading) {
      renderComponentData();
    }
  }, [sprintLoading]);

  if (sprintLoading) {
    return <Spinner />;
  }

  return (
    <div className="game__board">
      {visiblePopup && <GameSprintPopup data={stateOfPopup} />}
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
        <GameSprintCard
          audioV={audioV}
          wordObj={stateOfData}
          funData={renderComponentData}
          setStateOfPopup={setStateOfPopup}
          sprintLoading={sprintLoading}
        />
      </div>
    </div>
  );
};

/*   const addToFilterWords = (dataWords: any) => {
    console.log(stateOfRepeat, 'stateofRepeat');
    console.log(randomNumber, 'randomNumber');

    if (!stateOfRepeat.includes(dataWords.id)) {
      setStateOfRepeat((prev) => [...prev, dataWords.id]);
    } else {
      const choiceWord = randomPageChoice(19, 0);
      addToFilterWords(dataWords[choiceWord]);
    } */

/*     if (!stateOfRepeat.includes(dataWords.id)) {
      setStateOfRepeat((prev) => {
        if (!prev.includes(dataWords.id)) {
          [...prev, dataWords.id];
        }
      });
    } else {
      const choiceWord = randomPageChoice(20, 0);
      addToFilterWords(dataWords[choiceWord]);
    } */

/*   const fetcherWords = async (group: number, page: number) => {
    const response = await fetch(`${basePath}/words?group=${group}&page=${page}`, {
      method: 'GET',
      cache: 'no-cache',
    });
    return await response.json();
  };
 */
