import React from 'react';
import { GameSprintCard } from 'common/components/GameSprintCard';

export const GameSprintBoard = () => {
  return (
    <div className="game__board">
      <div className="container">
        <div className="game__board__inner">
          <div className="game__board__setting"></div>
          <GameSprintCard></GameSprintCard>
          <div className="game__board__timer"></div>
        </div>
      </div>
    </div>
  );
};
