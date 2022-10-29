import { useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Logo from "../../Assets/Images/Logo.png";

import Review_1 from "../../Assets/Images/ReviewsExample/coffee1.jpg";
import Review_2 from "../../Assets/Images/ReviewsExample/coffee2.jpg";
import Review_3 from "../../Assets/Images/ReviewsExample/coffee3.jpg";
import Review_4 from "../../Assets/Images/ReviewsExample/coffee4.jpg";
import Review_5 from "../../Assets/Images/ReviewsExample/coffee5.jpg";
import Review_6 from "../../Assets/Images/ReviewsExample/coffee6.jpg";
import Review_7 from "../../Assets/Images/ReviewsExample/coffee7.jpg";
import Review_8 from "../../Assets/Images/ReviewsExample/coffee8.jpg";
import Review_9 from "../../Assets/Images/ReviewsExample/coffee9.jpg";
import Review_10 from "../../Assets/Images/ReviewsExample/coffee10.jpg";
import Review_11 from "../../Assets/Images/ReviewsExample/coffee11.jpg";
import Review_12 from "../../Assets/Images/ReviewsExample/coffee12.jpg";
import Review_13 from "../../Assets/Images/ReviewsExample/coffee13.jpg";
import Review_14 from "../../Assets/Images/ReviewsExample/coffee14.jpg";

import "../../Styles/theme__static.css";

const ThemedContent = () => {
  const path = useLocation().pathname;
  const element = path.split("/")[3];
  const type = path.split("/")[4];

  function Load1() {
    alert(
      "The basic idea for a theme toggle is to change the colour scheme between a preset light and dark variant..."
    );
  }

  function Load2() {
    alert(
      "... There are many reasons to not include a theme toggle however. One example is having pages with full size backgrounds..."
    );
  }

  function Load3() {
    alert(
      "... Unless you commission two backgrounds in a light and dark variant, the colour scheme will need to remain fixed."
    );
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sandbox | Static Theme</title>
        </Helmet>
      </HelmetProvider>
      <div id="generic__content-wrap">
        <div id="generic__content-wrap_logo-bg">
          <div id="generic__content-wrap_logo-bg_logo-contents">
            <img src={Logo} alt="logo" />
            <h3>
              {element}: {type}
            </h3>
            <h6>Welcome To The Sandbox</h6>
          </div>
        </div>
        <div className="theme__static-wrap">
          {/* <h3>
            the basic idea for a theme toggle is to change the colour scheme
            between a preset light and dark variant. there are many reasons to
            not include a theme toggle however. one example is having pages with
            full size backgrounds. unless you commission two backgrounds in a
            light and dark variant, the colour scheme will need to remain fixed.
          </h3> */}
          <div className="reviews__wrap">
            <h1>coffee reviews</h1>
            <div className="reviews__grid">
              <div className="reviews__item">
                <img src={Review_1} alt="review" />
              </div>
              <div className="reviews__item">
                <img src={Review_2} alt="review" />
              </div>
              <div className="reviews__item">
                <img src={Review_3} alt="review" />
              </div>
              <div className="reviews__item">
                <img src={Review_4} alt="review" />
              </div>
              <div className="reviews__item">
                <img src={Review_5} alt="review" />
              </div>

              <div className="reviews__item">
                <img src={Review_6} alt="review" />
              </div>
              <div className="reviews__item">
                <img src={Review_7} alt="review" />
              </div>
              <div className="reviews__item">
                <img src={Review_8} alt="review" />
              </div>
              <div className="reviews__item">
                <img src={Review_9} alt="review" />
              </div>
              <div className="reviews__item">
                <img src={Review_10} alt="review" />
              </div>
              <div className="reviews__item">
                <img src={Review_11} alt="review" />
              </div>
              <div className="reviews__item">
                <img src={Review_12} alt="review" onLoad={Load1} />
              </div>
              <div className="reviews__item">
                <img src={Review_13} alt="review" onLoad={Load2} />
              </div>
              <div className="reviews__item">
                <img src={Review_14} alt="review" onLoad={Load3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemedContent;
