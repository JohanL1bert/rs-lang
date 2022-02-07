import React from 'react';
import { InfoGames } from 'common/const/infoGames.const';
import { IInfoGames } from 'common/interfaces/interfaces';
import { AdvantagesCard } from 'common/components/AdvantagesCard';

export const Advantages = () => {
  function renderSpanElipse() {
    const key = 400;
    return Array.from(Array(key).keys());
  }

  const arrayOfItems = renderSpanElipse();

  return (
    <section className="advantages">
      <div className="advantages__inner">
        <div className="advantages__section__text">
          <div className="advantages__inner__text">
            <div className="advantages__text">
              <p className="advantages__text__info">Преимущества</p>
            </div>
            <div className="advantages__text__figure"></div>
            <div className="advantages__text__dots">
              {arrayOfItems.map((_, index) => (
                <span key={index} className="advantages__text__elipse"></span>
              ))}
            </div>
          </div>
        </div>
        <div className="advantages__section__card">
          {InfoGames.map((item: IInfoGames) => {
            return <AdvantagesCard key={item.id} {...item} />;
          })}
          <div className="advantages__rectangle"></div>
        </div>
      </div>
    </section>
  );
};
