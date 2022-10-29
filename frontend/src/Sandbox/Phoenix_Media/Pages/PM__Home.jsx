import { Helmet, HelmetProvider } from "react-helmet-async";

import Balloon from "../Assets/Images/air-balloon.png";

import "../Styles/pm__home.css";

const PM__Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phoenix Media | Home</title>
        </Helmet>
      </HelmetProvider>
      <div className="pm__home-wrap">
        <div className="pm__home-txt">
          <h1>
            welcome to <br />
            the family
          </h1>
          <p></p>
        </div>

        <img src={Balloon} alt="air ballon" />
      </div>
    </>
  );
};

export default PM__Home;
