import React from 'react'
import { Link } from 'react-router-dom'

const ReviewStep = (props) => (
  <form>
    <label>
      Name:
      <input type="text" name="name" value={props.name} onChange={props.handleChange} />
    </label>
    <label>
      Company:
      <input type="text" name="company" value={props.company} onChange={props.handleChange} />
    </label>
    <Link to='/form'><button>back</button></Link>
    <Link to='/final'><button>next</button></Link>
  </form>
)

export default ReviewStep
