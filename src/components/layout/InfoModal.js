import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { ReactComponent as DoneIcon } from '../../assets/img/done.svg';

export default class InfoModal extends Component {
  render(){
    return(
      <Modal
        {...this.props} 
        size="lg text-center" 
        aria-labelledby="contained-modal-title-vcenter" 
        backdrop="static" 
        centered>
        <div className="modal-circle rounded-circle">
          <DoneIcon className="m-auto" />
        </div>
        <p>Book added successfuly</p>
        {this.props.children}
      </Modal>
    );
  }
}
