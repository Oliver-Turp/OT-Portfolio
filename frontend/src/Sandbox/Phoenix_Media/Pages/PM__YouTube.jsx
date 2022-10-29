import { Helmet, HelmetProvider } from "react-helmet-async";

import Carousel from "../Components/ImageSlider";

import TCG_Banner from "../Assets/Images/channels4_banner.jpg";

import "../Styles/pm__youtube.css";
import { SliderData } from "../Components/SliderData";

const PM__YouTube = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phoenix Media | YouTube</title>
        </Helmet>
      </HelmetProvider>

      <div className="yt-banner">
        <a
          href="https://www.youtube.com/channel/UC_jS43nnHuq7pWd65TVAzzA"
          target="_blank"
        >
          <img src={TCG_Banner} alt="yt-banner" />
        </a>
      </div>
      <Carousel slides={SliderData} />
    </>
  );
};

export default PM__YouTube;
