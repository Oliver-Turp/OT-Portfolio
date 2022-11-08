import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion as m } from "framer-motion";

import UIData from "../Components/Home__Sandbox_UI-Data";
import { useContentContext } from "../Context/ContentProvider";

import "../Styles/home__projects.css";

const Home__Projects = () => {
  const { projects } = useContentContext();

  const StaticSites = projects.filter(function (section) {
    return section.type === "Static Site";
  });

  const ReactApps = projects.filter(function (section) {
    return section.type === "React App";
  });

  const OnlineStores = projects.filter(function (section) {
    return section.type === "Online Store";
  });

  const PersonalProjects = projects.filter(function (section) {
    return section.type === "Personal Project";
  });

  const UIHeaders = UIData.filter(function (item) {
    return item.section === "Header";
  });

  const UIImages = UIData.filter(function (item) {
    return item.section === "Images";
  });

  const UIContact = UIData.filter(function (item) {
    return item.section === "Contact";
  });

  const UIFooters = UIData.filter(function (item) {
    return item.section === "Footer";
  });

  const UITheme = UIData.filter(function (item) {
    return item.section === "Theme";
  });

  const UIContentCount =
    UIHeaders.length +
    UIImages.length +
    UIContact.length +
    UIFooters.length +
    UITheme.length;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Oliver Turp | Projects</title>
        </Helmet>
      </HelmetProvider>
      <m.div
        className="home__projects-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="home__projects-content">
          <h1>all projects</h1>
          {StaticSites.length > 0 && (
            <>
              <h2>custom static sites</h2>
              <div className="home__projects-content_grid">
                {StaticSites.map((card) => (
                  <div className="home__projects_card-wrap" key={card.id}>
                    <a href={card.link} target="_blank">
                      <img src={card.image} alt={card.name} />
                    </a>
                    <div className="home__projects_card-body">
                      <h5>{card.name}</h5>
                      <p>{card.desc}</p>
                    </div>
                    <div className="home__projects_card-footer">
                      <p>{card.icon1}</p>
                      <p>{card.icon2}</p>
                      <p>{card.icon3}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {ReactApps.length > 0 && (
            <>
              <h2>dynamic react apps</h2>
              <div className="home__projects-content_grid">
                {ReactApps.map((card) => (
                  <div className="home__projects_card-wrap" key={card.id}>
                    <a href={card.link} target="_blank">
                      <img src={card.image} alt={card.name} />
                    </a>
                    <div className="home__projects_card-body">
                      <h5>{card.name}</h5>
                      <p>{card.desc}</p>
                    </div>
                    <div className="home__projects_card-footer">
                      <p>{card.icon1}</p>
                      <p>{card.icon2}</p>
                      <p>{card.icon3}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {OnlineStores.length > 0 && (
            <>
              <h2>online stores</h2>
              <div className="home__projects-content_grid">
                {OnlineStores.map((card) => (
                  <div className="home__projects_card-wrap" key={card.id}>
                    <a href={card.link} target="_blank">
                      <img src={card.image} alt={card.name} />
                    </a>
                    <div className="home__projects_card-body">
                      <h5>{card.name}</h5>
                      <p>{card.desc}</p>
                    </div>
                    <div className="home__projects_card-footer">
                      <p>{card.icon1}</p>
                      <p>{card.icon2}</p>
                      <p>{card.icon3}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {PersonalProjects.length > 0 && (
            <>
              <h2>personal projects</h2>
              <div className="home__projects-content_grid">
                {PersonalProjects.map((card) => (
                  <div className="home__projects_card-wrap" key={card.id}>
                    <a href={card.link} target="_blank">
                      <img src={card.image} alt={card.name} />
                    </a>
                    <div className="home__projects_card-body">
                      <h5>{card.name}</h5>
                      <p>{card.desc}</p>
                    </div>
                    <div className="home__projects_card-footer">
                      <p>{card.icon1}</p>
                      <p>{card.icon2}</p>
                      <p>{card.icon3}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {UIContentCount > 0 && (
            <>
              <h2>UI examples</h2>
              <p id="uiBlurb">
                occasionally, a client will withdraw from a project before it's
                completed. <br /> rather than let my partial work go to waste,
                these are examples of what you could have if you're unsure of
                your own designs.
              </p>
              <div className="home__UI-content_grid">
                {UIHeaders.length > 0 && (
                  <>
                    <div className="home__UI-content_grid-row">
                      {UIHeaders.map((card) => (
                        <div
                          className="home__UI_card-wrap"
                          id="home__UI-headers_card"
                          key={card.id}
                        >
                          <Link to={card.link} target="_blank">
                            <img src={card.image} alt={card.image} />
                          </Link>
                          <div className="home__UI_card-body">
                            <h5>
                              {card.section}: {card.type}
                            </h5>
                            <p>{card.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {UIImages.length > 0 && (
                  <>
                    <div className="home__UI-content_grid-row split">
                      {UIImages.map((card) => (
                        <div
                          className="home__UI_card-wrap"
                          id="home__UI-headers_card"
                          key={card.id}
                        >
                          <Link to={card.link} target="_blank">
                            <img src={card.image} alt={card.image} />
                          </Link>
                          <div className="home__UI_card-body">
                            <h5>
                              {card.section}: {card.type}
                            </h5>
                            <p>{card.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {UIContact.length > 0 && (
                  <>
                    <div className="home__UI-content_grid-row split">
                      {UIContact.map((card) => (
                        <div
                          className="home__UI_card-wrap"
                          id="home__UI-headers_card"
                          key={card.id}
                        >
                          <Link to={card.link} target="_blank">
                            <img src={card.image} alt={card.image} />
                          </Link>
                          <div className="home__UI_card-body">
                            <h5>
                              {card.section}: {card.type}
                            </h5>
                            <p>{card.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {UIFooters.length > 0 && (
                  <>
                    <div className="home__UI-content_grid-row">
                      {UIFooters.map((card) => (
                        <div
                          className="home__UI_card-wrap"
                          id="home__UI-headers_card"
                          key={card.id}
                        >
                          <Link to={card.link} target="_blank">
                            <img src={card.image} alt={card.image} />
                          </Link>
                          <div className="home__UI_card-body">
                            <h5>
                              {card.section}: {card.type}
                            </h5>
                            <p>{card.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {UITheme.length > 0 && (
                  <>
                    <div className="home__UI-content_grid-row split">
                      {UITheme.map((card) => (
                        <div
                          className="home__UI_card-wrap"
                          id="home__UI-headers_card"
                          key={card.id}
                        >
                          <Link to={card.link} target="_blank">
                            <img src={card.image} alt={card.image} />
                          </Link>
                          <div className="home__UI_card-body">
                            <h5>
                              {card.section}: {card.type}
                            </h5>
                            <p>{card.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </m.div>
    </>
  );
};

export default Home__Projects;
