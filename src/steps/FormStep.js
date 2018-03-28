import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class FormStep extends Component {
  render() {
    const props = this.props
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" value={props.name} onChange={props.handleChange} />
        </label>
        <label>
          Company:
          <input type="text" name="company" value={props.company} onChange={props.handleChange} />
        </label>
        <label>
          I agree to the terms of service
          <input type="checkbox" name="tos" checked={props.tos} onChange={props.handleChange}/>
        </label>
        <Link to='/review'><button>next</button></Link>
      </form>
    )
  }
}

export default FormStep
