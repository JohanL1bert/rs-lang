import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from 'common/components/Header';
import { HomePage } from 'app/pages/HomePage';
import { TextbookPage } from 'app/pages/TextbookPage';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Header />

        <div className="layout">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/textbook" element={<TextbookPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};
