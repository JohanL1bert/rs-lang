import React from 'react';
import { IDevelopInfo } from 'common/interfaces/interfaces';

export const AboutCard = ({ name, imgPath, role, description, link }: IDevelopInfo) => {
  return (
    <div className="developer">
      <div className="developer__card">
        <img src={imgPath} alt="name of developer" className="developer__card__img" />
      </div>
      <div className="developer__about">
        <div className="developer__about__info">
          <div className="developer__about__name">{name}</div>
          <a className="developer__about__link" target="_blank" href={link} rel="noreferrer"></a>
        </div>
        <div className="developer__about__role">{role}</div>
        <div className="developer__about__todo">{description}</div>
      </div>
    </div>
  );
};
