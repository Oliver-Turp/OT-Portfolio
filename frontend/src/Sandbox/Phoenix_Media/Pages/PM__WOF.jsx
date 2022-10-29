import { Helmet, HelmetProvider } from "react-helmet-async";

import Avatar from "../Assets/Images/avatar.png";

import "../Styles/pm__wof.css";

const PM__WOF = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phoenix Media | Wall of Fame</title>
        </Helmet>
      </HelmetProvider>
      <div className="wof__wrap">
        <div className="wof__wrap_header">
          <h1>welcome to the wall of fame</h1>
          <h2>appreciating this month's channel support</h2>
        </div>
        <div className="wof__wrap_content">
          <div className="wof__wrap_content-item">
            <p>Name One</p>
            <img src={Avatar} />
            <p>
              supporter since: <br />
              00/00/0000
            </p>
          </div>
          <div className="wof__wrap_content-item">
            <p>Name Two</p>
            <img src={Avatar} />
            <p>
              supporter since: <br />
              00/00/0000
            </p>
          </div>
          <div className="wof__wrap_content-item">
            <p>Name Three</p>
            <img src={Avatar} />
            <p>
              supporter since: <br />
              00/00/0000
            </p>
          </div>
          <div className="wof__wrap_content-item">
            <p>Name Four</p>
            <img src={Avatar} />
            <p>
              supporter since: <br />
              00/00/0000
            </p>
          </div>
          <div className="wof__wrap_content-item">
            <p>Name Five</p>
            <img src={Avatar} />
            <p>
              supporter since: <br />
              00/00/0000
            </p>
          </div>
          <div className="wof__wrap_content-item">
            <p>Name Six</p>
            <img src={Avatar} />
            <p>
              supporter since: <br />
              00/00/0000
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PM__WOF;
