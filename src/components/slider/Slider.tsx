// this component render slider with swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image1 from "../../assets/images/Margahur2.jpg";
import image2 from "../../assets/images/masuleh.jpg";
import image3 from "../../assets/images/isfahan_bridge.jpg";

const slides = [
  {
    content: "آبشار مارگون",
    url_img: image1,
  },
  {
    content: "ماسوله گیلان",
    url_img: image2,
  },
  {
    content: "سی و سه پل اصفهان",
    url_img: image3,
  },
];
export default function Slider() {
  return (
    <div className="container-slider">
      <h2 className="title">محبوب ترین‌ها</h2>
      <span className="border_line"></span>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.content}>
            <div className="slide">
              <img src={slide.url_img} alt="image1" />
              <div className="content">{slide.content}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}