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
          name="survey-pagesCount"
          step="1"
          min="1"
          required
          value={pageCount}
          onChange={(e) => updateFields({ pageCount: e.target.value })}
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
          value={pageList}
          onChange={(e) => updateFields({ pageList: e.target.value })}
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
          value={contactFormCount}
          onChange={(e) => updateFields({ contactFormCount: e.target.value })}
        />
      </section>
      <section className="form_question">
        <label htmlFor="survey-seo">
          what level of SEO are you looking for? <sup>*</sup>
        </label>
        <Form.Select
          name="survey-seo"
          value={levelOfSEO}
          onChange={(e) => updateFields({ levelOfSEO: e.target.value })}
        >
          <option hidden>basic / detailed</option>
          <option value="yes">basic</option>
          <option value="no">detailed</option>
        </Form.Select>
      </section>
    </>
  );
};

export default ServicesDevelopment;
