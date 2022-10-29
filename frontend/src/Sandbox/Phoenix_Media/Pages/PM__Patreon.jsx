import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import Forest from "../Assets/Images/forest.jpg";
import River from "../Assets/Images/river.jpg";
import Sea from "../Assets/Images/sea.jpg";

import "../Styles/pm__patreon.css";

const PM__Patreon = () => {
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      {
        img: Forest,
        alt: "Forest",
        h1: "our community",
        li1: "unique discord role",
        li2: "automatic entry to wall of fame",
        li3: "patreon only discord channels*",
        li4: "unique discord emojis*",
        li5: "access to the phoenix newsletter",
        active: false
      },
      {
        img: River,
        alt: "River",
        h1: "the inside scoop",
        li1: "all of tier 1",
        li2: "bonus entries in giveaways *",
        li3: "exclusive participation in videos",
        li4: "early access to content",
        li5: "post video shout outs",
        active: false
      },
      {
        img: Sea,
        alt: "Sea",
        h1: "join team phoenix",
        li1: "all of tiers 1 & 2",
        li2: "exclusive content",
        li3: "sponsor a video",
        li4: "exclusive hangouts / Q&A",
        li5: "merch discounts *",
        active: false
      },
    ]
  });

  function toggleActive(index) {
    const currentObj = { ...appState.objects[index] };
    currentObj.active = !currentObj.active;

    const copy = { ...appState };
    copy.objects.splice(index, 1, currentObj);

    changeState({ ...copy });
  }

  function toggleActiveStyles(index) {
    if (appState.objects[index].active) {
      return "card change";
    } else {
      return "card";
    }
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phoenix Media | Patreon</title>
        </Helmet>
      </HelmetProvider>
      <div className="pm__patreon-wrap">
        <h1>patreon</h1>
        <div className="pm__patreon-wrap_content-wrap">
          {appState.objects.map((elements, index) => (
            <div className={toggleActiveStyles(index)} key={index}>
              <div className="card_front">
                <img src={elements.img} alt={elements.alt} />
                <h1>{elements.h1}</h1>
                <ul>
                  <li>{elements.li1}</li>
                  <li>{elements.li2}</li>
                  <li>{elements.li3}</li>
                  <li>{elements.li4}</li>
                  <li>{elements.li5}</li>
                </ul>
                <button className="pm__patreon-btn" onClick={() => { toggleActive(index) }}>
                  price &gt;&gt;
                </button>
              </div>
              <div className="card_back">
                <button className="pm__patreon-btn" onClick={() => { toggleActive(index) }}>
                &lt;&lt; back
              </button>
                <h3>&pound;5</h3>
                <Link to="">click me to pay*</Link></div>
            </div>
          ))}
        </div>
        <p>*not yet set up</p>
      </div>
    </>
  );
};

export default PM__Patreon;
