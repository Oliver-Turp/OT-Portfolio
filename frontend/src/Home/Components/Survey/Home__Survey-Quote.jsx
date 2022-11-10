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
import { useRef } from 'react';
import { validateEmail } from '../../Utils/validateEmail';

const INITIAL_DETAILS_STATE = {
  fullName: '',
  email: '',
  phone: '',
};

const INITIAL_PROJ_OVERVIEW_STATE = {
  surveyManager: '',
  decisionMakers: '',
  budget: '',
  deadline: '',
  successDescription: '',
};

const INITIAL_DEV_STATE = {
  pageCount: '',
  pageList: '',
  contactFormCount: '',
  levelOfSEO: '',
};
const INITIAL_PROD_STATE = {
  domainName: '',
  topLevelDomain: '',
  emailCount: '',
  supportLevel: '',
};

const Home__Survey_Quote = () => {
  const formRef = useRef(null);
  const [detailsData, setDetailsData] = useSessionStorage(
    'QUOTE_FORM_DETAILS_PAGE_DATA',
    INITIAL_DETAILS_STATE
  );
  const [projOverviewData, setProjOverviewData] = useSessionStorage(
    'QUOTE_FORM_PROJ_OVERVIEW_PAGE_DATA',
    INITIAL_PROJ_OVERVIEW_STATE
  );

  const [devData, setDevData] = useSessionStorage(
    'QUOTE_FORM_DEVELOPMENT_PAGE_DATA',
    INITIAL_DEV_STATE
  );

  const [prodData, setProdData] = useSessionStorage(
    'QUOTE_FORM_PRODUCTION_PAGE_DATA',
    INITIAL_PROD_STATE
  );

  const formDataParts = [detailsData, projOverviewData, devData, prodData];

  function updateDetailsFields(fields) {
    updateFields(setDetailsData, fields);
  }

  function updateProjOverviewFields(fields) {
    updateFields(setProjOverviewData, fields);
  }
  function updateDevFields(fields) {
    updateFields(setDevData, fields);
  }
  function updateProdFields(fields) {
    updateFields(setProdData, fields);
  }
  function updateFields(setFormPageState, fields) {
    setFormPageState((prevValue) => {
      return { ...prevValue, ...fields };
    });
  }

  const {
    step,
    steps,
    stepId,
    prev,
    next,
    goTo,
    currentMaxStepId,
    resetMultiStep,
  } = useMultiStepForm([
    <YourDetails {...detailsData} updateFields={updateDetailsFields} />,
    <ProjectOverview
      {...projOverviewData}
      updateFields={updateProjOverviewFields}
    />,
    <ServicesDevelopment {...devData} updateFields={updateDevFields} />,
    <ServicesProduction {...prodData} updateFields={updateProdFields} />,
  ]);

  function validateCurrentPage() {
    // loop through all the properties of the object that rep data for the current page
    // check if any of the properties have a value of an empty string
    // if any does, get the element that has that name from the form object
    // give it a css class to do some stuff

    const currentFormPageData = formDataParts[stepId];

    for (let key in currentFormPageData) {
      const formInput = formRef.current[key];

      console.log('key: ', key, 'stepId: ', stepId);
      console.log('formRef: ', formRef.current[key]);

      if (currentFormPageData[key] === '') {
        shake(formInput);
        return false;
      }

      if (key == "email") {
        const isValid = validateEmail(currentFormPageData[key]);
        if (isValid === false) {
          shake(formInput)
          return false;
        } 
      }
    }
    return true;
  }

  function shake(formInput) {
    formInput.focus();
    formInput.classList.add('error');

    setTimeout(() => {
      formInput.classList.remove('error');
    }, 700);
  }

  function handleSubmit(e) {
    const canContinue = validateCurrentPage();
    if (canContinue === false) {
      return;
    }

    // go next page if we're not already on the last page
    if (stepId !== steps.length - 1) {
      return next();
    }

    // reset the form states once it's sent over email
    resetFormData();
    resetMultiStep();
  }

  function resetFormData() {
    setDetailsData(INITIAL_DETAILS_STATE);
    setProdData(INITIAL_PROD_STATE);
    setDevData(INITIAL_DEV_STATE);
    setProdData(INITIAL_PROD_STATE);
  }

  useEffect(() => {
    console.log('stepId: ', stepId, 'currentMax: ', currentMaxStepId);
  }, [stepId, currentMaxStepId]);

  return (
    <aside className="survey_form">
      <form ref={formRef}>
        <section className="form_tabs-wrapper">
          <div className="form_tabs title_tabs">
            {steps.map((part, index) => (
              <div className="form_tab" key={index}>
                <button
                  type="button"
                  onClick={() => {
                    if (index <= currentMaxStepId) {
                      const canContinue = validateCurrentPage();
                      if (index > stepId && canContinue === false) return;
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
              <button
                className="form_btn-left"
                type="button"
                onClick={handleSubmit}
              >
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
