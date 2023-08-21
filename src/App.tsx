import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import MypageRoutes from './routes/Mypage';
import LiteracytestRoute from './routes/literacytest';
import AdminRoutes from './routes/AdminRoutes';
import Layout1 from './components/layout/layout1/Layout1';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Layout1>
        <MypageRoutes />
      </Layout1>
    </Router>
  );
}

export default App;
