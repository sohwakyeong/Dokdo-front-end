import React, { useState } from 'react';
import * as GBW from './GroupBoardWrite.styled';
import BoardWriteSection from '../../../components/common/boardwritesection/BoardWriteSection';
import Camera from '../../../assets/icon/Camera.png';

const GroupBoardWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, imageUrl]);
    }
  };

  return (
    <GBW.Wrapper>
      <BoardWriteSection />
      <GBW.TitleWrite>
        <textarea
          placeholder="제목을 입력해주세요. (40자)"
          value={title}
          onChange={e => setTitle(e.target.value)}
          rows={2}
          maxLength={40}
        />
      </GBW.TitleWrite>
      <GBW.WriteBox>
        <textarea
          placeholder="하고있던건데 다 지우고 다시 하셔도 됩니다"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={15}
          maxLength={1000}
        />
        {images.map((image, index) => (
          <GBW.UploadImage key={index} src={image} alt="업로드된 이미지" />
        ))}
      </GBW.WriteBox>
      <GBW.ImgFileTitle>
        <div>파일선택</div>
        <div>500MB 이하의 jpg, gif 파일만 3개까지 업로드 가능합니다</div>
        </GBW.ImgFileTitle>
      <GBW.ImgUpload>
        <label htmlFor="image-upload">
          <GBW.CameraBox>
            <GBW.CameraImg>
              <img src={Camera} alt="카메라 이미지" />
            </GBW.CameraImg>
            <GBW.CameraImg>
              <img src={Camera} alt="카메라 이미지" />
            </GBW.CameraImg>
            <GBW.CameraImg>
              <img src={Camera} alt="카메라 이미지" />
            </GBW.CameraImg>
          </GBW.CameraBox>
        </label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <div>{content.length}/1000자</div>
      </GBW.ImgUpload>
    </GBW.Wrapper>
  );
};

export default GroupBoardWrite;
