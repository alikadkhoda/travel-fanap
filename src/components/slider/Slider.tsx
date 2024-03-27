import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from '../../assets/images/Margahur2.jpg'
import image2 from '../../assets/images/masuleh.jpg'
import image3 from '../../assets/images/isfahan_bridge.jpg'
export default function Slider() {
  return (
    <div className='container-slider'>
        <h2 className='title'>محبوب ترین‌ها</h2>
      <span className="border_line"></span>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide">
            <img src={image1} alt="image1" />
            <div className="content">آبشار مارگون</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={image2} alt="image2" />
            <div className="content">ماسوله گیلان</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={image3} alt="image3" />
            <div className="content">سی و سه پل اصفهان</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
