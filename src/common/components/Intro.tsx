import React from 'react';

export const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__background">
        <div className="intro__background__img"></div>
        <div className="intro__wrapper">
          <div className="container">
            <div className="intro__inner">
              <div className="intro__text">
                <h1 className="intro__text__info">Some text</h1>
                <button className="intro__btn">
                  <span className="intro__btn__text">Старт</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
