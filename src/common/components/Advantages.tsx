import React from 'react';
import { InfoGames } from 'common/const/infoGames.const';
import { IInfoGames } from 'common/interfaces/interfaces';
import { AdvantagesCard } from 'common/components/AdvantagesCard';

export const Advantages = (): JSX.Element => {
  return (
    <section className="advantages">
      <div className="container">
        <div className="advantages__inner">
          <div className="advantages__text">
            <h2 className="advantages__text__header">Підручник</h2>
            <p className="advantages__text__info">3600 слів для вивчення, розбитих на розділи за рівнем підготовки</p>
            <div className="advantages__text__img"></div>
          </div>
          <div className="advantages__section">
            <div className="advantages__section__inner">
              <h2 className="advantages__section__heeader">Ігри</h2>
              <div className="advantages__section__cards">
                {InfoGames.map((item: IInfoGames) => {
                  return <AdvantagesCard key={item.id} {...item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
