import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="footer">
        <div className="footer__developers">
          <div className="footer__developers__title">
            Розробник
            <div className="footer__developers__image"></div>
          </div>
          <ul className="footer__developers__items">
            <li className="footer__developers__item">
              <a target="_blank" href="https://github.com/JohanL1bert" rel="noreferrer">
                JohanL1bert
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__copyright">@copyright &&</div>
      </div>
    </footer>
  );
};
