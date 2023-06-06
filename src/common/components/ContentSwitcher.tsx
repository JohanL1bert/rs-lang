import React, { useState } from 'react';

interface IComponentProps {
  isAuth: boolean;
  content: string;
  setContent: (content: string) => void;
  isVisibleTranslation: boolean;
  setIsVisibleTranslation: (isVisibleTranslation: boolean) => void;
}

export const ContentSwitcher: React.FC<IComponentProps> = (props) => {
  const { isAuth, content, setContent, isVisibleTranslation, setIsVisibleTranslation } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const togglePopup = () => setIsOpen(!isOpen);

  const toggleTranslation = () => {
    setIsVisibleTranslation(!isVisibleTranslation);
    setIsOpen(!isOpen);
  };

  return (
    <div className="content-switcher">
      <div className="container">
        <div className="content-switcher__container">
          <button
            className={`content-switcher__btn ${content === 'textbook' && 'content-switcher__btn-active'}`}
            onClick={() => setContent('textbook')}
          >
            Підручник
          </button>
          <div className="content-switcher__separator"></div>
          {isAuth && (
            <button
              className={`content-switcher__btn ${content === 'dictionary' && 'content-switcher__btn-active'}`}
              onClick={() => setContent('dictionary')}
            >
              Словник
            </button>
          )}
          <div className="content-switcher__settings">
            <button className="content-switcher__settings-btn" onClick={togglePopup}></button>
            <div className={`content-switcher__popup ${isOpen && 'content-switcher__popup_visible'}`}>
              <p className="content-switcher__popup_title">Налаштування</p>
              <div className="content-switcher__popup_check">
                <input
                  className="content-switcher__popup_checkbox"
                  type="checkbox"
                  id="textbookPopup"
                  onChange={toggleTranslation}
                  checked={isVisibleTranslation}
                />
                <label className="content-switcher__popup_pseudo-label" htmlFor="textbookPopup"></label>
                <span className="content-switcher__popup_label">Відображати переклад слова та переклад речень?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
