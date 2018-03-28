import React, { Component } from 'react';

class Inputs extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Company:
            <input type="text" name="company" />
          </label>
          <label>
            I agree to the terms of service
            <input type="checkbox" name="tos" />
          </label>
        </form>
        <button onClick={this.props.handleNext}>Next</button>
      </div>
    )
  }
}
export default Inputs;