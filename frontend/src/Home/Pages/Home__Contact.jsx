import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { motion as m } from "framer-motion";

import "../Styles/home__contact.css";

const Home__Contact = () => {
  const [btnState, setBtnState] = useState(false);

  function toggleSubmit() {
    setBtnState((btnState) => !btnState);
  }

  function formValidation(e) {
    const captcha = document.getElementById("captcha").value;

    if (captcha == 69420) {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_xuml4ms",
          "template_0wg5ubp",
          e.target,
          "d0QMfD17nPqDUJgHd"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      toggleSubmit();
    } else {
      e.preventDefault();
      alert("ERROR: Incorrect Captcha.... Are You A Robot?");
    }
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Oliver Turp | Contact</title>
        </Helmet>
      </HelmetProvider>
      <m.div
        className="home__contact-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="home__contact-wrap_margin">
          <h1>contact me</h1>
          <div className="home__contact-wrap_content-wrap">
            <div className="home__contact-wrap_content-wrap_left">
              <span id="form_success" className={btnState ? "visible" : ""}>
                <p>message sent!</p>
              </span>
              <form
                className={
                  btnState
                    ? "home__contact-wrap_content-wrap_left_form sent"
                    : "home__contact-wrap_content-wrap_left_form"
                }
                onSubmit={formValidation}
              >
                <div className="home__contact_input-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    className="home__contact_input-item"
                    required
                  />
                </div>
                <div className="home__contact_input-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="home__contact_input-item"
                    required
                  />
                </div>
                <div className="home__contact_input-group">
                  <label>Phone:</label>
                  <input
                    type="tel"
                    name="phone"
                    className="home__contact_input-item"
                  />
                </div>
                <div className="home__contact_input-group">
                  <label>Message:</label>
                  <textarea
                    className="home__contact_text-area"
                    name="message"
                    required
                  />
                </div>
                <div className="home__contact_input-group">
                  <label>CAPTCHA: What Is &radic;4819136400 ?</label>
                  <input
                    type="number"
                    id="captcha"
                    name="captcha"
                    className="home__contact_input-item"
                    pattern="(69420)$"
                    required
                  />
                </div>
                <button
                  type="submit"
                  name="submit"
                  className="home__contact_input-btn"
                >
                  send message
                </button>
              </form>
            </div>
            <div className="home__contact-wrap_content-wrap_right">
              <div className="home__contact-wrap_content-wrap_right_links">
                <h2>email</h2>
                <a href="mailto:">email here</a>
              </div>
              <div className="home__contact-wrap_content-wrap_right_text">
                <h2>responses</h2>
                <p>
                  looking to create your dream website?
                  <br />
                  <br />
                  head hunting for your latest project?
                  <br />
                  <br />
                  please feel free to get in touch!
                  <br />
                  <br />I aim to reply to everyone by the very latest within 2-3
                  business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </m.div>
    </>
  );
};

export default Home__Contact;
