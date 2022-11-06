import React from 'react';

import Form from 'react-bootstrap/Form';
const ProjectOverview = () => {
  return (
    <>
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
        <input type="number" name="survey-decision" step="1" min="1" required />
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
    </>
  );
};

export default ProjectOverview;
