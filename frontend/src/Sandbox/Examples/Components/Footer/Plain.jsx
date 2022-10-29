import { Helmet, HelmetProvider } from "react-helmet-async";

import Content from "../../GenericContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareTwitter,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

import "../../Styles/footer__plain.css";

const Plain = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sandbox | Simple Footer</title>
        </Helmet>
      </HelmetProvider>
      <div className="generic__footer-page_wrap">
        <Content />
        <div className="generic__footer-wrap">
          <div className="generic__footer-wrap_content">
            <div className="generic__footer-wrap_content-left">
              <p>copyright &copy; oliver turp 2022</p>
            </div>
            <div className="generic__footer-wrap_content-right">
              <a href="https://www.facebook.com/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <FontAwesomeIcon icon={faSquareTwitter} />
              </a>
              <a href="https://instgram.com/" target="_blank">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plain;
