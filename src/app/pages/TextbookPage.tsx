import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LevelSwitch } from 'common/components/LevelSwitch';
import { Words } from 'common/components/Words';
import { Spinner } from 'common/components/Spinner';
import { ContentSwitcher } from 'common/components/ContentSwitcher';
import run from 'app/assets/images/run.png';
import audio from 'app/assets/images/audio.png';
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
  const navigate = useNavigate();

  const moveToSprint = () => {
    navigate('/games', { state: { group } });
  };

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
          <p>В цьому розділі ще не існує слів</p>
        )}
      </div>
      <div className="container">
        <div className="textbook-page__games">
          <p className="page__subtitle">Ігри</p>
          <div className="textbook-page__games_container">
            <div className="textbook-page__games_item">
              <img className="textbook-page__games_item-img" src={audio} alt="audio game" />
              <p className="textbook-page__games_item-title">Аудіовиклик</p>
              <p className="textbook-page__games_item-description">description</p>
            </div>
            <div className="textbook-page__games_item" onClick={moveToSprint}>
              <img className="textbook-page__games_item-img" src={run} alt="sprint game" />
              <p className="textbook-page__games_item-title">Спринт</p>
              <p className="textbook-page__games_item-description">description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
