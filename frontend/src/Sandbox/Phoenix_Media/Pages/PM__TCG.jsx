import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import TCG_Banner from "../Assets/Images/channels4_banner.jpg";

import "../Styles/pm__tcg.css";

const PM__TCG = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phoenix Media | TCG</title>
        </Helmet>
      </HelmetProvider>
      <div className="tcg__banner">
        <Link
          to="https://www.youtube.com/channel/UC_jS43nnHuq7pWd65TVAzzA"
          target="_blank"
        >
          <img src={TCG_Banner} alt="banner" />
        </Link>
      </div>
      <div className="tcg__intro">
        <p>
          here lies the remains of a dead youtube channel: mine. many moons ago,
          in a galaxy much like this one, i made videos under the alias
          "TurpoChargedGaming". the name was the suggestion of a college friend,
          being derived my surname: 'Turp'. <br />
          <br />
          The channel still exists, by all means click the banner above to go
          check it out... i leave the videos up to not only to remind myself how
          far i've come [both in content quality and my personal journey], but
          also as a way for you guys to learn more about me. a lot of these
          videos were open and honest about my struggles. and while some things
          are indeed private, i hope that this window into my life can help
          those who are struggling alone.
          <br />
          <br />
          <span>
            Much love to you all. these are a collection of my favourite videos:
          </span>
        </p>
      </div>
      <div class="tcg__all">
        <div class="head_top-left">
          <h1>My Hospital Story</h1>
        </div>

        <div class="head_top-right">
          <h1>One Year Anniversary Challenges</h1>
        </div>

        <div class="tcg-tl tcg_wrapper">
          <iframe
            class="tcg-vid"
            src="https://www.youtube.com/embed/videoseries?list=PL8iV-7hWYt9iCCCppekBZmT6QXbRDTLBW"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="tcg-tr tcg_wrapper">
          <iframe
            class="tcg-vid"
            src="https://www.youtube.com/embed/videoseries?list=PL8iV-7hWYt9grSWIqWSwFV0ODSrk6v76E"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="head_bot-left">
          <h1>Monday Madness Challenges</h1>
        </div>

        <div class="head_bot-right">
          <h1>Vlogs</h1>
        </div>

        <div class="tcg-bl tcg_wrapper">
          <iframe
            class="tcg-vid"
            src="https://www.youtube.com/embed/videoseries?list=PL8iV-7hWYt9jKerP_VGntBmClGEocxuNZ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="tcg-br tcg_wrapper">
          <iframe
            class="tcg-vid"
            src="https://www.youtube.com/embed/videoseries?list=PL8iV-7hWYt9iY3hTYVjyfbL1aeNi_Nvy2"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default PM__TCG;
