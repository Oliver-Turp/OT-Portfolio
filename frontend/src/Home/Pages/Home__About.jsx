import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion as m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import CV from "../Assets/Pdfs/Civil Engineering Degree.pdf";
import Degree from "../Assets/Pdfs/Oliver Turp Resume_Optimised.pdf";

import "../Styles/home__about.css";

const Home__About = () => {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
    console.log("use effect hook, inView = ", inView);
  }, [inView]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Oliver Turp | About</title>
        </Helmet>
      </HelmetProvider>
      <m.div
        className="home__about-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="home__about-wrap_content">
          <h1>about me</h1>
          <section className="home__about-wrap_content_personalProfile">
            <h2>personal profile</h2>
            <p>
              I am a genuine, intelligent, compassionate, young man,
              enthusiastic to learn; I have integrity and a good work ethic. I
              am told I have a mature attitude and keen sense of humour which I
              use to put people at ease. I am ambitious. I would like to look
              back on a career and say,{" "}
              <i>
                “I have helped develop something that has improved the world and
                people’s lives.”
              </i>
            </p>
          </section>
          <div className="home__about-wrap_content-buttons">
            <Link to={CV} target="_blank">
              Download my CV
            </Link>
            <Link to={Degree} target="_blank">
              Download my degree
            </Link>
          </div>
          <m.section
            className="home__about-wrap_content_transferableSkills"
            animate={animation}
            ref={ref}
          >
            <h2>transferable skills</h2>
            <p>
              the following skills are those which I apply to every job or task
              i do
            </p>
          </m.section>
          <m.div
            className="home__about-wrap_content-list"
            animate={animation}
            ref={ref}
          >
            <p>
              <FontAwesomeIcon icon={faCheck} />
              <strong> people skills: </strong>i live and work in a diverse
              inner city area so I fully understand inclusion, diversity and
              multi cultural needs.
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} />
              <strong> communication skills: </strong>I'm a great team player,
              as I love brain storming with others and can adapt my ideas.
              Equally, i love working independently as I can naturally take the
              lead and delegate to others.
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} />
              <strong> IT skills: </strong>aside from typing 60 words per
              minute, I am proficient in all of office 365.
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} />
              <strong> problem solving: </strong>I am both innovative and
              creative in my methods to problem solve.
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} />
              <strong> management: </strong>supervisor skill when running my own
              team as well as training new members.
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} />
              <strong> back office: </strong>book-keeping, petty cash, banking
              and all aspects of stock control and sales of merchandise.
            </p>
          </m.div>
          <m.section
            className="home__about-wrap_content_technicalSkills"
            animate={animation}
            ref={ref}
          >
            <h2>technical skills</h2>
            <p>
              I have experience with the following list, which i'm always
              looking to expand to learn more!
            </p>
          </m.section>
          <m.div
            className="home__about-wrap_content-list"
            animate={animation}
            ref={ref}
          >
            <p>
              <FontAwesomeIcon icon={faArrowRight} />
              <strong> </strong>
              Windows 7, 8, 10 and 11.
            </p>
            <p>
              <FontAwesomeIcon icon={faArrowRight} />
              <strong> </strong>
              office 365 as well as G Suite
            </p>
            <p>
              <FontAwesomeIcon icon={faArrowRight} /> <strong> </strong>
              Zoom, MS Teams, Skype & Discord
            </p>
            <p>
              <FontAwesomeIcon icon={faArrowRight} /> <strong> </strong>
              react 18
            </p>
            <p>
              <FontAwesomeIcon icon={faArrowRight} /> <strong> </strong>XAMPP
            </p>
            <p>
              <FontAwesomeIcon icon={faArrowRight} /> <strong> </strong>HTML5 &
              CSS3
            </p>
            <p>
              <FontAwesomeIcon icon={faArrowRight} /> <strong> </strong>
              javascript
            </p>
            <p>
              <FontAwesomeIcon icon={faArrowRight} /> <strong> </strong>
              git & gitHub
            </p>
            <p>
              <FontAwesomeIcon icon={faArrowRight} /> <strong> </strong>
              SQL
            </p>
            <p>
              <FontAwesomeIcon icon={faArrowRight} /> <strong> </strong>
              mongoDB / NoSQL
            </p>
          </m.div>
        </div>
      </m.div>
    </>
  );
};

export default Home__About;
