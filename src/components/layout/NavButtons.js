import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { ReactComponent as BackIcon } from '../../assets/img/back.svg';

class NavButtons extends Component {
  render(){
    return(
      <div className="btn-buttons">
        <Button size="sm" variant="outline-secondary" 
          type="button" 
          onClick={() => this.props.backClickHandler ? this.props.backClickHandler() : this.props.stepClick.previous()}
          disabled={this.props.backDisabled}><BackIcon /> Back
        </Button>
        <Button size="sm ml-3" variant="secondary" 
          type={this.props.id ? "button" : "submit"}
          onClick={() => this.props.nextClickHandler ? this.props.nextClickHandler() : this.props.id ? this.props.stepClick.next() : null} 
          disabled={this.props.nextDisabled}>{this.props.add ? "Add" : "Next"}
        </Button>
      </div>
    );
  }
}

export default NavButtons;
