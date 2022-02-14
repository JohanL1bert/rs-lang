import React, { useState } from 'react';

export const GameSprintSetting = () => {
  const [audio, setAudio] = useState<boolean>(false);

  const changeMusic = () => {};

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const changeFullScreen = () => {
    toggleFullScreen();
  };

  return (
    <div className="sprint__setting">
      <div className="sprint__setting__inner">
        <div className="sprint__setting__music" onClick={changeMusic}></div>
        <div className="sprint__setting__fullscreen" onClick={changeFullScreen}></div>
      </div>
    </div>
  );
};
