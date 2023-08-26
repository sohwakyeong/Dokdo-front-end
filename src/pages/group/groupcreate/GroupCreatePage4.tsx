// DiscussionPost.tsx
import React, { useState } from 'react';

const GroupCreatePage4: React.FC = () => {
  const [title, setTitle] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const handleSubmit = () => {
    // 게시판에 게시 로직
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  return (
    <div>
      <div>1 2 3 4</div>
      <div>
        <label>토론 모임 게시판에 올라갈 글 제목: </label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="제목을 입력하세요."
        />
      </div>
      <div>
        <label>토론 모임 게시판에 올라갈 사진 (3장): </label>
        <input type="file" multiple onChange={handleImageChange} />
        <div>
          {images.map((image, idx) => (
            <img
              key={idx}
              src={URL.createObjectURL(image)}
              alt={`Uploaded ${idx}`}
              width="100"
            />
          ))}
        </div>
      </div>
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
};

export default GroupCreatePage4;
