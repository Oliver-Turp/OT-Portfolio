import { useState, useEffect } from 'react';
import useMultiStepForm from '../../Hooks/useMultiStepForm';
import { useTabs } from '../../Hooks/useTabs';

import '../../Styles/home__survey.css';
import ProjectOverview from './Quote__Form--Project-Overview';
import ServicesDevelopment from './Quote__Form--Services-Development';
import ServicesProduction from './Quote__Form--Services-Production';
import YourDetails from './Quote__Form--Your-Details';
import { formPartsData } from '../../Data/quoteFormPartsData';
import { useSessionStorage } from '../../Hooks/useSessionStorage';

const INITIAL_FORM_STATE = {
  email: '',
  fullName: '',
  phone: '',
  surveyManager: '',
  decisionMakers: '',
  budget: '',
  deadline: '',
  successDescription: '',
  pageCount: '',
  pageList: '',
  contactFormCount: '',
  levelOfSEO: '',
  domainName: '',
  topLevelDomain: '',
  emailCount: '',
  supportLevel: '',
};

const Home__Survey_Quote = () => {
  const [formData, setFormData] = useSessionStorage(
    'QUOTE_FORM_DATA',
    INITIAL_FORM_STATE
  );

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  function updateFields(fields) {
    setFormData((prevValue) => {
      return { ...prevValue, ...fields };
    });
  }

  const { step, steps, stepId, prev, next, goTo, currentMaxStepId } =
    useMultiStepForm([
      <YourDetails {...formData} updateFields={updateFields} />,
      <ProjectOverview {...formData} updateFields={updateFields} />,
      <ServicesDevelopment {...formData} updateFields={updateFields} />,
      <ServicesProduction {...formData} updateFields={updateFields} />,
    ]);

  function handleSubmit(e) {
    e.preventDefault();
    // go next page if we're not already on the last page
    if (stepId !== steps.length - 1) {
      return next();
    }

    console.log(formData);
    setFormData(INITIAL_FORM_STATE);
    alert('Congrats for finishing the form!!');
  }


  useEffect(() => {
    console.log("stepId: ",stepId, "currentMax: ", currentMaxStepId)
  }, [stepId, currentMaxStepId])

  return (
    <aside className="survey_form">
      <form onSubmit={handleSubmit}>
        <section className="form_tabs-wrapper">
          <div className="form_tabs title_tabs">
            {steps.map((part, index) => (
              <div className="form_tab" key={index}>
                <button
                  type="button"
                  onClick={() => {
                    if (index <= currentMaxStepId) {
                      console.log(index);
                      goTo(index);
                    }
                   
                  }}
                >
                  {formPartsData[index].title}
                </button>
              </div>
            ))}
          </div>
          <div className="form_tabs">
            {steps.map((part, index) => (
              <div
                key={index}
                className={`progress-bar ${
                  // formCompleted
                  //   ? 'complete'
                  //   :
                  index < stepId ? 'complete' : index === stepId ? 'active' : ''
                } `}
              ></div>
            ))}
          </div>
        </section>
        <div className="grid_2 form_page">{step}</div>

        <div className="form_button-group">
          {stepId !== 0 && (
            <section className="form_question">
              <button
                className="form_btn-left"
                type="button"
                onClick={() => prev()}
              >
                Previous
              </button>
            </section>
          )}
          {
            <section className="form_question">
              <button className="form_btn-left" type="submit">
                {stepId === steps.length - 1 ? 'Submit' : 'Next'}
              </button>
            </section>
          }
        </div>
      </form>
    </aside>
  );
};

export default Home__Survey_Quote;
