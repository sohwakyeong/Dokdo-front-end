import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import SlideImg1 from '../../../assets/img/독서모임1.jpeg';
import SlideImg2 from '../../../assets/img/독서모임2.png';
import SlideImg3 from '../../../assets/img/독서모임3.jpg';
import SlideImg4 from '../../../assets/img/독서모임4.jpeg';
import { Link } from 'react-router-dom';

export default function Slider() {
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
        <SwiperSlide>
          <Link to="/bookrec">
            <img src={SlideImg1} alt="독서모임 이미지1" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/contest">
            <img src={SlideImg2} alt="독서모임 이미지2" />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <img src={SlideImg3} alt="독서모임 이미지3" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={SlideImg4} alt="독서모임 이미지4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
