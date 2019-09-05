import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import './assets/css/index.scss';
import Wizard from './containers/Wizard';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducers';

const store = createStore(reducer);

const wizard = (
  <Provider store={store}>
    <Wizard />
  </Provider>
);

ReactDOM.render(wizard, document.getElementById('root'));
serviceWorker.unregister();
