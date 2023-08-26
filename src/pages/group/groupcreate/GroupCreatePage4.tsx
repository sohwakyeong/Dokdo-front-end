import React, { useState } from 'react';

interface GroupCreatePage4Data {
  postTitle: string;
  postImages: File[];
}

interface GroupCreatePage4Props {
  data: GroupCreatePage4Data;
  updateData: (newData: Partial<GroupCreatePage4Data>) => void;
  handleSubmit: () => void;
}

const GroupCreatePage4: React.FC<GroupCreatePage4Props> = ({
  data,
  updateData,
  handleSubmit,
}) => {
  const [postTitle, setPostTitle] = useState(data.postTitle);
  const [postImages, setPostImages] = useState<File[]>(data.postImages);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = [...postImages, ...Array.from(e.target.files)];
      setPostImages(newImages);
      updateData({ postImages: newImages });
    }
  };

  const handleFormSubmit = () => {
    updateData({ postTitle });
    handleSubmit();
  };

  return (
    <div>
      {/* ... 생략 ... */}
      <input
        type="text"
        value={postTitle}
        onChange={handleTitleChange}
        placeholder="제목을 입력하세요."
      />
      <input type="file" multiple onChange={handleImageChange} />
      <button onClick={handleFormSubmit}>글 올리기</button>
    </div>
  );
};

export default GroupCreatePage4;
