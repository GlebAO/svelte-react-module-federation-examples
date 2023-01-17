import React from 'react';

interface BadgeProps {
  counter: number;
  onClick: () => void;
}

const styles = {
  color: 'red',
  padding: '20px',
  border: '3px solid',
  backgroundColor: '#f0f0f0',
  borderRadius: '10px',
  fontSize: '24px',
  fontWeight: 'bold'
};

export const Badge = ({ counter, onClick }: BadgeProps) => {
  return (
    <div onClick={onClick} style={styles}>
      Click on Badge {counter}
    </div>
  );
};
