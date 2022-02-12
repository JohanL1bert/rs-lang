import React from 'react';
import { IInfoGames } from 'common/interfaces/interfaces';

export const AdvantagesCard = ({ title, description, img }: Pick<IInfoGames, 'title' | 'description' | 'img'>) => {
  return (
    <div className="advantages__card">
      <div className="advantages__card__inner">
        <img src={img} alt="logo" className="advantages__card__img" />
        <div className="advantages__card__wrapper">
          <h3 className="advantages__card__title">{title}</h3>
          <p className="advantages__card__description">{description}</p>
        </div>
      </div>
    </div>
  );
};
