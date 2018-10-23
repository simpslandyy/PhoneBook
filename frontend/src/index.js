import React from 'react';
import ReactDOM from 'react-dom';
import  Phonebook  from './containers/Phonebook.container';
import registerServiceWorker from './utils/registerServiceWorker';

import { Provider } from 'react-redux';
import { storeConfig } from './utils/storeConfig';
import rootSaga from './rootSaga';

import './assets/stylesheets/index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let store = storeConfig();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
          <Phonebook />
          </Provider>, document.getElementById('root'));
// registerServiceWorker();
