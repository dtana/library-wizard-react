import React from 'react';
import { Button } from 'react-bootstrap';
import NavButtons from '../layout/NavButtons';

const StepContent = (props) => {
  const {
    id,
    data,
    handleSelect,
    handleSelectAdd,
    stepClick,
    nextClick,
    backDisabled,
    nextDisabled
  } = props;

  return(
    <div id={id} className="content">
      <div className="btn-wrapper">
        { data[id].map(genre =>
          <Button key={genre.id} variant="outline-secondary" onClick={event => handleSelect(event, genre.id)}>{ genre.name }</Button>
        )}
        { id === "subgenres" ?
          <Button variant="outline-secondary" onClick={event => handleSelectAdd(event)}>Add new</Button> : null
        }
      </div>
      <NavButtons
        id={id}
        stepClick={stepClick}
        nextClickHandler={id === "subgenres" ? nextClick : null}
        backDisabled={backDisabled}
        nextDisabled={nextDisabled}
      />
    </div>
  );
}

export default StepContent;
