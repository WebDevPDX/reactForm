import React from 'react'
import { Link } from 'react-router-dom'

const ReviewStep = (props) => (
  <form className="steps-form review-step">
    <label className="name-label">
      Name:
      <input className="name-input" type="text" name="name" value={props.name} onChange={props.handleChange} placeholder="Your name" />
    </label>
    <label className="company-label">
      Company:
      <input className="company-input" type="text" name="company" value={props.company} onChange={props.handleChange} placeholder="Your company" />
    </label>
    <div className="button-wrapper">
      <Link to='/form' className="button">Back</Link>
      <Link to='/final' className="button">Submit</Link>
    </div>
  </form>
);

export default ReviewStep
