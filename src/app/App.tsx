import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from 'common/components/Header';
import { Footer } from 'common/components/Footer';
import { HomePage } from 'app/pages/HomePage';
import { TextbookPage } from 'app/pages/TextbookPage';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/textbook" element={<TextbookPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
