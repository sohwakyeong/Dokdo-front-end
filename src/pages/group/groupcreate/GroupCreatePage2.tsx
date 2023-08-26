import React, { useState } from 'react';

interface GroupCreatePage2Data {
  region: string;
  age: string;
  keyword: string;
}

interface GroupCreatePage2Props {
  data: GroupCreatePage2Data;
  updateData: (newData: Partial<GroupCreatePage2Data>) => void;
  handleNext: () => void;
}

const GroupCreatePage2: React.FC<GroupCreatePage2Props> = ({
  data,
  updateData,
  handleNext,
}) => {
  const [region, setRegion] = useState(data.region);
  const [age, setAge] = useState(data.age);
  const [keyword, setKeyword] = useState(data.keyword);

  const handleSubmit = () => {
    updateData({
      region,
      age,
      keyword,
    });
    handleNext();
  };

  return (
    <div>
      {/* ... 생략 ... */}
      <input
        type="text"
        value={region}
        onChange={e => setRegion(e.target.value)}
        placeholder="모임지역을 입력하세요."
      />
      <input
        type="text"
        value={age}
        onChange={e => setAge(e.target.value)}
        placeholder="연령을 입력하세요."
      />
      <input
        type="text"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="키워드를 등록하세요."
      />
      <button onClick={handleSubmit}>다음</button>
    </div>
  );
};

export default GroupCreatePage2;
