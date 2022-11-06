import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const YourDetails = (props) => {
  const {fullName, email, phone,  updateFields } = props;
  // const { fullName, email, phone} = formData
  // TODO: SO SOMEHOW, THE THIS COMPONENT DOES NOT RERENDER WHEN THE PROPS CHANGE.
  useEffect(() => {
    console.log("formData from details: ", {fullName, email, phone})
  })
  return (
    <>
      <h3>your details</h3>
      <section className="form_question">
        <label htmlFor="survey-name">
          name <sup>*</sup>
        </label>
        <input
          type="text"
          id="fullName"
          name="survey-name"
          placeholder="Your Full Name"
          value={fullName}

          onChange={(e) => updateFields({ fullName: e.target.value })}
          required
        />
      </section>
      <section className="form_question">
        <label htmlFor="survey-email">
          email <sup>*</sup>
        </label>
        <input
          type="email"
          id="email"
          name="survey-email"
          placeholder="YourEmail@Domain.com"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          required
        />
      </section>
      <section className="form_question">
        <label htmlFor="survey-phone">phone</label>
        <input
          type="tel"
          id="phone"
          name="survey-phone"
          placeholder="+<country_code> 123456789"
          value={phone}
          onChange={(e) => updateFields({ phone: e.target.value })}
        />
      </section>
    </>
  );
};

export default YourDetails;
