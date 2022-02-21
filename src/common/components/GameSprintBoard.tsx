import React, { useEffect, useState } from 'react';
import { GameSprintCard } from 'common/components/GameSprintCard';
import { GameSprintSetting } from 'common/components/GameSprintSetting';
import { GameSprintTimer } from 'common/components/GameSprintTimer';
import { GameSprintPopup } from 'common/components/GameSprintPopup';
import { IWord, ICardResult, IStateOfPopupData } from 'common/interfaces/interfaces';
import { basePath } from 'common/config/env.config';
import { Spinner } from 'common/components/Spinner';
import { useSprinStateWords } from 'entities/sprintWords/sprintStateWords';

export const GameSprintBoard = ({ lvlValue }: { lvlValue: number }) => {
  const { sprintWords, getSprintWords, sprintLoading, setData } = useSprinStateWords();
  const [audioV, setAudioV] = useState<boolean>(true);
  const [stateOfData, setStateofData] = useState<ICardResult | {}>({});
  const [stateOfPopup, setStateOfPopup] = useState<IStateOfPopupData[]>([]);

  const [visiblePopup, setVisiblePopup] = useState<boolean>(false);
  const [stateOfRepeat, setStateOfRepeat] = useState<string[]>([]);
  const [pageNumber, setPageNumber] = useState<number[]>([]);
  const [recursiveCounter, setRecursiveCounter] = useState<number[]>([]);

  const cactherDeadZone = () => {
    if (pageNumber.length === 28) {
      setPageNumber([]);
    }
  };

  const randomPageChoice = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const helperRandomChoice = (max: number, min: number, filterData: number[]): number => {
    let generateNumber: number;
    do {
      generateNumber = Math.floor(Math.random() * (max - min + 1) + min);
    } while (filterData.includes(generateNumber));
    return generateNumber;
  };

  const fetcherWords = async (group: number, page: number) => {
    const response = await fetch(`${basePath}/words?group=${group}&page=${page}`, {
      method: 'GET',
      cache: 'no-cache',
    });
    return await response.json();
  };

  const filteredStateOfWord = (objData: IWord, getAllArrayOfWord: IWord[], choiceNumber: number): IWord | void => {
    if (!stateOfRepeat.includes(objData.id)) {
      setStateOfRepeat((prev) => [...prev, objData.id]);
      setRecursiveCounter((prev) => [...prev, choiceNumber]);
      return objData;
    } else {
      if (recursiveCounter.length === 19) {
        setRecursiveCounter([]);
        const generatePage = helperRandomChoice(29, 0, pageNumber);
        setPageNumber((prev) => [...prev, generatePage]);
        fetcherWords(lvlValue, generatePage).then((value) => {
          setData(value);
          callback(value);
        });
      } else {
        const generateNewNumber = helperRandomChoice(getAllArrayOfWord.length - 1, 0, recursiveCounter);
        setRecursiveCounter((prev) => [...prev, generateNewNumber]);
        setStateOfRepeat((prev) => [...prev, getAllArrayOfWord[generateNewNumber].id]);
        return getAllArrayOfWord[generateNewNumber];
      }
    }
  };

  const callback = (value: IWord[]) => {
    cactherDeadZone();
    const choiceWord: number = randomPageChoice(value.length - 1, 0);
    const fakeWord: number = randomPageChoice(value.length - 1, 0);

    const getFilteredData = filteredStateOfWord(value[choiceWord], value, choiceWord);
    if (getFilteredData === undefined) {
      return;
    }

    const valueOfTrue = randomPageChoice(1, 0);
    const wordTrue: IWord = getFilteredData;
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
    const randomPage = randomPageChoice(29, 1);
    getSprintWords(lvlValue, randomPage);
    setPageNumber((prev) => [...prev, randomPage]);
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
          wordObj={stateOfData as ICardResult}
          funData={renderComponentData}
          setStateOfPopup={setStateOfPopup}
        />
      </div>
    </div>
  );
};
