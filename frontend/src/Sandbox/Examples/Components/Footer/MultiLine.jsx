import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Content from "../../GenericContent";

import "../../Styles/footer__multiline.css";

const Hover = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sandbox | Multi Line Footer</title>
        </Helmet>
      </HelmetProvider>
      <div className="generic__footer-page_wrap">
        <Content />
        <div className="multiline__footer-wrap">
          <div className="multiline__footer-heading">
            <h2>useful links</h2>
          </div>
          <div className="multiline__footer-links">
            <Link to="#">link 1</Link>
            <Link to="#">link 2</Link>
            <Link to="#">link 3</Link>
            <Link to="#">link 4</Link>
          </div>
          <div className="multiline__footer-heading">
            <h2>newsletter</h2>
          </div>
          <form action="" method="post">
            <input
              type="text"
              name="news-name"
              placeholder="Your Name"
              className="multiline__footer-form_name"
              required
            />
            <input
              type="email"
              name="news-email"
              placeholder="Your_Email@Domain.com"
              className="multiline__footer-form_email"
              required
            />
            <input
              type="submit"
              value="Send"
              name="news-submit"
              className="multiline__footer-form_btn"
            />
            <div className="multiline__footer-copyRight">
              <p>copyright &copy;2022 your company. all rights reserved.</p>
            </div>
          </form>
          <div className="multiline__footer-heading">
            <h2>keep in touch</h2>
          </div>
          <div className="multiline__footer-media">
            <Link to="#">facebook</Link>
            <Link to="#">twitter</Link>
            <Link to="#">instagram</Link>
            <Link to="#">discord</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hover;
