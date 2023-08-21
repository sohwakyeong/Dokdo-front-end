import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LiteracyTestMain from '../pages/literacytest/LiteracyTestMain';
import OXTestMain from '../pages/literacytest/OXTestMain';
import LiteracyTestScreen from '../pages/literacytest/LiteracyTestScreen';
import OXTestScreen from '../pages/literacytest/OXTestScreen';
import OXTestResult from '../pages/literacytest/OXTestResult';
import LiteracyTestResult from '../pages/literacytest/LiteracytestResult';

const LiteracytestRoute = () => {
  // 임의의 결과 배열
  const results = ['O', 'X', 'O', 'O', 'X'];
  const correctAnswers = 3;

  return (
    <Routes>
      <Route path="/literacy-test" element={<LiteracyTestMain />} />
      <Route path="/literacy-test/screen" element={<LiteracyTestScreen />} />
      <Route
        path="/literacy-test/screen/result"
        element={
          <LiteracyTestResult
            results={results}
            correctAnswers={correctAnswers}
          />
        }
      />{' '}
      {/* 결과 화면 라우트 추가 */}
      <Route path="/ox-quiz" element={<OXTestMain />} />
      <Route path="/ox-quiz/screen" element={<OXTestScreen />} />
      <Route
        path="/ox-quiz/screen/result"
        element={<OXTestResult results={results} />}
      />
      <Route path="*" element={<LiteracyTestMain />} />
    </Routes>
  );
};
export default LiteracytestRoute;
