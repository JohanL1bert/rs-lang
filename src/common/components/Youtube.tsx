import React from 'react';

export const Youtube = (): JSX.Element => {
  return (
    <section className="youtube">
      <div className="container">
        <div className="youtube__inner">
          <div className="youtube__info">
            <div className="youtube__info__inner">
              <div className="youtube__info__img" />
              <div className="youtube__info__wrapper">
                <h2 className="youtube__info__header">Видео про преимущество сервиса</h2>
              </div>
            </div>
          </div>
          <iframe
            className="youtube__video"
            src="https://www.youtube.com/embed/nwc4LiCcJJo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
