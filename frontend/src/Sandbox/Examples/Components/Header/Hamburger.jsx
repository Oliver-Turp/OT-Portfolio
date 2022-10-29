import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import Content from "../../GenericContent";

import "../../Styles/header__hamburger.css";

const Hamburger = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sandbox | Hamburger Menu</title>
        </Helmet>
      </HelmetProvider>
      <div className="generic__nav-wrap">
        <div className="generic__sidebar_burger">
          <FontAwesomeIcon icon={faBars} onClick={showSidebar} />
        </div>

        <div
          className={sidebar ? "generic__nav-menu active" : "generic__nav-menu"}
        >
          <ul>
            <li className="generic__nav-close">
              <FontAwesomeIcon
                icon={faXmark}
                onClick={showSidebar}
                className="generic__icon"
              />
            </li>
            <li className="generic__nav-text">
              <p onClick={showSidebar}>home</p>
            </li>
            <li className="generic__nav-text">
              <p onClick={showSidebar}>projects</p>
            </li>
            <li className="generic__nav-text">
              <p onClick={showSidebar}>services</p>
            </li>
            <li className="generic__nav-text">
              <p onClick={showSidebar}>about</p>
            </li>
            <li className="generic__nav-text">
              <p onClick={showSidebar}>contact</p>
            </li>
          </ul>
        </div>
        <Content />
      </div>
    </>
  );
};

export default Hamburger;
