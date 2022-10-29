import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import YouTube from "../Assets/Images/friends/youtube.png";
import Twitter from "../Assets/Images/friends/twitter.png";
import Instagram from "../Assets/Images/friends/instagram.png";
import Twitch from "../Assets/Images/friends/twitch.png";
import Amazon from "../Assets/Images/friends/amazon.png";
import Medium from "../Assets/Images/friends/medium.png";

import Ellena_BG from "../Assets/Images/friends/ellena-banner.jpg";
import Ellena_DP from "../Assets/Images/friends/ellena-dp.jpg";
import Simon_BG from "../Assets/Images/friends/sanitence-banner.jpg";
import Simon_DP from "../Assets/Images/friends/sanitence-dp.jpg";
import Elijah_BG from "../Assets/Images/friends/eli-banner.jpg";
import Elijah_DP from "../Assets/Images/friends/eli-dp.jpg";

import "../Styles/pm__friends.css";

const PM__Friends = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phoenix Media | Friends</title>
        </Helmet>
      </HelmetProvider>
      <div className="pm__friends-wrap">
        <div className="pm__friends-wrap_header">
          <h1>friends of phoenix</h1>
        </div>
        <div className="pm__friends-wrap_content">
          <div className="pm__friends-wrap_content-card">
            <div className="pm__friends-wrap_content-card_top">
              <img src={Ellena_BG} alt="banner" className="banner" />
            </div>
            <div className="pm__friends-wrap_content-card_mid">
              <img src={Ellena_DP} alt="dp" className="logo" />
              <div className="pm__friends-wrap_content-card_mid-grid">
                <Link
                  to="https://www.youtube.com/user/dramasims97/featured"
                  target="_blank"
                >
                  <img src={YouTube} alt="Link" />
                </Link>
                <Link to="https://twitter.com/ElleRest1997" target="_blank">
                  <img src={Twitter} alt="Link" />
                </Link>
                <Link
                  to="https://www.amazon.co.uk/E-L-Restrick/e/B00OJXV42C/ref=dp_byline_cont_book_1"
                  target="_blank"
                >
                  <img src={Amazon} alt="Link" />
                </Link>
                <Link to="https://medium.com/@ElleRest1997" target="_blank">
                  <img src={Medium} alt="Link" />
                </Link>
              </div>
            </div>
            <div className="pm__friends-wrap_content-card_bot">
              <p>
                Author, Youtuber, Gamer... is thre nothing E L Restrick can't
                do?! self published at just <strong>16 years old</strong> when
                she released the first in her 'darkness' trilogy, she first
                appeared on my original channel starring in the popular monday
                madness series. Click the links to check her out!
              </p>
            </div>
          </div>
          <div className="pm__friends-wrap_content-card">
            <div className="pm__friends-wrap_content-card_top">
              <img src={Simon_BG} alt="banner" className="banner" />
            </div>
            <div className="pm__friends-wrap_content-card_mid">
              <img src={Simon_DP} alt="dp" className="logo" />
              <div className="pm__friends-wrap_content-card_mid-grid">
                <Link
                  to="https://www.youtube.com/user/Sanitence/featured"
                  target="_blank"
                >
                  <img src={YouTube} alt="Link" />
                </Link>
                <Link to="https://twitter.com/Sanitence/" target="_blank">
                  <img src={Twitter} alt="Link" />
                </Link>
                <Link
                  to="https://www.instagram.com/realsanitence/"
                  target="_blank"
                >
                  <img src={Instagram} alt="Link" />
                </Link>
                <Link to="https://www.twitch.tv/sanitence/" target="_blank">
                  <img src={Twitch} alt="Link" />
                </Link>
              </div>
            </div>
            <div className="pm__friends-wrap_content-card_bot">
              <p>
                Sanitence is an aspiring fifa youtuber and creator of the
                'aiming for the title' head to head career mode series. he
                currently has
                <strong>830</strong> subscribers and over
                <strong>13 thousand</strong> views! quality content and an
                all-round funny human being, go click his links and show him
                some love
              </p>
            </div>
          </div>
          <div className="pm__friends-wrap_content-card">
            <div className="pm__friends-wrap_content-card_top">
              <img src={Elijah_BG} alt="banner" className="banner" />
            </div>
            <div className="pm__friends-wrap_content-card_mid">
              <img src={Elijah_DP} alt="dp" className="logo" />
              <div className="pm__friends-wrap_content-card_mid-grid">
                <Link
                  to="https://www.youtube.com/channel/UCYJdb2wDspe5HoV42wsTEBg/featured"
                  target="_blank"
                >
                  <img src={YouTube} alt="Link" />
                </Link>
                <Link to="https://twitter.com/EliTurp" target="_blank">
                  <img src={Twitter} alt="Link" />
                </Link>
              </div>
            </div>
            <div className="pm__friends-wrap_content-card_bot">
              <p>
                An up and comer on the scene, Elijah is a
                <strong>drummer, composer</strong> and
                <strong>parkour enthusiast.</strong> Watch this space for when
                he starts releasing videos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PM__Friends;
