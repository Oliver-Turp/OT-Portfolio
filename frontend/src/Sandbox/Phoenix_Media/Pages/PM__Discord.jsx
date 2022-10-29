import { Helmet, HelmetProvider } from "react-helmet-async";

import "../Styles/pm__discord.css";

const PM__Discord = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phoenix Media | Discord</title>
        </Helmet>
      </HelmetProvider>
      <div className="pm__discord-wrap">
        <div className="pm__discord-wrap_header">
          <h1>discord</h1>
          <h2>
            welcome one and all to:
            <a
              href="https://discord.com/invite/e7nFN5?utm_source=Discord%20Widget&utm_medium=Connect"
              target="_blank"
            >
              <strong>'the nest'</strong>
            </a>
            ; our little home on the internet.
            <br />
          </h2>
        </div>
        <div className="pm__discord-wrap_content-wrap">
          <h3 className="head one">rules</h3>
          <p className="rule two">play nice</p>
          <p className="rule three">Honour NSFW or Spoiler Tags</p>
          <p className="rule four">No Spam/Self Promotion</p>
          <p className="rule five">Don't Ping Staff, Follow Help Proceedure</p>
          <p className="rule six">Respect All Staff Instructions</p>

          <h3 className="head one">Ranks</h3>
          <p className="rank two">Mofo'in Dragon!</p>
          <p className="rank three">Eagle</p>
          <p className="rank four">Owl</p>
          <p className="rank five">Zebra Finch</p>
          <p className="rank six">Ugandan Pigeon</p>

          <h4>&darr; Click the link to come and join us! &darr;</h4>

          <iframe
            src="https://discordapp.com/widget?id=701111633157816361&theme=dark"
            width="75%"
            height="100%"
            allowTransparency="true"
            frameborder="0"
          />
        </div>
      </div>
    </>
  );
};

export default PM__Discord;
