import { useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import FavIcon from "../Assets/Images/favicon.png";

import "../Styles/pm__nav.css";

const PM__Nav = () => {
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  let toggleNavCheck = btnState ? " change" : "";

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="icon" href={FavIcon} />
        </Helmet>
      </HelmetProvider>
      <div className={`pm__container${toggleNavCheck}`}>
        <div className="pm__header-wrap_logo">
          <h1>
            <span>P</span>
            <span>H</span>
            <span>O</span>
            <span>E</span>
            <span>N</span>
            <span>I</span>
            <span>X</span>
          </h1>
          <br />
          <h2>
            <span>S</span>
            <span>T</span>
            <span>U</span>
            <span>D</span>
            <span>I</span>
            <span>O</span>
            <span>S</span>
          </h2>
        </div>
        <div className="pm__header-wrap_hamburger" onClick={handleClick}>
          <div className="pm__header-wrap_hamburger-line"></div>
          <div className="pm__header-wrap_hamburger-line"></div>
          <div className="pm__header-wrap_hamburger-line"></div>
        </div>
        <div className="pm__header-wrap_nav-wrap">
          <nav className="pm__header-wrap_nav-content">
            <div className="pm__header-wrap_nav-close" onClick={handleClick}>
              <div className="pm__header-wrap_nav-close_1"></div>
              <div className="pm__header-wrap_nav-close_2"></div>
            </div>
            <div className="pm__header-wrap_nav-list" onClick={handleClick}>
              <Link to="/phoenixmedia" className="pm__nav-link">
                Home
              </Link>
              <Link
                to="/sandbox/projects/phoenixmedia/youtube"
                className="pm__nav-link"
              >
                YouTube
              </Link>
              <Link
                to="/sandbox/projects/phoenixmedia/discord"
                className="pm__nav-link"
              >
                Discord
              </Link>
              <Link
                to="/sandbox/projects/phoenixmedia/patreon"
                className="pm__nav-link"
              >
                Patreon
              </Link>
              <Link
                to="/sandbox/projects/phoenixmedia/turpochargedgaming"
                className="pm__nav-link"
              >
                About
              </Link>
              <Link
                to="/sandbox/projects/phoenixmedia/contact"
                className="pm__nav-link"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>

        <Outlet />
        <div className="pm__footer-wrap">
          <div className="pm__footer-heading">
            <h2>useful links</h2>
          </div>
          <div className="pm__footer-links">
            <Link to="comments">top comments</Link>
            <Link to="/sandbox/projects/phoenixmedia/wof">wall of fame</Link>
            <Link to="friends">friends of phoenix</Link>
            <Link to="#" onClick="randomSite()">
              random
            </Link>
            <Link
              to="/sandbox/projects/phoenixmedia/tcg"
              id="pm__footer-links_double"
            >
              TurpoChargedGaming
            </Link>
          </div>
          <div className="pm__footer-heading">
            <h2>newsletter</h2>
          </div>
          <form action="" method="post">
            <input
              type="text"
              name="news-name"
              placeholder="Your Name"
              className="pm__footer-form_name"
              required
            />
            <input
              type="email"
              name="news-email"
              placeholder="Your_Email@Domain.com"
              className="pm__footer-form_email"
              required
            />
            <input
              type="submit"
              value="Send"
              name="news-submit"
              className="pm__footer-form_btn"
            />
            <div className="pm__footer-copyRight">
              <p>
                copyright &copy;2020-2022 phoenix media group. all rights
                reserved.
              </p>
            </div>
          </form>
          <div className="pm__footer-heading">
            <h2>keep in touch</h2>
          </div>
          <div className="pm__footer-media">
            <Link to="/">facebook</Link>
            <Link to="/">twitter</Link>
            <Link to="/">instagram</Link>
            <Link to="/">discord</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PM__Nav;
