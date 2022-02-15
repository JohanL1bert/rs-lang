import React, { useState } from 'react';
import { GameSprintCard } from 'common/components/GameSprintCard';
import { GameSprintSetting } from 'common/components/GameSprintSetting';
import { GameSprintTimer } from 'common/components/GameSprintTimer';
import { GameSprintPopup } from 'common/components/GameSprintPopup';

export const GameSprintBoard = ({ lvlValue }: { lvlValue: number }) => {
  const [visiblePopup, setVisiblePopup] = useState<boolean>(false);

  return (
    <div className="game__board">
      {visiblePopup && <GameSprintPopup />}
      <div className="game__board__inner">
        <div className="game__board__setting">
          <GameSprintSetting />
        </div>
        <div className="game__board__timer">
          <GameSprintTimer changeVisibilityPopup={setVisiblePopup} />
        </div>
        <GameSprintCard />
      </div>
    </div>
  );
};
