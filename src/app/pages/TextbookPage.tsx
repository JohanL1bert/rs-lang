import React, { useEffect, useState } from 'react';
import { LevelSwitch } from 'common/components/LevelSwitch';
import { Words } from 'common/components/Words';
import { useWordsState } from 'entities/words/wordsState';

export const TextbookPage: React.FC = () => {
  const [group, setGroup] = useState<number>(0);
  const { words, loading, getWords } = useWordsState();

  useEffect(() => {
    getWords({ group, page: 0 });
  }, [group]);

  console.log(words);

  if (loading) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <h1 className="page__title">Учебник</h1>
      <LevelSwitch group={group} setGroup={setGroup} />
      <Words group={group} words={words} />
    </div>
  );
};
