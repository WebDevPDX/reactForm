import React from 'react'

const FinalStep = (props) => (
  <form>
    <label>
      Name:
      <input type="text" name="name" disabled value={props.name}/>
    </label>
    <label>
      Company:
      <input type="text" name="company" disabled value={props.company}/>
    </label>
    <label>
      I agree to the terms of service
      <input type="checkbox" name="tos" disabled checked={props.tos}/>
    </label>
  </form>
)

export default FinalStep
