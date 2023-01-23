import React from 'react';

export interface BadgeProps {
  text: string;
}

const styles = {
  color: 'red',
  padding: '4px 6px',
  border: '3px solid',
  backgroundColor: '#f0f0f0',
  borderRadius: '10px',
  fontSize: '24px',
  fontWeight: 'bold',
};

const BadgeReact = ({ text }: BadgeProps) => {
  return <div style={styles}>{text}</div>;
};

export default BadgeReact;
