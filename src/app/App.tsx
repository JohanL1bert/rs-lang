import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from 'common/components/Header';
import { Footer } from 'common/components/Footer';
import { HomePage } from 'app/pages/HomePage';
import { TextbookPage } from 'app/pages/TextbookPage';
import { useStateAuth } from 'entities/auth/stateAuth';
import { SigninPage } from 'app/pages/SigninPage';

export const App: React.FC = () => {
  const { auth } = useStateAuth();

  useEffect(() => {
    auth();
  }, []);

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/textbook" element={<TextbookPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
