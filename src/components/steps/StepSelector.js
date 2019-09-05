import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class StepSelector extends Component {
  render(){
    return(
      <div className={"step" + (this.props.className || "")} data-target={"#" + this.props.target}>
        <Button variant="secondary" className="step-trigger" disabled={this.props.disabled}>
          <span className="bs-stepper-circle">{this.props.stepNo}</span>
          <span className="bs-stepper-label" style={{opacity: this.props.stepNo === "..." ? 0 : 1 }}>{this.props.stepName}</span>
        </Button>
      </div>
    );
  }
}

export default StepSelector;
