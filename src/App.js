import React, { Component } from 'react';

import NavHeader from './NavHeader';
import Inputs from './Inputs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: {
        name: '',
        company: '',
        tos: null
      },
      form: 'STEP1'
    };
  }

  handleNext() {
    console.log('called', this.state.form);
    const currentStep = this.state.form;
    let nextStep = '';
    switch (currentStep) {
      case 'STEP1':
        nextStep = 'STEP2';
        break;
      case 'STEP2':
        nextStep = 'STEP3';
        break;
      case 'STEP3':
        nextStep = 'STEP3';
        break;
      default:
        nextStep = 'STEP1';
    }
    this.setState({ form: nextStep })
  }

  render() {
    return (
      <div>
        <NavHeader step={this.state.step}/>
        <Inputs entry={this.state.entry} handleNext={() => this.handleNext()}/>
      </div>
    )
  }
}
export default App;