import React from 'react';
import { Button } from 'react-bootstrap';

const StepSelector = (props) => {
  const {
    className,
    target,
    disabled,
    stepNo,
    stepName
  } = props;

  return (
    <div className={"step" + (className || "")} data-target={"#" + target}>
      <Button variant="secondary" className="step-trigger" disabled={disabled}>
        <span className="bs-stepper-circle">{stepNo}</span>
        <span className="bs-stepper-label" style={{opacity: stepNo === "..." ? 0 : 1 }}>{stepName}</span>
      </Button>
    </div>
  );
}

export default StepSelector;
