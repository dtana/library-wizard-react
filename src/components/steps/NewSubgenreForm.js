import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import NavButtons from '../layout/NavButtons';

class NewSubgenreForm extends Component {
  render(){
    return(
      <div id="new-subgenre" className="content">
        <Form onSubmit={this.props.handleSubmit} ref={node => {this.form = node}}>
          <Form.Group controlId="newName">
            <Form.Label>Add new subgenre</Form.Label>
            <Form.Control
              required
              placeholder="Subgenre name"
              onChange={() => this.props.handleChange(this.form)}
              type="text"
            />
          </Form.Group>
          <Form.Check
            id="description"
            name="description"
            label="Description is required for this subgenre"
            onChange={() =>this.props.handleChange(this.form)}
            type="checkbox"
          />
          <NavButtons
            stepClick={this.props.stepClick}
            nextDisabled={this.props.nextDisabled}
          />
        </Form>
      </div>
    );
  }
}

export default NewSubgenreForm;
