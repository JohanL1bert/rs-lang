import React from 'react';

export const Intro: React.FC = () => {
  return (
    <section className="intro">
      <div className="intro__background">
        <div className="intro__background__img"></div>
        <div className="intro__wrapper">
          <div className="container">
            <div className="intro__inner">
              <div className="intro__text">
                <h1 className="intro__title">RSLang</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
