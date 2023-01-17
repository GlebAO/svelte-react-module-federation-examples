import React from 'react';

export const Header = ({ subtitle, children }) => {
  return (
    <div
      style={{
        backgroundColor: 'darkred',
        color: 'white',
        width: '100%',
        padding: '1em',
      }}
    >
      Header hosted in APP 2 3456779
      {children}
      <p>{subtitle}</p>
    </div>
  );
};
