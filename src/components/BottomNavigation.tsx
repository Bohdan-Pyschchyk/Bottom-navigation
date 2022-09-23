import React from 'react';
import { BottomLink } from './BottomLink';
import { links } from '../api/links';

export const BottomNavigation: React.FC = () => {
  return (
    <>
      {links.map(link => (
        <BottomLink
          key={link.id}
          info={link}
        />
      ))}
    </>
  );
};
