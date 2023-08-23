import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IInfoGames } from 'common/interfaces/interfaces';

export const AdvantagesCard = ({ title, description, img, location }: Omit<IInfoGames, 'id'>) => {
  const refToImg = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();

  const moveTo = () => {
    if (location) {
      return navigate(`${location}`);
    }
  };

  const playAnimation = () => {
    if (refToImg) {
      refToImg.current?.classList.add('advantages__card__img--animation');
      refToImg.current?.addEventListener('animationend', () => {
        refToImg.current?.classList.remove('advantages__card__img--animation');
      });
    }
  };

  return (
    <div className="advantages__card">
      <div className="advantages__card__inner" onClick={moveTo}>
        <img src={img} alt="logo" className="advantages__card__img" onMouseEnter={playAnimation} ref={refToImg} />
        <div className="advantages__card__wrapper">
          <h3 className="advantages__card__title">{title}</h3>
          <p className="advantages__card__description">{description}</p>
        </div>
      </div>
    </div>
  );
};
