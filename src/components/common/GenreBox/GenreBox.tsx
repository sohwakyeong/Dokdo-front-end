import React from 'react';
import * as IB from '@/components/common/GenreBox/GenreBox.styled';
import { useNavigate } from 'react-router-dom';
import Genre1 from '@/assets/icon/newIcon/sosul.png';
import Genre2 from '@/assets/icon/newIcon/jagigaebal.png';
import Genre3 from '@/assets/icon/newIcon/sisupil.png';
import Genre4 from '@/assets/icon/newIcon/inmunhak.png';
import Genre5 from '@/assets/icon/newIcon/jonggyo.png';
import Genre6 from '@/assets/icon/newIcon/chulhak.png';
import Genre7 from '@/assets/icon/newIcon/sahwigwahak.png';
import Genre8 from '@/assets/icon/newIcon/gyumgjae.png';

function GenreBox() {
  const navigator = useNavigate(); // useNavigate 훅을 사용하여 네비게이션 함수 가져오기

  // Wrapper 클릭 시 이동하는 함수
  const handleWrapperClick = () => {
    // /group/list 경로로 이동하고 genre 쿼리 파라미터를 추가
    navigator(`/group/list`);
  };
  return (
    <IB.Wrapper onClick={handleWrapperClick}>
      <IB.ContainerWrapper>
        <IB.Container>
          <IB.Image src={Genre1} alt="소설이미지" />
        </IB.Container>
        <IB.Genre>소설</IB.Genre>
      </IB.ContainerWrapper>
      <IB.ContainerWrapper>
        <IB.Container>
          <IB.Image src={Genre2} alt="자기계발이미지" />
        </IB.Container>
        <IB.Genre>자기계발</IB.Genre>
      </IB.ContainerWrapper>
      <IB.ContainerWrapper>
        <IB.Container>
          <IB.Image src={Genre3} alt="시/수필이미지" />
        </IB.Container>
        <IB.Genre>시/수필</IB.Genre>
      </IB.ContainerWrapper>
      <IB.ContainerWrapper>
        <IB.Container>
          <IB.Image src={Genre4} alt="인문학이미지" />
        </IB.Container>
        <IB.Genre>인문학</IB.Genre>
      </IB.ContainerWrapper>
      <IB.ContainerWrapper>
        <IB.Container>
          <IB.Image src={Genre5} alt="인문학이미지" />
        </IB.Container>
        <IB.Genre>취미</IB.Genre>
      </IB.ContainerWrapper>
      <IB.ContainerWrapper>
        <IB.Container>
          <IB.Image src={Genre6} alt="철학이미지" />
        </IB.Container>
        <IB.Genre>철학</IB.Genre>
      </IB.ContainerWrapper>
      <IB.ContainerWrapper>
        <IB.Container>
          <IB.Image src={Genre7} alt="사회과학이미지" />
        </IB.Container>
        <IB.Genre>사회과학</IB.Genre>
      </IB.ContainerWrapper>
      <IB.ContainerWrapper>
        <IB.Container>
          <IB.Image src={Genre8} alt="경제이미지" />
        </IB.Container>
        <IB.Genre>경제</IB.Genre>
      </IB.ContainerWrapper>
    </IB.Wrapper>
  );
}

export default GenreBox;
