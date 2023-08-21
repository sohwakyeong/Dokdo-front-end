import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LiteracyTestMain from '../pages/literacytest/LiteracyTestMain';
import OXTestMain from '../pages/literacytest/OXTestMain';
import LiteracyTestScreen from '../pages/literacytest/LiteracyTestScreen';
import OXTestScreen from '../pages/literacytest/OXTestScreen';
import OXTestResult from '../pages/literacytest/OXTestResult';
import LiteracyTestResult from '../pages/literacytest/LiteracytestResult';
import Layout1 from '../components/layout/layout1/Layout1';

const LiteracytestRoute = () => {
  // 임의의 결과 배열
  const results = ['O', 'X', 'O', 'O', 'X'];
  const correctAnswers = 3;

  return (
    <Routes>
      <Route
        path="/literacy-test"
        element={
          <Layout1>
            <LiteracyTestMain />
          </Layout1>
        }
      />
      <Route
        path="/literacy-test/screen"
        element={
          <Layout1>
            <LiteracyTestScreen />
          </Layout1>
        }
      />
      <Route
        path="/literacy-test/screen/result"
        element={
          <Layout1>
            <LiteracyTestResult
              results={results}
              correctAnswers={correctAnswers}
            />
          </Layout1>
        }
      />

      {/* 결과 화면 라우트 추가 */}
      <Route
        path="/ox-quiz"
        element={
          <Layout1>
            <OXTestMain />
          </Layout1>
        }
      />
      <Route
        path="/ox-quiz/screen"
        element={
          <Layout1>
            <OXTestScreen />
          </Layout1>
        }
      />
      <Route
        path="/ox-quiz/screen/result"
        element={
          <Layout1>
            <OXTestResult results={results} />
          </Layout1>
        }
      />
    </Routes>
  );
};
export default LiteracytestRoute;
