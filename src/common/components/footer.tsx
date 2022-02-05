import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div
        className="footer__inner
      "
      >
        <div className="footer__wrapper">
          <div className="footer__copyright">
            @copyright <span className="footer__copyright__year">2022</span>
          </div>
          <div className="footer__developer">
            <div className="footer__developer__image"></div>
            <ul className="footer__developer__items">
              <li className="footer__developer__item">
                <a className="footer__developer__link" target="_blank" href="https://github.com/vsmaliakou" rel="noreferrer">
                  vsmaliakou
                </a>
              </li>
              <li className="footer__developer__item">
                <a href="https://github.com/igrekinlapland" className="footer__developer__link">
                  igrekinlapland
                </a>
              </li>
              <li className="footer__developer__item">
                <a className="footer__developer__link" target="_blank" href="https://github.com/JohanL1bert" rel="noreferrer">
                  JohanL1bert
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__logo">
            <a href="https://rs.school/index.html" target="_blank" className="footer__logo__school" rel="noreferrer"></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
