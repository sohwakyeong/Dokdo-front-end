import React, { useState } from 'react';

interface GroupCreatePage2Data {
  location: string; // 변경: region -> location
  age: string;
  tag: string; // 변경: keyword -> tag
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
  const [location, setLocation] = useState(data.location); // 변경: region -> location
  const [age, setAge] = useState(data.age);
  const [tag, setTag] = useState(data.tag); // 변경: keyword -> tag

  const handleSubmit = () => {
    updateData({
      location, // 변경: region -> location
      age,
      tag, // 변경: keyword -> tag
    });
    handleNext();
  };

  return (
    <div>
      {/* ... 생략 ... */}
      <input
        type="text"
        value={location} // 변경: region -> location
        onChange={e => setLocation(e.target.value)} // 변경: setRegion -> setLocation
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
        value={tag} // 변경: keyword -> tag
        onChange={e => setTag(e.target.value)} // 변경: setKeyword -> setTag
        placeholder="키워드를 등록하세요."
      />
      <button onClick={handleSubmit}>다음</button>
    </div>
  );
};

export default GroupCreatePage2;
