import React from 'react';

import Form from 'react-bootstrap/Form';
const ServicesProduction = ({
  domainName,
  topLevelDomain,
  emailCount,
  supportLevel,
  updateFields,
}) => {
  return (
    <>
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
          value={domainName}
          onChange={(e) => updateFields({ domainName: e.target.value })}
        />
      </section>
      <section className="form_question">
        <label htmlFor="survey-domainType">
          what top-level domain will you be purchasing? <sup>*</sup>
          <br />
          <i>www. | YourSiteName | .something</i>
        </label>
        <Form.Select
          className="lowercase"
          name="domainType"
          value={topLevelDomain}
          onChange={(e) => updateFields({ topLevelDomain: e.target.value })}
        >
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
          value={emailCount}
          onChange={(e) => updateFields({ emailCount: e.target.value })}
        />
      </section>
      <section className="form_question">
        <label htmlFor="survey-support">
          what level of support will you need? <sup>*</sup>
        </label>
        <Form.Select name="survey-support">
          value={supportLevel}
          onChange={(e) => updateFields({ supportLevel: e.target.value })}
          <option hidden>low / high / highest</option>
          <option value="low">low</option>
          <option value="high">high</option>
          <option value="highest">highest</option>
        </Form.Select>
      </section>
    </>
  );
};

export default ServicesProduction;
