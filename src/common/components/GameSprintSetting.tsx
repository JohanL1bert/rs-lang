import React, { useState } from 'react';
import { ISetAudio } from 'common/interfaces/interfaces';
import soundOn from 'app/assets/images/sound.png';
import soundOff from 'app/assets/images/mute.png';

export const GameSprintSetting: React.FC<ISetAudio> = (props) => {
  const { audioV, setAudioV } = props;
  const [imageSound, setImgSound] = useState<string>(soundOn);

  const changeMusic = () => {
    console.log(audioV);
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
        <div className="sprint__setting__music" style={{ backgroundImage: `url(${imageSound})` }} onClick={changeMusic}></div>
        <div className="sprint__setting__fullscreen" onClick={changeFullScreen}></div>
      </div>
    </div>
  );
};
