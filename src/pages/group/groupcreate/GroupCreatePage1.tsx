// DiscussionForm.tsx
import React, { useState } from 'react';

const GroupCreatePage1: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 모임 정보 제출 로직
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
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="모임명을 입력하세요."
          />
        </div>
        <div>
          <label>모임소개: </label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
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
