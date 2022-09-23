import React from 'react';
import { Link } from '../types/TypeLinks';

type Props = {
  info: Link,
};

export const BottomLink: React.FC<Props> = ({ info }) => {
  return (
    <div className="link">
      <a
        href={info.adress}
        className="link__text"
      >
        <img
          src={info.icon}
          alt={info.title}
          className="link__icon"
        />
        {info.title}
      </a>
    </div>
  );
};
