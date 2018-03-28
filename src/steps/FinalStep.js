import React from 'react';

import './Steps.css';

const FinalStep = (props) => (
  <form className="steps-form final-step">
    <label className="name-label">
      Name:
      <input className="name-input" type="text" name="name" disabled value={props.name}/>
    </label>
    <label className="company-label">
      Company:
      <input className="company-input" type="text" name="company" disabled value={props.company}/>
    </label>
    <label className="tos-label">
      I agree to the terms of service
      <input className="tos-input" type="checkbox" name="tos" disabled checked={props.tos}/>
    </label>
  </form>
);

export default FinalStep
