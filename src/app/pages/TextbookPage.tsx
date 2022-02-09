import React, { useEffect, useState } from 'react';
import { LevelSwitch } from 'common/components/LevelSwitch';
import { Words } from 'common/components/Words';
import { useStateWords } from 'entities/words/stateWords';

export const TextbookPage: React.FC = () => {
  const [group, setGroup] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const { words, loading, getWords } = useStateWords();

  useEffect(() => {
    getWords({ group, page: page - 1 });
  }, [group, page]);

  if (loading) {
    return <div>...Loading</div>;
  }

  return (
    <div className="container">
      <h1 className="page__title">Учебник</h1>
      <LevelSwitch group={group} setGroup={setGroup} />
      <Words words={words} page={page} setPage={setPage} />
    </div>
  );
};
