import React from 'react';
// import required modules
import { Autoplay, Navigation } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TechSlider = () => {
  return (
    <Swiper
      speed={1000}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      //   navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      style={{ width: '100%', height: '20rem' }}
    >
      <SwiperSlide
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '3rem',
        }}
      >
        <div style={{ backgroundColor: 'red' }}>CSS</div>
        <div style={{ backgroundColor: 'blue' }}>HTML</div>
        <div style={{ backgroundColor: 'yellow' }}>JS</div>
      </SwiperSlide>
     <SwiperSlide
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '3rem',
        }}
      >
        <div style={{ backgroundColor: 'rosered' }}>Bootstrap</div>
        <div style={{ backgroundColor: 'hotpink' }}>TailwindCSS</div>
        <div style={{ backgroundColor: 'rebeccapurple' }}>Reactjs</div>
      </SwiperSlide>

     <SwiperSlide
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '3rem',
        }}
      >
        <div style={{ backgroundColor: 'violet' }}>Node/Expressjs</div>
        <div style={{ backgroundColor: 'paleblue' }}>Golang</div>
        <div style={{ backgroundColor: 'gray' }}>PHP</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TechSlider;
