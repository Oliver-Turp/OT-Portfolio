import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

import "../Styles/home__services.css";

const Home__Services = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="home__services-wrap">
      <h1>web dev / design</h1>
      <div className="home__services-wrap_content-wrap">
        <div className="home__services-content">
          <h2>request a quote</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="service-form">
              <span className="row static">
                <h3>development</h3>
              </span>
              <span className="row">
                <p>pages:</p>
                <input
                  type="text"
                  placeholder="How Many Pages You Need"
                  required
                />
                <FontAwesomeIcon icon={faCircleQuestion} />
              </span>
              <span className="row static">
                <p>responsive:</p>
                <p>adaptable for all screen sizes!</p>
                <FontAwesomeIcon icon={faCircleQuestion} />
              </span>
              <span className="row">
                <p>contact forms:</p>
                <input
                  type="text"
                  placeholder="How Many Contact Forms You Need"
                  required
                />
                <FontAwesomeIcon icon={faCircleQuestion} />
              </span>
              <span className="row">
                <p>SEO:</p>
                <select name="seo" id="seo" required>
                  <option value="" selected hidden disabled>
                    SELECT
                  </option>
                  <option value="basic">Basic</option>
                  <option value="basic">Detailed</option>
                </select>
                <FontAwesomeIcon icon={faCircleQuestion} />
              </span>
            </div>
            <div className="service-form">
              <span className="row static">
                <h3>production</h3>
              </span>
              <span className="row static">
                <p>hosting:</p>
                <p>Access to my host service!</p>
                <FontAwesomeIcon icon={faCircleQuestion} />
              </span>
              <span className="row static">
                <p>HTTPS:</p>
                <p>SSL certificate included!</p>
                <FontAwesomeIcon icon={faCircleQuestion} />
              </span>
              <span className="row">
                <p>email accounts:</p>
                <input
                  type="text"
                  placeholder="How Many Email Accounts You Need"
                  required
                />
                <FontAwesomeIcon icon={faCircleQuestion} />
              </span>
              <span className="row">
                <p>domain name:</p>
                <input type="text" placeholder="YourName.Something" required />
                <FontAwesomeIcon icon={faCircleQuestion} />
              </span>
              <span className="row">
                <p>support:</p>
                <select name="support" id="support" required>
                  <option value="" selected hidden disabled>
                    SELECT
                  </option>
                  <option value="basic">Low</option>
                  <option value="basic">High</option>
                  <option value="basic">Highest</option>
                </select>
                <FontAwesomeIcon icon={faCircleQuestion} />
              </span>
            </div>
            <div className="service-form static">
              <span className="row static">
                <h3>questionnaire</h3>
              </span>
              <span className="row">
                <p>name:</p>
                <input type="text" placeholder="Your Name" required />
              </span>
              <span className="row">
                <p>phone:</p>
                <input type="tel" placeholder="Your Phone Number" required />
              </span>
              <span className="row">
                <p>email:</p>
                <input type="email" placeholder="Your email" required />
              </span>
              <span className="row">
                <p>something</p>
                <input type="text" placeholder="INSERT HERE" required />
              </span>
              <span className="row">
                <p>how many decision makers are there?:</p>
                <input
                  type="text"
                  placeholder="Number I'm Working With"
                  required
                />
              </span>
              <span className="row">
                <p>are you the project manager?:</p>
                <input type="text" placeholder="Yes / No" required />
              </span>
              <span className="row">
                <p>budget?:</p>
                <input
                  type="number"
                  min="1"
                  placeholder="Number of £(GBP)"
                  required
                />
              </span>
              <span className="row">
                <p>deadline?:</p>
                <input type="date" required id="deadline" />
              </span>
              <span className="double-width">
                <textarea
                  id="finalMsg"
                  placeholder="What Does Success Look Like For This Project?"
                  rows="1"
                ></textarea>
              </span>
            </div>
            <button type="submit" className="home__contact_input-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home__Services;
