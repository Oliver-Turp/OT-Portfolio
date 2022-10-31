import Form from "react-bootstrap/Form";

import "../../Styles/home__survey.css";

const Home__Survey_Quote = () => {
  return (
    <aside className="survey_form">
      <section className="form_tabs">
        <div className="form_tab">
          <p>your details</p>
        </div>
        <div className="form_tab">
          <p>about the project</p>
        </div>
        <div className="form_tab">
          <p>development</p>
        </div>
        <div className="form_tab">
          <p>production</p>
        </div>
        <div className="progress-bar complete"></div>
        <div className="progress-bar active"></div>
        <div className="progress-bar"></div>
        <div className="progress-bar"></div>
      </section>
      <div className="form_page grid_3">
        <h3>your details</h3>
        <section className="form_question">
          <label htmlFor="survey-name">
            name <sup>*</sup>
          </label>
          <input
            type="text"
            name="survey-name"
            placeholder="Your Full Name"
            required
          />
        </section>
        <section className="form_question">
          <label htmlFor="survey-email">
            email <sup>*</sup>
          </label>
          <input
            type="email"
            name="survey-email"
            placeholder="YourEmail@Domain.com"
            required
          />
        </section>
        <section className="form_question">
          <label htmlFor="survey-phone">phone</label>
          <input
            type="tel"
            name="survey-phone"
            placeholder="+CountryCode 123456789"
          />
        </section>
        <button>NEXT</button>
      </div>
      <div className="form_page grid_2">
        <h3>project overview</h3>
        <section className="form_question">
          <label htmlFor="survey-manager">
            are you the project manager? <sup>*</sup>
          </label>
          <Form.Select name="survey-manager">
            <option hidden>yes / no</option>
            <option value="yes">yes</option>
            <option value="no">no</option>
          </Form.Select>
        </section>
        <section className="form_question">
          <label htmlFor="survey-decision">
            how many decision makers are there? <sup>*</sup>
          </label>
          <input
            type="number"
            name="survey-decision"
            step="1"
            min="1"
            required
          />
        </section>
        <section className="form_question">
          <label htmlFor="survey-budget">
            what is your budget? <sup>*</sup>
          </label>
          <input
            type="text"
            name="survey-budget"
            id="survey-budget"
            placeholder="£1,000,000.00"
            value=""
            datatype="currency"
          />
        </section>
        <section className="form_question">
          <label htmlFor="survey-deadline">
            when is the deadline? <sup>*</sup>
          </label>
          <input
            type="date"
            name="survey-deadline"
            id="survey-deadline"
            value=""
          />
        </section>
        <section className="form_question form_double">
          <label htmlFor="survey-success">
            what does success look like for this project? <sup>*</sup>
          </label>
          <textarea
            name="survey-success"
            id="survey-success"
            placeholder="Any Additional Information Would Be Very Helpful!"
            rows="1"
            required
          ></textarea>
        </section>
        <section className="form_question">
          <button className="form_btn-left">PREVIOUS</button>
        </section>
        <section className="form_question">
          <button className="form_btn-right">NEXT</button>
        </section>
      </div>
      <div className="form_page grid_2">
        <h3>
          services required <br />
          <i>(development)</i>
        </h3>
        <section className="form_question">
          <label htmlFor="survey-pagesCount">
            how many pages do you need? <sup>*</sup>
          </label>
          <input
            type="number"
            name="survey-pagesCount"
            step="1"
            min="1"
            required
          />
        </section>
        <section className="form_question">
          <label htmlFor="survey-pagesList">
            what pages do you need? <sup>*</sup>
          </label>
          {/* MAP THESE BASED ON THE VALUE FROM pagesCount. HORIZONTAL ONE LINE LAYOUT!!*/}
          <input
            type="text"
            name="survey-pagesList"
            required
            placeholder="MAP THESE BASED ON THE VALUE FROM pagesCount"
          />
        </section>
        <section className="form_question">
          <label htmlFor="survey-count">
            how many contact forms do you need? <sup>*</sup>
          </label>
          <input
            type="number"
            name="survey-contact"
            step="1"
            min="0"
            required
          />
        </section>
        <section className="form_question">
          <label htmlFor="survey-seo">
            what level of SEO are you looking for? <sup>*</sup>
          </label>
          <Form.Select name="survey-seo">
            <option hidden>basic / detailed</option>
            <option value="yes">basic</option>
            <option value="no">detailed</option>
          </Form.Select>
        </section>
        <section className="form_question">
          <button className="form_btn-left">PREVIOUS</button>
        </section>
        <section className="form_question">
          <button className="form_btn-right">NEXT</button>
        </section>
      </div>
      <div className="form_page grid_2">
        <h3>
          services required <br />
          <i>(production)</i>
        </h3>
        <section className="form_question">
          <label htmlFor="survey-domainName">
            what domain name will you be purchasing? <sup>*</sup>
            <br />
            <i>www. | YourSiteName | .something</i>
          </label>
          <input
            type="text"
            name="survey-domainName"
            placeholder="YourSiteName"
            required
          />
        </section>
        <section className="form_question">
          <label htmlFor="survey-domainType">
            what top-level domain will you be purchasing? <sup>*</sup>
            <br />
            <i>www. | YourSiteName | .something</i>
          </label>
          <Form.Select className="lowercase" name="domainType">
            <option hidden>.something</option>
            <option value=".co.uk">.co.uk</option>
            <option value=".uk">.uk</option>
            <option value=".org.uk">.org.uk</option>
            <option value=".me.uk">.me.uk</option>
            <option value=".ltd.uk">.ltd.uk</option>
            <option value=".com">.com</option>
            <option value=".net">.net</option>
            <option value=".org.uk">.org.uk</option>
            <option value=".info">.info</option>
            <option value=".biz">.biz</option>
            <option value=".wales">.wales</option>
            <option value=".cymru">.cymru</option>
            <option value=".me">.me</option>
            <option value=".london">.london</option>
            <option value=".scot">.scot</option>
            <option value=".co">.co</option>
            <option value=".io">.io</option>
            <option value=".tv">.tv</option>
          </Form.Select>
        </section>
        <section className="form_question">
          <label htmlFor="survey-emailCount">
            how many email accounts will you require? <sup>*</sup>
          </label>
          <input
            type="number"
            name="survey-emailCount"
            step="1"
            min="0"
            required
          />
        </section>
        <section className="form_question">
          <label htmlFor="survey-support">
            what level of support will you need? <sup>*</sup>
          </label>
          <Form.Select name="survey-support">
            <option hidden>low / high / highest</option>
            <option value="low">low</option>
            <option value="high">high</option>
            <option value="highest">highest</option>
          </Form.Select>
        </section>
        <section className="form_question">
          <button className="form_btn-left">PREVIOUS</button>
        </section>
        <section className="form_question">
          <button className="form_btn-right" type="submit">
            SUBMIT
          </button>
        </section>
      </div>
    </aside>
  );
};

export default Home__Survey_Quote;
