import React, { useState } from 'react';
import { LevelSwitch } from 'common/components/LevelSwitch';
import { Words } from 'common/components/Words';

export const TextbookPage: React.FC = () => {
  const [level, setLevel] = useState<string>('a1');

  return (
    <div>
      <h1 className="page__title">Учебник</h1>
      <LevelSwitch level={level} setLevel={setLevel} />
      <Words level={level} />
    </div>
  );
};
