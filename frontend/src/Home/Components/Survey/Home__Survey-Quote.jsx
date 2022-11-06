import { useState, useEffect } from 'react';
import useMultiStepForm from '../../Hooks/useMultiStepForm';
import { useTabs } from '../../Hooks/useTabs';

import '../../Styles/home__survey.css';
import ProjectOverview from './Quote__Form--Project-Overview';
import ServicesDevelopment from './Quote__Form--Services-Development';
import ServicesProduction from './Quote__Form--Services-Production';
import YourDetails from './Quote__Form--Your-Details';

const Home__Survey_Quote = () => {
  const [formData, setFormData] = useState({
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
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const formPartsData = [
    {
      title: 'Your Details',
      caption: 'Your Details',
    },
    {
      title: 'Project Overview',
      caption: 'Project Overview',
    },
    {
      title: 'Development',
      caption: 'Services Required',
    },
    {
      title: 'Production',
      caption: 'Services Required',
    },
  ];

  function updateFields(fields) {
    setFormData((prevValue) => {
      return { ...prevValue, ...fields };
    });
  }
  const surveryFormParts = [
    <YourDetails { ...formData } updateFields={updateFields} />,
    <ProjectOverview formData={formData} updateFields={updateFields} />,
    <ServicesDevelopment formData={formData} updateFields={updateFields} />,
    <ServicesProduction formData={formData} updateFields={updateFields} />,
  ];

  const { step, steps, stepId, prev, next } =
    useMultiStepForm(surveryFormParts);

  function handleSubmit(e) {
    e.preventDefault();
    // go next page if we're not already on the last page
    if (stepId !== steps.length - 1) {
      return next();
    }
  }

  return (
    <aside className="survey_form">
      <section className="form_tabs-wrapper">
        <div className="form_tabs">
          {surveryFormParts.map((part, index) => (
            <div className="form_tab" key={index}>
              <p>{formPartsData[index].title}</p>
            </div>
          ))}
        </div>
        <div className="form_tabs">
          {surveryFormParts.map((part, index) => (
            <div
              key={index}
              className={`progress-bar ${
                index < stepId ? 'completed' : index === stepId ? 'active' : ''
              } `}
            ></div>
          ))}
        </div>
      </section>
      <form onSubmit={handleSubmit}>
        <div className="grid_2 form_page">{step}</div>

        <div className="form_button-group">
          {stepId !== 0 && (
            <section className="form_question">
              <button className="form_btn-left" onClick={() => prev()}>
                Previous
              </button>
            </section>
          )}
          {
            <section className="form_question">
              <button className="form_btn-left">
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
