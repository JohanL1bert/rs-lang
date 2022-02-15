import React, { useState, useEffect } from 'react';

export const Intro = () => {
  const [textPos, setTextPos] = useState<boolean>(false);

  const animateText = () => {
    const screenSize: number = window.innerHeight;
    const scrollPosY: number = window.scrollY;
    const lowPercent: number = (screenSize / 100) * 10;

    scrollPosY > lowPercent ? setTextPos(true) : setTextPos(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', animateText, true);

    return () => {
      window.removeEventListener('scroll', animateText, true);
    };
  }, []);

  return (
    <section className="intro">
      <div className="intro__background">
        <div className="intro__background__img"></div>
        <div className="intro__wrapper">
          <div className="container">
            <div className="intro__inner">
              <div className="intro__text">
                <h1 className={!textPos ? 'intro__text__info' : 'intro__text__info__active'}>Some text</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
