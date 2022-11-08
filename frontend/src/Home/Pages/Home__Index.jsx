import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Typewriter } from "react-simple-typewriter";
import { motion as m } from "framer-motion";

import Temp from "../Assets/Images/Glados.jpg";
import Logo from "../Assets/Images/CV Logo 2.png";
import { useContentContext } from "../Context/ContentProvider";
import LightBG from "../Assets/Images/LightBG.mp4";
import DarkBG from "../Assets/Images/DarkBG.mp4";
import TechSlider from "../Components/TechSlider";

import "../Styles/home__index.css";

const Home__Index = () => {
  const { projects } = useContentContext();

  const Featured = projects.filter(function (item) {
    return item.featured === true;
  });

  console.log(projects);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Oliver Turp | Home</title>
        </Helmet>
      </HelmetProvider>
      <m.div
        className="home__index-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="home__index-wrap_bio-wrap bg">
          <ul class="glass">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          {/* <video className="home__bio-vid Light" autoPlay muted loop>
            <source src={LightBG} type="video/mp4" />
          </video>
          <video className="home__bio-vid Dark" autoPlay muted loop>
            <source src={DarkBG} type="video/mp4" />
          </video> */}
          <div className="home__index-wrap_bio-content">
            <div className="home__index-wrap_bio-content_logo">
              <img src={Logo} alt="Temp" />
            </div>
            <div className="home__index-wrap_bio-content_text">
              <h1>
                Hello, my name is Oliver!
                <Typewriter words={[" I am"]} loop={1} cursor={false} />
                <Typewriter
                  words={[
                    "",
                    "",
                    " an engineer",
                    "",
                    " a web developer",
                    "",
                    " a data analyst",
                  ]}
                  loop={false}
                  cursor={true}
                />
              </h1>
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
          <h2>technologies i've worked with</h2>
          <TechSlider />
        </div>
      </m.div>
    </>
  );
};

export default Home__Index;
