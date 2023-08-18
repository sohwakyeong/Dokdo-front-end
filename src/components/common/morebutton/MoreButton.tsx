// import React, { useState } from 'react';
// import MoreButton from './MoreButton.styled.ts'

// 기능 개발하게되면 props로 { fetchData }
function MoreButton() {
//   const [loading, setLoading] = useState(false);

//   const handleLoadMore = async () => {
//     setLoading(true);
//     // 데이터를 불러오는 함수를 전달받아 호출
//     // await fetchData();
//     setLoading(false);
//   };

  return (
    <div>
      {/* 만약 로딩중이라면 로딩페이지가 보이게, 아니라면 더보기 버튼을 보이게 함
      {loading ? (
        <LoadingPage />
      ) : (
        <MoreButton onClick={handleLoadMore}>더보기</ㅡButton>
      )} */}
    </div>
  );
}

export default MoreButton;
