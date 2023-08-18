import React from 'react';
import { ImageBoxContainer, Image } from './ImageBox.styled';

//{ /* props -> {imagePath}*/ }
function ImageBox() {
  return (
    <ImageBoxContainer>
       {/* src={imagePath}*/}
      <Image src="/" alt="이미지" />
    </ImageBoxContainer>
  );
}

export default ImageBox;
