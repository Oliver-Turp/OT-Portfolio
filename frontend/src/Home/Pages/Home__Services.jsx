import { useState } from "react";

import "../Styles/home__services.css";

const Home__Services = () => {
  return (
    <div className="home__services-wrap">
      <h1>some title</h1>
      <div className="home__services-wrap_content-wrap">
        <div className="home__services-content_left">
          <h2>approximate annual pricing</h2>
        </div>
        <div className="home__services-content_right">
          <h2>your estimated pricing</h2>
          <div className="services_print-item">
            <p id="services-bold">SEO:</p>
            <p>*CHOICE* &#163;*PRICE*</p>
          </div>
          <div className="services_print-item">
            <p id="services-bold">Pages:</p>
            <p>*COUNT* &#163;*PRICE*</p>
          </div>
          <div className="services_print-item">
            <p id="services-bold">Emails:</p>
            <p>*COUNT* &#163;*PRICE*</p>
          </div>
          <div className="services_print-item">
            <p id="services-bold">Support:</p>
            <p>*CHOICE* &#163;*PRICE*</p>
          </div>
          <div className="services_print-item">
            <p id="services-bold">Addons:</p>
            <p>*CHOICE(S)* &#163;*PRICE*</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home__Services;
