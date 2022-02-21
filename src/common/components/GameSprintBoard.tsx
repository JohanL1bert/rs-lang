import React from 'react';
import { GameSprintCard } from 'common/components/GameSprintCard';
import { GameSprintSetting } from 'common/components/GameSprintSetting';
import { GameSprintTimer } from 'common/components/GameSprintTimer';

export const GameSprintBoard = () => {
  return (
    <div className="game__board">
      <div className="game__board__inner">
        <div className="game__board__setting">
          <GameSprintSetting />
        </div>
        <div className="game__board__timer">
          <GameSprintTimer />
        </div>
        <GameSprintCard />
      </div>
    </div>
  );
};
