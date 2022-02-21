import React, { useEffect, useState } from 'react';
import { LevelSwitch } from 'common/components/LevelSwitch';
import { Words } from 'common/components/Words';
import { Spinner } from 'common/components/Spinner';
import { ContentSwitcher } from 'common/components/ContentSwitcher';
import { useStateWords } from 'entities/words/stateWords';
import { useStateAuth } from 'entities/auth/stateAuth';

export const TextbookPage: React.FC = () => {
  const [content, setContent] = useState('textbook');
  const [isVisibleTranslation, setIsVisibleTranslation] = useState<boolean>(true);
  const [group, setGroup] = useState<number>(0);
  const [filter, setFilter] = useState<string>('{"userWord.difficulty":"studied"}');
  const [page, setPage] = useState<number>(1);
  const { words, loading, totalCount, getWords, getAggregatedWords } = useStateWords();
  const { isAuth, user, token } = useStateAuth();

  useEffect(() => {
    if (content === 'textbook') {
      getWords({ group, page: page - 1 });
    } else {
      user && getAggregatedWords(user.id, token, group, page - 1, filter);
    }
  }, [group, page, content, filter]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="pt-40">
      <ContentSwitcher
        isAuth={isAuth}
        content={content}
        setContent={setContent}
        isVisibleTranslation={isVisibleTranslation}
        setIsVisibleTranslation={setIsVisibleTranslation}
      />
      <div className="container">
        <LevelSwitch group={group} setGroup={setGroup} content={content} filter={filter} setFilter={setFilter} />
      </div>
      <div className="container">
        {words.length ? (
          <Words
            words={words}
            group={group}
            page={page}
            setPage={setPage}
            totalCount={totalCount}
            content={content}
            isVisibleTranslation={isVisibleTranslation}
            filter={filter}
          />
        ) : (
          <p>В этом разделе еще нет слов</p>
        )}
      </div>
      <div className="container">
        <div className="textbook-page__games">
          <p className="page__subtitle">Игры</p>
          <div className="textbook-page__games_container">
            <div className="textbook-page__games_item">
              <div className="textbook-page__games_item-img">img</div>
              <p className="textbook-page__games_item-title">Аудиовызов</p>
              <p className="textbook-page__games_item-description">description</p>
            </div>
            <div className="textbook-page__games_item">
              <div className="textbook-page__games_item-img">img</div>
              <p className="textbook-page__games_item-title">Спринт</p>
              <p className="textbook-page__games_item-description">description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
