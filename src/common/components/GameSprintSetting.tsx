import React, { useState } from 'react';
import soundOn from 'app/assets/images/sound.png';
import soundOff from 'app/assets/images/mute.png';

export const GameSprintSetting = () => {
  const [audio, setAudio] = useState<boolean>(true);
  const [imageSound, setImgSound] = useState(soundOn);

  const changeMusic = () => {
    setAudio(!audio);
    if (audio) {
      setImgSound(soundOn);
    } else {
      setImgSound(soundOff);
    }
  };

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
        <div className="sprint__setting__music" style={{ backgroundImage: `url(${imageSound})` }} onClick={changeMusic}></div>
        <div className="sprint__setting__fullscreen" onClick={changeFullScreen}></div>
      </div>
    </div>
  );
};
