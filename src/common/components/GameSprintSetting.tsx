import React, { useState } from 'react';
import { ISetAudio } from 'common/interfaces/interfaces';
import soundOn from 'app/assets/images/sound.png';
import soundOff from 'app/assets/images/mute.png';

export const GameSprintSetting: React.FC<ISetAudio> = (props) => {
  const { audioV, setAudioV } = props;
  const [imageSound, setImgSound] = useState<string>(soundOn);

  const changeMusic = () => {
    setAudioV(!audioV);
    if (!audioV) {
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
        <div className="sprint__setting__wrapper">
          <div className="sprint__setting__music" style={{ backgroundImage: `url(${imageSound})` }} onClick={changeMusic}>
            <span className="sprint__setting__music__tooltip">Music work only for setting correct or incorrect choices</span>
          </div>
          <div className="sprint__setting__fullscreen" onClick={changeFullScreen}></div>
        </div>
      </div>
    </div>
  );
};
