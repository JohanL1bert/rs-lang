import React from 'react';

interface IComponentProps {
  group: number;
  title: string;
  onClick: () => void;
}

export const PresentationBtn: React.FC<IComponentProps> = (props) => {
  const { group, title, onClick } = props;
  return (
    <button className={`presentation__btn bg-${group}`} onClick={onClick}>
      {title}
    </button>
  );
};
