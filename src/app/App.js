import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import NavHeader from '../navHeader/NavHeader';
import FormStep from '../steps/FormStep';
import ReviewStep from '../steps/ReviewStep';
import FinalStep from '../steps/FinalStep';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company: '',
      tos: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name, {a: event.target});
    this.setState({
      [event.target.name]:
        event.target.type === 'checkbox' ? event.target.checked : event.target.value })
  }

  handleSubmit() {
    axios.post(this.props.url, this.state)
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const props = Object.assign({ handleChange: this.handleChange }, { handleSubmit: this.handleSubmit },  this.state);

    return (
      <div className="app-wrapper">
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
