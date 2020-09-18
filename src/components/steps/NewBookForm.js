import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import NavButtons from '../layout/NavButtons';
import formData from '../../lib/constants/InfoForm';

class NewBookForm extends Component {
  render(){
    return (
      <div id="information" className="content">
        <Form onSubmit={this.props.handleSubmit} ref={node => {this.form = node}}>
          <Form.Group controlId="title">
            <Form.Label>Book title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Book title"
            />
          </Form.Group>
          <Form.Group controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control as="select" required>
              <option value="" hidden>Author</option>
              {formData.authors.map(author => (<option key={author}>{author}</option>))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="isbn">
            <Form.Label>ISBN</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="ISBN"
            />
          </Form.Group>
          <Form.Group controlId="publisher">
            <Form.Label>Publisher</Form.Label>
            <Form.Control as="select" required>
              <option value="" hidden>Publisher</option>
              {formData.publishers.map(publisher => (<option key={publisher}>{publisher}</option>))}
            </Form.Control>
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} md="2" controlId="date">
              <Form.Label>Date published</Form.Label>
              <DatePicker
                required
                id="date"
                className="form-control"
                selected={this.props.selectedDate}
                onChange={date => this.props.handleSelectDate(date)}
                dateFormat={formData.DATE_FORMAT}
                placeholderText="DD/MM/YYYY"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="2" controlId="pages">
              <Form.Label>Number of pages</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Number of pages"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="3" controlId="format">
              <Form.Label>Format</Form.Label>
              <Form.Control as="select" required>
                <option value="" hidden>Format</option>
                {formData.formats.map(format => (<option key={format}>{format}</option>))}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} md="3" controlId="edition">
            <Form.Label>Edition</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Edition"
            />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="language">
              <Form.Label>Edition language</Form.Label>
              <Form.Control as="select" required>
                <option value="" hidden>Edition language</option>
                {formData.languages.map(language => (<option key={language}>{language}</option>))}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required = {this.props.state.descriptionRequired}
              as="textarea"
              rows="2"
              placeholder="Type the description..."
            />
          </Form.Group>
          <NavButtons
            stepClick={this.props.stepClick}
            backClickHandler={() => this.props.stepClick.to(this.props.nextStep === 3 ? 3 : 2)}
            add={true}
          />
        </Form>
      </div>
    );
  }
}

export default NewBookForm;
