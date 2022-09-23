import React from 'react';
import { BottomNavigation } from './BottomNavigation';
import logo from '../image/Logo.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="max-content">
        <div className="container">
          <img
            src={logo}
            alt="logo"
            className="footer__logo"
          />

          <div className="bottonNavigation">
            <BottomNavigation />
          </div>
        </div>

        <p className="footer__text">With the help of Yolo Group</p>
      </div>
    </footer>
  );
};
