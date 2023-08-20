import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import MypageRoutes from './routes/Mypage';
{/*import Layout1 from './components/layout/layout1/Layout1';*/}

function App() {
  return (
    <Router>
      <GlobalStyles />
      
        <MypageRoutes />

      
    </Router>
  );
}

export default App;
