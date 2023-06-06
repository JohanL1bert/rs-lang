import React, { MouseEvent } from 'react';
import { levels } from 'common/const/textbook.const';

interface IComponentProps {
  group: number;
  setGroup: (value: number) => void;
  content: string;
  filter: string;
  setFilter: (filter: string) => void;
}

export const LevelSwitch: React.FC<IComponentProps> = (props) => {
  const { group, setGroup, content, filter, setFilter } = props;
  const commonClassName = 'level-switch__filter-item-active';

  const changeLevel = (e: MouseEvent<HTMLDivElement>) => {
    setGroup(Number(e.currentTarget.id));
  };

  return (
    <div>
      <div className="level-switch">
        {levels.map((lv, index) => {
          return (
            <div
              key={index}
              className={index === group ? 'level-switch__item' : 'level-switch__item level-switch__item_disabled'}
              id={`${index}`}
              onClick={changeLevel}
            >
              <span className="level-switch__item_char">{lv.char}</span>
              <span className="level-switch__item_title">{lv.title}</span>
            </div>
          );
        })}
      </div>
      {content === 'dictionary' && (
        <div className="level-switch__filter">
          <div
            className={`level-switch__filter-item ${filter === '{"userWord.difficulty":"studied"}' && commonClassName}`}
            onClick={() => setFilter('{"userWord.difficulty":"studied"}')}
          >
            <span>Досліджувані</span>
          </div>
          <div
            className={`level-switch__filter-item ${filter === '{"userWord.difficulty":"difficult"}' && commonClassName}`}
            onClick={() => setFilter('{"userWord.difficulty":"difficult"}')}
          >
            <span>Тяжкі</span>
          </div>
          <div
            className={`level-switch__filter-item ${filter === '{"userWord.optional.isDeleted":"true"}' && commonClassName}`}
            onClick={() => setFilter('{"userWord.optional.isDeleted":"true"}')}
          >
            <span>Видалені</span>
          </div>
        </div>
      )}
    </div>
  );
};
