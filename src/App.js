import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import NavHeader from './NavHeader';
import FormStep from './steps/FormStep'
import ReviewStep from './steps/ReviewStep'
import FinalStep from './steps/FinalStep'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company: '',
      tos: false
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(event.target.name, {a: event.target});
    this.setState({
      [event.target.name]:
        event.target.type === 'checkbox' ? event.target.checked : event.target.value })
  }

  render() {
    const props = Object.assign({ handleChange: this.handleChange }, this.state)

    return (
      <div>
        <NavHeader step={this.state.step}/>
        <Switch>
          <Route path='/form' render={() => <FormStep {...props} />} />
          <Route path='/review' render={() => <ReviewStep {...props} />} />
          <Route path='/final' render={() => <FinalStep {...props} />} />
          <Route component={FormStep} />
        </Switch>
      </div>
    )
  }
}
export default App;
