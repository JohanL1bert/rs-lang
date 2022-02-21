import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from 'common/components/Header';
import { Footer } from 'common/components/Footer';
import { GameSprintSelectLvl } from 'common/components/GameSprintSelectLvl';
import { Statistic } from 'common/components/Statistic';
import { HomePage } from 'app/pages/HomePage';
import { TextbookPage } from 'app/pages/TextbookPage';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/textbook" element={<TextbookPage />} />
          <Route path="/games" element={<GameSprintSelectLvl />} />
          <Route path="/statistic" element={<Statistic />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
