import { useLocation } from "react-router-dom";

import Profile from "./Assets/Images/Glados.png";
import Logo from "./Assets/Images/Logo.png";

import "./Styles/generic__content.css";

const GenericContent = () => {
  const path = useLocation().pathname;
  const element = path.split("/")[3];
  const type = path.split("/")[4];

  return (
    <>
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
        <div id="generic__content-wrap_text-wrap">
          <div id="left">
            <img src={Profile} alt="logo" />
            <p>
              GLaDOS (<strong>G</strong>enetic <strong>L</strong>ifeform{" "}
              <strong>a</strong>nd <strong>D</strong>isk <strong>O</strong>
              perating <strong>S</strong>ystsem)
            </p>
            <p>Winner of the 2022 AI Overlord of The Year Award</p>
          </div>
          <div id="right">
            <p>
              GLaDOS was a creation of Aperture Science, a personality core
              designed exactly to be fitted as a central computer mainframe. The
              project began under the oversight of Cave Johnson over the company
              and was an attempt to create a fully functional, advanced
              artificial intelligence which was originally intended to be
              occupied by Johnson as one of his attempts to cheat death. After
              it became apparent to Johnson that he may die of moon rock
              poisoning before development on GLaDOS would be completed, Johnson
              motioned for the scientists to insert Caroline instead.
            </p>
            <p>
              After a decade's worth of hard work, GLaDOS was officially
              activated as part of one of the many events during the company's
              "Bring Your Daughter to Work" day. Since she was able to take
              control of half of the facility's features, GLaDOS began killing
              most of its inhabitants by flooding the Enrichment Center with
              neurotoxin. However, only a few if not only one of the staff such
              as Doug Rattmann had survived her attacks along with the series'
              main protagonist, Chell. The destruction of the company also
              coincided with an invasion of Earth, which had occurred two days
              after at Aperture's rival company, Black Mesa. This ultimately led
              to the negligence of the outside world from realizing Aperture's
              fate, as all attention had been diverted to Black Mesa and the
              aforementioned invasion.
            </p>
            <p>
              Since the attack, she has managed the company to her limits. Her
              first test subject and the series' main protagonist, Chell, was
              given a warning of GLaDOS' true colors with the help of Rattmann.
              She confronts GLaDOS in her chamber at the end of Portal, which
              allowed GLaDOS to develop an even deeper hatred for her after she
              was awakened at the beginning of Portal 2.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenericContent;
