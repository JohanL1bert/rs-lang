import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from 'common/const/links.const';
import { useStateAuth } from 'entities/auth/stateAuth';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const { signout, isAuth } = useStateAuth();

  window.addEventListener('scroll', () => {
    window.scrollY > 0 ? setIsChanged(true) : setIsChanged(false);
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`header ${isChanged && 'header__bg'}`}>
      <div className="header__logo">
        <div className={isOpen ? 'header__menu-icon header__menu-icon_active' : 'header__menu-icon'} onClick={toggleMenu}>
          <span></span>
        </div>
        <Link to="/">RSLang</Link>
      </div>
      <div className={isOpen ? 'header__nav header__nav_active' : 'header__nav'}>
        <ul>
          {links.map((link, index) => {
            return (
              <li className="header__nav_link" key={index}>
                <Link to={link.path} onClick={toggleMenu}>
                  {link.title}
                </Link>
              </li>
            );
          })}
          {!isAuth ? (
            <li className="header__nav_link">
              <Link to="signin">Войти</Link>
            </li>
          ) : (
            <li className="header__nav_link">
              <button onClick={signout}>Выйти</button>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};
