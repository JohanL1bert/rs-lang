import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__logo">logo</div>
      <ul className="header__nav">
        <li className="header__nav_link">
          <Link to="/">Главная</Link>
        </li>
        <li className="header__nav_link">
          <Link to="/textbook">Учебник</Link>
        </li>
        <li className="header__nav_link">
          <Link to="/">Игры</Link>
        </li>
        <li className="header__nav_link">
          <Link to="/">Статистика</Link>
        </li>
        <li className="header__nav_link">
          <Link to="/">Вход</Link>
        </li>
      </ul>
    </div>
  );
};
