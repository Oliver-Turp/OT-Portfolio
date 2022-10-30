import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Temp from "../Assets/Images/Glados.jpg";
import { useContentContext } from "../Context/ContentProvider";
import WebsiteData from "../Components/Home__Projects_Websites-Data";
import LightBG from "../Assets/Images/CubePattern.jpg";
import DarkBG from "../Assets/Images/DarkBG.mp4";

import "../Styles/home__index.css";

const Home__Index = () => {
  const { projects } = useContentContext();

  const Featured = projects.filter(function (item) {
    return item.featured === true;
  });

  console.log(projects)

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Oliver Turp | Home</title>
        </Helmet>
      </HelmetProvider>
      <div className="home__index-wrap">
        <div className="home__index-wrap_bio-wrap">
          {/* <video className="home__bio-vid Light" autoPlay muted loop>
            <source src={LightBG} type="video/mp4" />
          </video> */}
          <img className="home__bio-vid Light" src={LightBG} alt="banner" />
          <video className="home__bio-vid Dark" autoPlay muted loop>
            <source src={DarkBG} type="video/mp4" />
          </video>
          <div className="home__index-wrap_bio-content">
            <div className="home__index-wrap_bio-content_logo">
              <img src={Temp} alt="Temp" />
            </div>
            <div className="home__index-wrap_bio-content_text">
              <h1>Hello, I'm Oliver!</h1>
              <p>
                I am a bachelor of engineering (BEng) having graduated with
                upper second class honours in civil engineering.
              </p>
              <p>
                despite my chosen field, during the pandemic I decided to teach
                myself to code. I just finished a 12 week paid internship with a
                national charity covering everything from data cleaning and
                analysis to an intranet redesign project.
              </p>
              {/* <br />
              <br /> */}
              <p>
                I have taken a keen interest in front end web design and
                development as well as data analysis.
              </p>
              {/* <br />
              <br /> */}
              <p>
                Please snoop around the <Link to="projects">projects</Link> I've
                undertaken in my short career so far,
              </p>
              <p>
                Or perhaps learn more <Link to="about">about me</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="home__index-wrap_section-wrap">
          <h2>custom static sites</h2>
          <div className="home__projects-content_grid">
            {Featured.map((card) => (
              <div className="home__projects_card-wrap" key={card.id}>
                <Link to={card.link} target="_blank">
                  <img src={card.image} alt={card.name} />
                </Link>
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
        </div>
        <div className="home__index-wrap_section-wrap">
          {/* <h2>technologies i've worked with</h2> */}
          {/* <TechSlider /> */}
        </div>
      </div>
    </>
  );
};

export default Home__Index;
