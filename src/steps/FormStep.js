import React from 'react';
import { Link } from 'react-router-dom';

import './Steps.css';

const FormStep = (props) => (
  <form className="steps-form form-step">
    <label className="name-label">
      Name:
      <input
        className="name-input"
        type="text"
        name="name"
        value={props.name}
        onChange={props.handleChange}
        placeholder="Your name"
      />
    </label>
    <label className="company-label">
      Company:
      <input
        className="company-input"
        type="text"
        name="company"
        value={props.company}
        onChange={props.handleChange}
        placeholder="Your company"
      />
    </label>
    <label className="tos-label">
      I agree to the terms of service
      <input className="tos-input" type="checkbox" name="tos" checked={props.tos} onChange={props.handleChange} />
    </label>
    <div className="button-wrapper button-wrapper-right">
      <Link to='/review' className="button button-right">Review</Link>
    </div>
  </form>
);

export default FormStep
