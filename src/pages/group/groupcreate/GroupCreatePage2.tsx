// DiscussionSettings.tsx
import React, { useState } from 'react';

const GroupCreatePage2: React.FC = () => {
  const [region, setRegion] = useState('');
  const [age, setAge] = useState('');
  const [keyword, setKeyword] = useState('');

  const handleNext = () => {
    // 다음 페이지로 넘어가는 로직
  };

  return (
    <div>
      <div>1 2 3 4</div>
      <h1>독서 모임에 대한 정보를 설정해주세요.</h1>
      <div>
        <label>모임지역: </label>
        <input
          type="text"
          value={region}
          onChange={e => setRegion(e.target.value)}
          placeholder="모임지역을 입력하세요."
        />
      </div>
      <div>
        <label>연령: </label>
        <input
          type="text"
          value={age}
          onChange={e => setAge(e.target.value)}
          placeholder="연령을 입력하세요."
        />
      </div>
      <div>
        <label>키워드: </label>
        <input
          type="text"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          placeholder="키워드를 등록하세요."
        />
      </div>
      <button onClick={handleNext}>다음</button>
    </div>
  );
};

export default GroupCreatePage2;
