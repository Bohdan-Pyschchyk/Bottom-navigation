import React from 'react';
import './styles/connect.scss';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
