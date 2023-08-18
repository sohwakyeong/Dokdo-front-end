import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'; // GlobalStyles.ts 파일에서 export한 것을 import합니다.
import LoginComponent from './pages/login/Login';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const StyledApp = styled.div`
  font-size: 16px;
  color: blue;
`;

function App() {
  return (
    <Router>
      <GlobalStyles /> {/* 전역 스타일 적용 */}
      <StyledApp>
        <Routes>
          {/* 로그인 */}
          <Route path="/login" element={<LoginComponent />}></Route>
          
          {/* 회원가입 */}

          {/* 회원탈퇴 */}
          {/* Your content here */}
        </Routes>
      </StyledApp>
    </Router>
  );
}

export default App;
