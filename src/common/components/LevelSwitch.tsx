import React from 'react';

const levels = [
  { title: 'Beginner', char: 'A1' },
  { title: 'Elementary', char: 'A2' },
  { title: 'Intermediate', char: 'B1' },
  { title: 'Upper Intermediate', char: 'B2' },
  { title: 'Advanced', char: 'C1' },
  { title: 'Proficiency', char: 'C2' },
];

export const LevelSwitch: React.FC = () => {
  return (
    <div className="level-switch">
      {levels.map((level, index) => {
        return (
          <div key={index}>
            <span>{level.char}</span>
            <span>{level.title}</span>
          </div>
        );
      })}
    </div>
  );
};
