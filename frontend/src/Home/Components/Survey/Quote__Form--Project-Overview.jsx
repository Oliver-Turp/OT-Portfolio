import React from 'react';

import Form from 'react-bootstrap/Form';
const ProjectOverview = ({
  surveyManager,
  decisionMakers,
  budget,
  deadline,
  successDescription,
  updateFields,
}) => {
  return (
    <>
      <h3>project overview</h3>
      <section className="form_question">
        <label htmlFor="survey-manager">
          are you the project manager? <sup>*</sup>
        </label>
        <Form.Select
          name="surveyManager"
          value={surveyManager}
          onChange={(e) => updateFields({ surveyManager: e.target.value })}
        >
          <option hidden>yes / no</option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </Form.Select>
        <p className='error-text hidden'>You have to choose an option</p>
      </section>
      <section className="form_question">
        <label htmlFor="survey-decision">
          how many decision makers are there? <sup>*</sup>
        </label>
        <input
          type="number"
          name="decisionMakers"
          step="1"
          min="1"
          required
          value={decisionMakers}
          onChange={(e) => updateFields({ decisionMakers: e.target.value })}
        />
        <p className='error-text hidden'>Number of decision makers has not been provided</p>
      </section>
      <section className="form_question">
        <label htmlFor="survey-budget">
          what is your budget? <sup>*</sup>
        </label>
        <input
          type="text"
          name="budget"
          id="survey-budget"
          placeholder="£1,000,000.00"
          value={budget}
          onChange={(e) => updateFields({ budget: e.target.value })}
          datatype="currency"
        />
        <p className='error-text hidden'>Specify your budget</p>
      </section>
      <section className="form_question">
        <label htmlFor="survey-deadline">
          when is the deadline? <sup>*</sup>
        </label>
        <input
          type="date"
          name="deadline"
          id="survey-deadline"
          value={deadline}
          onChange={(e) => updateFields({ deadline: e.target.value })}
        />
        <p className='error-text hidden'>You have not provided any deadlines for this project</p>
      </section>
      <section className="form_question form_double">
        <label htmlFor="survey-success">
          what does success look like for this project? <sup>*</sup>
        </label>
        <textarea
          name="successDescription"
          id="survey-success"
          placeholder="Any Additional Information Would Be Very Helpful!"
          rows="1"
          value={successDescription}
          onChange={(e) => updateFields({ successDescription: e.target.value })}
          required
        ></textarea>
        <p className='error-text hidden'>You've not provided any answers here</p>
      </section>
    </>
  );
};

export default ProjectOverview;
