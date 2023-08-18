import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/layout/Layout';
import MainRoutes from './routes/Main';


function App() {
  return (
    <Router>
      <GlobalStyles />
      <Layout>
        <MainRoutes />
      </Layout>
    </Router>
  );
}

export default App;
