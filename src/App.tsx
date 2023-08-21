import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import AdminRoutes from './routes/AdminRoutes';



function App() {
  return (

    <Router>      
      <GlobalStyles />
      <AdminRoutes />
    </Router>
  );
}

export default App;
