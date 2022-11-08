// import required modules
import { Autoplay, Navigation } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//slide 1
import HTML5 from "../Assets/Images/HTML5.png";
import CSS3 from "../Assets/Images/CSS3.png";
import JS from "../Assets/Images/JS.png";
import React from "../Assets/Images/React.png";

//slide 2
import CPanel from "../Assets/Images/cPanel.png";
import Git from "../Assets/Images/Git.png";
import MongoDB from "../Assets/Images/MongoDB.png";
import MySQL from "../Assets/Images/MySQL.png";

const TechSlider = () => {
  return (
    <Swiper
      speed={1000}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 60,
        },
      }}
    >
      <SwiperSlide className="index_slide">
        <div>
          <img src={HTML5} alt="html5" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="index_slide">
        <div>
          <img src={CSS3} alt="css3" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="index_slide">
        <div>
          <img src={JS} alt="js" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="index_slide">
        <div>
          <img src={React} alt="react" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="index_slide">
        <div>
          <img src={CPanel} alt="cpanel" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="index_slide">
        <div>
          <img src={Git} alt="git" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="index_slide">
        <div>
          <img src={MongoDB} alt="mongodb" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="index_slide">
        <div>
          <img src={MySQL} alt="mysql" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TechSlider;
