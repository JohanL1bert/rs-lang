import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from 'common/components/Header';
import { Footer } from 'common/components/Footer';
import { HomePage } from 'app/pages/HomePage';
import { TextbookPage } from 'app/pages/TextbookPage';
import { AutorizationPage } from 'app/pages/AutorizationPage';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Header />

        <div className="layout">
          <Routes>
            <Route path="/textbook" element={<TextbookPage />} />
            <Route path="*" element={<HomePage />} />
            <Route path="/login" element={<AutorizationPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
};
