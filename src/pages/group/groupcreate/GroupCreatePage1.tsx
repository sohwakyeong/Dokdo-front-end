// GroupCreatePage1.tsx
import React, { useState } from 'react';

interface GroupCreatePage1Data {
  name: string; // 변경: title -> name
  introduction: string; // 변경: description -> introduction
  image: File | null;
}

interface GroupCreatePage1Props {
  data: GroupCreatePage1Data;
  updateData: (newData: Partial<GroupCreatePage1Data>) => void;
  handleNext: () => void;
}

const GroupCreatePage1: React.FC<GroupCreatePage1Props> = ({
  data,
  updateData,
  handleNext,
}) => {
  const [name, setName] = useState(data.name); // 변경: title -> name
  const [introduction, setIntroduction] = useState(data.introduction); // 변경: description -> introduction
  const [image, setImage] = useState<File | null>(data.image);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 모임 정보 제출 로직
    updateData({
      name, // 변경: title -> name
      introduction, // 변경: description -> introduction
      image,
    });

    handleNext();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div>
      <div>1 2 3 4</div>
      <h1>새로운 독서 토론 모임을 시작해볼까요?</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>모임명: </label>
          <input
            type="text"
            value={name} // 변경: title -> name
            onChange={e => setName(e.target.value)} // 변경: setTitle -> setName
            placeholder="모임명을 입력하세요."
          />
        </div>
        <div>
          <label>모임소개: </label>
          <textarea
            value={introduction} // 변경: description -> introduction
            onChange={e => setIntroduction(e.target.value)} // 변경: setDescription -> setIntroduction
            placeholder="모임소개를 입력하세요."
          />
        </div>
        <div>
          <label>사진 업로드: </label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <button type="submit">확인</button>
      </form>
    </div>
  );
};

export default GroupCreatePage1;
