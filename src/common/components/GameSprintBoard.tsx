import React from 'react';
import { GameSprintCard } from 'common/components/GameSprintCard';
import { GameSprintSetting } from 'common/components/GameSprintSetting';

export const GameSprintBoard = () => {
  return (
    <div className="game__board">
      <div className="game__board__inner">
        <div className="game__board__setting">
          <GameSprintSetting></GameSprintSetting>
        </div>
        <GameSprintCard></GameSprintCard>
        <div className="game__board__timer"></div>
      </div>
    </div>
  );
};
