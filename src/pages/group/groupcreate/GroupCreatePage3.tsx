// DiscussionDetails.tsx
import React, { useState } from 'react';

const GroupCreatePage3: React.FC = () => {
  const [genre, setGenre] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('');

  const handleNext = () => {
    // 다음 페이지로 넘어가는 로직
  };

  return (
    <div>
      <div>1 2 3 4</div>
      <h1>독서토론 모임에 대한 정보를 설정해주세요.</h1>
      <div>
        <label>장르: </label>
        <input
          type="text"
          value={genre}
          onChange={e => setGenre(e.target.value)}
          placeholder="장르를 입력하세요."
        />
      </div>
      <div>
        <label>모임 날짜 및 시간: </label>
        <input
          type="datetime-local"
          value={dateTime}
          onChange={e => setDateTime(e.target.value)}
        />
      </div>
      <div>
        <label>장소: </label>
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder="장소를 입력하세요."
        />
      </div>
      <button onClick={handleNext}>다음</button>
    </div>
  );
};

export default GroupCreatePage3;
