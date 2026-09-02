import "./css/HeroSlider.css";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const HeroSlider = ({
  images,
  autoplayDelay = 5000,
  speed = 1200,
  loop = true,
}) => {
  return (
    <section className="hero-slider-section">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop={loop}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        speed={speed}
        pagination={{
          clickable: true,
        }}
        className="hero-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.imageUrl || index}>
            <div className="hero-image-wrapper">
              <img
                src={image.imageUrl}
                alt={image.alt}
                className="hero-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
