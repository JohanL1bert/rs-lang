import React from 'react';
import { IInfoGames } from 'common/interfaces/interfaces';

export const AdvantagesCard = ({ title, description, img }: Pick<IInfoGames, 'title' | 'description' | 'img'>) => {
  return (
    <div className="advantages__card">
      <div className="advantages__card__inner">
        <img src={img} alt="logo" className="advantages__card__img" />
        <div className="advatanges__card__title">{title}</div>
        <div className="advantages__card__description">{description}</div>
      </div>
    </div>
  );
};
