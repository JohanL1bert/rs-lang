import React, { useEffect, useState } from 'react';
import { LevelSwitch } from 'common/components/LevelSwitch';
import { Words } from 'common/components/Words';
import { useStateWords } from 'entities/words/stateWords';

export const TextbookPage: React.FC = () => {
  const [group, setGroup] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisibleTranslation, setIsVisibleTranslation] = useState<boolean>(true);
  const { words, loading, getWords } = useStateWords();

  const togglePopup = () => setIsOpen(!isOpen);

  const toggleTranslation = () => {
    setIsVisibleTranslation(!isVisibleTranslation);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getWords({ group, page: page - 1 });
  }, [group, page]);

  if (loading) {
    return <div>...Loading</div>;
  }

  return (
    <div className="pt-40">
      <div className="page__bg">
        <div className="container">
          <div className="textbook-page__title">
            <h1 className="page__title">Учебник</h1>
            <div className="textbook-page__settings">
              <button className="textbook-page__settings-btn" onClick={togglePopup}></button>
              <div className={`textbook-page__popup ${isOpen && 'textbook-page__popup_visible'}`}>
                <p className="textbook-page__popup_title">Настройки</p>
                <div className="textbook-page__popup_check">
                  <input
                    className="textbook-page__popup_checkbox"
                    type="checkbox"
                    id="textbookPopup"
                    onChange={toggleTranslation}
                    checked={isVisibleTranslation}
                  />
                  <label className="textbook-page__popup_pseudo-label" htmlFor="textbookPopup"></label>
                  <span className="textbook-page__popup_label">Отображать перевод слова и перевод предложений?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <LevelSwitch group={group} setGroup={setGroup} />
        <Words group={group} words={words} page={page} setPage={setPage} isVisibleTranslation={isVisibleTranslation} />
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
