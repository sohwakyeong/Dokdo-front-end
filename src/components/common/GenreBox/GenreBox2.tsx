import React from 'react';
import * as IB from '@/components/common/GenreBox/GenreBox.styled';

import Genre1 from '@/assets/icon/newIcon/sosul.png';
import Genre2 from '@/assets/icon/newIcon/jagigaebal.png';
import Genre3 from '@/assets/icon/newIcon/sisupil.png';
import Genre4 from '@/assets/icon/newIcon/inmunhak.png';
import Genre5 from '@/assets/icon/newIcon/jonggyo.png';
import Genre6 from '@/assets/icon/newIcon/chulhak.png';
import Genre7 from '@/assets/icon/newIcon/sahwigwahak.png';
import Genre8 from '@/assets/icon/newIcon/gyumgjae.png';

interface GenreBoxProps {
  onGenreSelect: (genre: string) => void;
  selectedGenre: string;
}

function GenreBox2({ onGenreSelect, selectedGenre }: GenreBoxProps) {

  const handleGenreClick = (genre: string) => {
    onGenreSelect(genre);
  };

  const renderGenre = (genre: string) => {
    return (
      <>
        {genre}
        {selectedGenre === genre && ' ✔️'}
      </>
    );
  };

  return (
    <IB.Wrapper>
      <IB.ContainerWrapper onClick={() => handleGenreClick('소설')}>
        <IB.Container>
          <IB.Image src={Genre1} alt="소설이미지" />
        </IB.Container>
        <IB.Genre
          style={{ fontWeight: selectedGenre === '소설' ? 'bold' : 'normal' }}
        >
          {renderGenre('소설')}
        </IB.Genre>
      </IB.ContainerWrapper>

      <IB.ContainerWrapper onClick={() => handleGenreClick('자기계발')}>
        <IB.Container>
          <IB.Image src={Genre2} alt="자기계발이미지" />
        </IB.Container>
        <IB.Genre
          style={{
            fontWeight: selectedGenre === '자기계발' ? 'bold' : 'normal',
          }}
        >
          {renderGenre('자기계발')}
        </IB.Genre>
      </IB.ContainerWrapper>

      <IB.ContainerWrapper onClick={() => handleGenreClick('시/수필')}>
        <IB.Container>
          <IB.Image src={Genre3} alt="시/수필이미지" />
        </IB.Container>
        <IB.Genre
          style={{
            fontWeight: selectedGenre === '시/수필' ? 'bold' : 'normal',
          }}
        >
          {renderGenre('시/수필')}
        </IB.Genre>
      </IB.ContainerWrapper>

      <IB.ContainerWrapper onClick={() => handleGenreClick('인문학')}>
        <IB.Container>
          <IB.Image src={Genre4} alt="인문학이미지" />
        </IB.Container>
        <IB.Genre
          style={{ fontWeight: selectedGenre === '인문학' ? 'bold' : 'normal' }}
        >
          {renderGenre('인문학')}
        </IB.Genre>
      </IB.ContainerWrapper>

      <IB.ContainerWrapper onClick={() => handleGenreClick('취미')}>
        <IB.Container>
          <IB.Image src={Genre5} alt="취미이미지" />
        </IB.Container>
        <IB.Genre
          style={{ fontWeight: selectedGenre === '취미' ? 'bold' : 'normal' }}
        >
          {renderGenre('취미')}
        </IB.Genre>
      </IB.ContainerWrapper>

      <IB.ContainerWrapper onClick={() => handleGenreClick('철학')}>
        <IB.Container>
          <IB.Image src={Genre6} alt="철학이미지" />
        </IB.Container>
        <IB.Genre
          style={{ fontWeight: selectedGenre === '철학' ? 'bold' : 'normal' }}
        >
          {renderGenre('철학')}
        </IB.Genre>
      </IB.ContainerWrapper>

      <IB.ContainerWrapper onClick={() => handleGenreClick('사회과학')}>
        <IB.Container>
          <IB.Image src={Genre7} alt="사회과학이미지" />
        </IB.Container>
        <IB.Genre
          style={{
            fontWeight: selectedGenre === '사회과학' ? 'bold' : 'normal',
          }}
        >
          {renderGenre('사회과학')}
        </IB.Genre>
      </IB.ContainerWrapper>

      <IB.ContainerWrapper onClick={() => handleGenreClick('경제')}>
        <IB.Container>
          <IB.Image src={Genre8} alt="경제이미지" />
        </IB.Container>
        <IB.Genre
          style={{ fontWeight: selectedGenre === '경제' ? 'bold' : 'normal' }}
        >
          {renderGenre('경제')}
        </IB.Genre>
      </IB.ContainerWrapper>
    </IB.Wrapper>
  );
}

export default GenreBox2;
