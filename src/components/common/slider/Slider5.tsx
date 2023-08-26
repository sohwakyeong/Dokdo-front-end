import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './5.styles.css';
import MidleBoardBox from '../boardbox/MidleBoardBox';
import axios from 'axios'; // Axios를 사용하여 API 요청을 하기 위해 가져옵니다.

// 서버에서 내가 좋아요한 그룹을 가져오는 함수
async function myfavoriteGroupList() {
  try {
    const response = await axios.get(
      'http://localhost:3001/api/v1/auth/user/likes/groups',
    );
    return response.data.data;
  } catch {
    console.log('error');
    return [];
  }
}

// 수정된 Slider5 컴포넌트
export default function Slider5() {
  const [favoriteData, setFavoriteData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await myfavoriteGroupList();
        setFavoriteData(data);
      } catch (error) {
        console.error('내가 좋아요한 모임을 가져오던 중 에러 발생:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Swiper
        //@ts-ignore
        keyboard={true}
        mousewheel={true}
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {favoriteData.slice(0, 5).map((item, index) => (
          <SwiperSlide key={index}>
            <MidleBoardBox data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
