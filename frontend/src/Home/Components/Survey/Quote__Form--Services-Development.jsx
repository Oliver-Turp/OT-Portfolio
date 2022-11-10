import React from 'react';

import Form from 'react-bootstrap/Form';

const ServicesDevelopment = ({
  pageCount,
  pageList,
  contactFormCount,
  levelOfSEO,
  updateFields,
}) => {
  return (
    <>
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
          name="pageCount"
          step="1"
          min="1"
          required
          value={pageCount}
          onChange={(e) => updateFields({ pageCount: e.target.value })}
        />
        <p className='error-text hidden'>You have to provide number of pages</p>
      </section>
      <section className="form_question">
        <label htmlFor="survey-pagesList">
          what pages do you need? <sup>*</sup>
        </label>
        {/* MAP THESE BASED ON THE VALUE FROM pagesCount. HORIZONTAL ONE LINE LAYOUT!!*/}
        <input
          type="text"
          name="pageList"
          required
          placeholder="MAP THESE BASED ON THE VALUE FROM pagesCount"
          value={pageList}
          onChange={(e) => updateFields({ pageList: e.target.value })}
        />
        <p className='error-text hidden'>You have to provide a comma separated list of pages you want</p>
      </section>
      <section className="form_question">
        <label htmlFor="survey-count">
          how many contact forms do you need? <sup>*</sup>
        </label>
        <input
          type="number"
          name="contactFormCount"
          step="1"
          min="0"
          required
          value={contactFormCount}
          onChange={(e) => updateFields({ contactFormCount: e.target.value })}
        />
        <p className='error-text hidden'>You have to provide number of contact forms </p>
      </section>
      <section className="form_question">
        <label htmlFor="survey-seo">
          what level of SEO are you looking for? <sup>*</sup>
        </label>
        <Form.Select
          name="levelOfSEO"
          value={levelOfSEO}
          onChange={(e) => updateFields({ levelOfSEO: e.target.value })}
        >
          <option hidden>basic / detailed</option>
          <option value="yes">basic</option>
          <option value="no">detailed</option>
        </Form.Select>
      <p className='error-text hidden'>You have to choose an option</p>
      </section>
    </>
  );
};

export default ServicesDevelopment;
