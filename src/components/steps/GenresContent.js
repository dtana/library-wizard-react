import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavButtons from '../layout/NavButtons';

class StepContent extends Component {
  render(){
    return(
      <div id={this.props.id} className="content">
        <div className="btn-wrapper">
          { this.props.data[this.props.id].map(genre => 
            <Button key={genre.id} variant="outline-secondary" onClick={event => this.props.handleSelect(event, genre.id)}>{ genre.name }</Button>
          )}
          { this.props.id === "subgenres" ? 
            <Button variant="outline-secondary" onClick={event => this.props.handleSelectAdd(event)}>Add new</Button> : null
          }
        </div>
        <NavButtons 
          id={this.props.id} 
          stepClick={this.props.stepClick} 
          nextClickHandler={this.props.id === "subgenres" ? this.props.nextClick : null} 
          backDisabled={this.props.backDisabled} 
          nextDisabled={this.props.nextDisabled} />
      </div>
    );
  }
}

export default StepContent;
