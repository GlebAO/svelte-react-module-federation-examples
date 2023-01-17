import React from 'react';

interface BadgeProps {
  counter: number;
  onClick: () => void;
}

export const Badge = ({ counter, onClick }: BadgeProps) => {
  return <div onClick={onClick}>Badge {counter}</div>;
};


