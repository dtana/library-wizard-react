import React, { Component } from 'react';
import { connect } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import '../assets/css/Wizard.scss';
import { Card, Button } from 'react-bootstrap';
import genreData from '../lib/constants/WizardConfig';
import Stepper from 'bs-stepper';
import CardHeader from '../components/layout/CardHeader';
import StepSelector from '../components/steps/StepSelector';
import GenresContent from '../components/steps/GenresContent';
import NewSubgenreForm from '../components/steps/NewSubgenreForm';
import NewBookForm from '../components/steps/NewBookForm';
import InfoModal from '../components/layout/InfoModal';
import * as actionTypes from '../store/actions';

class Wizard extends Component {
  componentDidMount() {
    this.stepper = new Stepper(document.querySelector('#stepper'), {
      linear: false,
      animation: true
    });

    this.initWizard();
  }

  handleSubgenreFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const subgenres = this.props.subgenres;
    subgenres.push(this.props.newSubgenre);
    this.props.onSubgenreFormChange(this.subgenreForm.form);
    this.props.onSubgenreFormSubmit(subgenres);
    this.stepper.to(4);
    form.reset();
    this.newBookForm.form.title.focus();
  }

  handleNewBookFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = {};
    formData.genre = "id: " + this.props.genre + ", name: " + genreData.genres.find(genre => genre.id === this.props.genre).name;
    formData.subgenre = "id: " + this.props.subgenre + ", name: " + this.props.subgenres.find(subgenre => subgenre.id === this.props.subgenre).name;
    Array.from(form).forEach(e => formData[e.id] = e.value);
    form.reset();
    this.props.onShowModal();
    console.warn("New book data:");
    console.table(formData);
  }

  handleNextButtonClick() {
    this.props.onNextButtonClick();
    this.stepper.to(this.props.nextStep);
    this.subgenreForm.form.newName.focus();
  }

  initWizard() {
    const activeButtons = document.getElementsByClassName("btn-outline-secondary");
    for (let button of activeButtons) button.classList.remove("active");
    this.stepper.to(1);
    this.props.onInitWizard();
  }

  render() {
    return (
      <div className="container">
        <Card className="shadow-sm">
          <Card.Header>
            <CardHeader />
          </Card.Header>
          <div id="stepper" className="bs-stepper">
            <div className="bs-stepper-header">
              <StepSelector 
                target="genres" 
                stepNo="1" 
                stepName="Genre" />
              <div className="line"></div>
              <StepSelector 
                target="subgenres" 
                stepNo="2" 
                stepName="Subgenre" 
                disabled={this.props.genre === null} />
              <div className={"line" + (this.props.nextStep === 3 ? "" : " d-none")}></div>
              <StepSelector 
                className={this.props.nextStep === 3 ? "" : " d-none"} 
                target="new-subgenre" 
                stepNo="3" 
                stepName="Add new subgenre" 
                disabled={this.props.newSubgenre === null && this.props.buttonText !== 4} />
              <div className="line"></div>
              <StepSelector 
                target="information" 
                stepNo={this.props.buttonText} 
                stepName="Information" 
                disabled={this.props.subgenre === null} />
            </div>
            <div className="bs-stepper-content">
              <GenresContent 
                id="genres" 
                data={genreData} 
                handleSelect={this.props.onSelectGenre.bind(this)} 
                stepClick={this.stepper} 
                backDisabled={true} 
                nextDisabled={this.props.genre === null} />
              <GenresContent 
                id="subgenres" 
                data={this.props} 
                handleSelect={this.props.onSubgenreSelect.bind(this)} 
                handleSelectAdd={this.props.onAddSubgenreSelect.bind(this)} 
                stepClick={this.stepper} 
                backDisabled={false} 
                nextClick={this.handleNextButtonClick.bind(this)} 
                nextDisabled={this.props.subgenre === null && this.props.newSubgenre == null && this.props.buttonText !== 4} />
              <NewSubgenreForm 
                ref={node => {this.subgenreForm = node}} 
                state={this.props} 
                handleChange={this.props.onSubgenreFormChange.bind(this)} 
                handleSubmit={this.handleSubgenreFormSubmit.bind(this)} 
                stepClick={this.stepper} 
                nextDisabled={this.props.newSubgenre === null || this.props.newSubgenre.name === ""} 
                backDisabled={false} 
                nextClick={this.handleNextButtonClick.bind(this)} />
              <NewBookForm 
                ref={node => {this.newBookForm = node}} 
                selectedDate={this.props.selectedDate} 
                state={this.props} 
                handleSubmit={this.handleNewBookFormSubmit.bind(this)} 
                handleSelectDate={this.props.onSelectDate.bind(this)} 
                stepClick={this.stepper} />
            </div>
          </div>
        </Card>
        <InfoModal show={this.props.modalShow}>
          <Button size="sm" variant="secondary" type="button" onClick={() => this.initWizard()}>Add another book</Button>
        </InfoModal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    genre: state.genre,
    subgenre: state.subgenre,
    newSubgenre: state.newSubgenre,
    subgenres: state.subgenres,
    selectedDate: state.selectedDate,
    descriptionRequired: state.descriptionRequired,
    nextId: state.nextId,
    nextStep: state.nextStep,
    buttonText: state.buttonText,
    modalShow: state.modalShow
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitWizard: () => dispatch({type: actionTypes.INIT_APP}),
    onSelectDate: (date) => dispatch({type: actionTypes.UPDATE_DATE, selectedDate: date}),
    onSelectGenre: (e, id) => dispatch({type: actionTypes.SELECT_GENRE, event: e, genreId: id, data: genreData}),
    onSubgenreSelect: (e, id) => dispatch({type: actionTypes.SELECT_SUBGENRE, event: e, subgenreId: id, data: genreData}),
    onAddSubgenreSelect: (e) => dispatch({type: actionTypes.SELECT_ADD_SUBGENRE, event: e}),
    onSubgenreFormChange: (form) => dispatch({type: actionTypes.SUBGENRE_FORM_CHANGE, form}),
    onNextButtonClick: () => dispatch({type: actionTypes.NEXT_BUTTON_CLICK}),
    onSubgenreFormSubmit: (data) => dispatch({type: actionTypes.SUBGENRE_FORM_SUBMIT, subgenres: data}),
    onShowModal: () => dispatch({type: actionTypes.SHOW_MODAL})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
